import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright';

const server = spawn('python3', ['-m', 'http.server', '4173', '--bind', '127.0.0.1'], { stdio: 'ignore' });
let browser;
let page;
const pageErrors = [];
const consoleErrors = [];
const badResponses = [];

async function waitForServer() {
  for (let i = 0; i < 40; i++) {
    try {
      const response = await fetch('http://127.0.0.1:4173/');
      if (response.ok) return;
    } catch {}
    await delay(250);
  }
  throw new Error('Servidor local não iniciou.');
}

async function tap(page, selector) {
  const box = await page.locator(selector).boundingBox();
  assert.ok(box, 'Controle não encontrado: ' + selector);
  await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
}

async function touchHold(cdp, page, selector, milliseconds) {
  const box = await page.locator(selector).boundingBox();
  assert.ok(box, 'Controle não encontrado: ' + selector);
  const point = { x: box.x + box.width / 2, y: box.y + box.height / 2, id: 7, radiusX: 2, radiusY: 2, force: 1 };
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point] });
  await page.waitForTimeout(milliseconds);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
}

async function touchDrag(cdp, page, selector, dx, dy) {
  const box = await page.locator(selector).boundingBox();
  assert.ok(box, 'Área de toque não encontrada: ' + selector);
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;
  const point = (px, py) => ({ x: px, y: py, id: 8, radiusX: 2, radiusY: 2, force: 1 });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point(x, y)] });
  for (let step = 1; step <= 6; step++) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [point(x + dx * step / 6, y + dy * step / 6)] });
    await page.waitForTimeout(30);
  }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
}

try {
  await waitForServer();
  browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--use-gl=angle', '--use-angle=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist']
  });
  page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error' && !message.text().includes('favicon.ico')) consoleErrors.push(message.text());
  });
  page.on('response', response => {
    if (response.status() >= 400 && !response.url().endsWith('/favicon.ico')) badResponses.push(response.status() + ' ' + response.url());
  });

  await page.goto('http://127.0.0.1:4173/?e2e=1', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForFunction(() => window.__MOTO_READY__ === true, { timeout: 30000 });
  await tap(page, '#play');
  await page.waitForFunction(() => window.__MOTO_E2E__ && window.__MOTO_E2E__.pending === 0 && window.__MOTO_E2E__.frames > 3 && window.__MOTO_E2E__.triangles > 0, { timeout: 120000 });

  const initial = await page.evaluate(() => ({ ...window.__MOTO_E2E__, canvas: !!document.querySelector('canvas') }));
  assert.equal(initial.canvas, true, 'Canvas WebGL não foi criado.');
  assert.ok(initial.triangles > 0, 'A cena não renderizou triângulos 3D.');
  assert.equal(initial.cityFailed.length, 0, 'Falhas em modelos da cidade: ' + initial.cityFailed.join(', '));
  assert.equal(initial.gobkitFailed.length, 0, 'Falhas em modelos Gobkit: ' + initial.gobkitFailed.join(', '));
  assert.equal(initial.carsFailed.length, 0, 'Falhas em carros GLB: ' + initial.carsFailed.join(', '));
  assert.ok(initial.carsLoaded > 0, 'Nenhum carro GLB foi carregado.');
  assert.ok(initial.cityLoaded.some(path => /residencial|comercial|industrial/.test(path)), 'Nenhuma casa ou prédio GLB carregou.');
  assert.ok(initial.cityLoaded.some(path => path.includes('vegetacao')), 'Nenhuma árvore/vegetação do kit carregou.');
  assert.ok(initial.gobkitLoaded.some(url => url.includes('TreeHigh')), 'Nenhuma árvore Gobkit carregou.');
  assert.ok(initial.gobkitLoaded.some(url => url.includes('Bush')), 'Nenhum arbusto Gobkit carregou.');
  assert.ok(initial.gobkitLoaded.some(url => url.includes('human')), 'Nenhum personagem Gobkit carregou.');
  assert.equal(initial.playerLoaded, true, 'O personagem controlável não carregou.');
  assert.equal(initial.playerFailed, false, 'O personagem controlável falhou.');

  await tap(page, '#garageBtn');
  assert.equal(await page.locator('.bikeChoice').count(), 10, 'A garagem não mostra dez opções.');
  await tap(page, '#closeGarage');

  for (let index = 0; index < 10; index++) {
    await page.evaluate(i => window.__MOTO_TEST__.selectBike(i), index);
    await page.waitForFunction(i => window.__MOTO_E2E__.bikesLoaded[i] === true || Boolean(window.__MOTO_E2E__.bikesFailed[i]), index, { timeout: 45000 });
    const result = await page.evaluate(i => ({ loaded: window.__MOTO_E2E__.bikesLoaded[i] === true, failed: window.__MOTO_E2E__.bikesFailed[i] || null }), index);
    assert.equal(result.loaded, true, 'Moto ' + index + ' falhou: ' + result.failed);
  }

  await page.evaluate(() => window.__MOTO_TEST__.selectBike(0));
  await page.waitForFunction(() => window.__MOTO_E2E__.pending === 0 && window.__MOTO_E2E__.bikesLoaded[0] === true, { timeout: 30000 });
  await tap(page, '#mount');
  await page.waitForFunction(() => window.__MOTO_E2E__.riding === true, { timeout: 5000 });
  const beforeRide = await page.evaluate(() => ({ x: window.__MOTO_E2E__.bikeX, z: window.__MOTO_E2E__.bikeZ }));
  const cdp = await page.context().newCDPSession(page);
  await touchHold(cdp, page, '#gas', 700);
  await page.waitForTimeout(200);
  const afterRide = await page.evaluate(() => ({ x: window.__MOTO_E2E__.bikeX, z: window.__MOTO_E2E__.bikeZ }));
  assert.ok(Math.hypot(afterRide.x - beforeRide.x, afterRide.z - beforeRide.z) > 0.05, 'O acelerador por toque não moveu a moto.');
  await tap(page, '#mount');
  await page.waitForFunction(() => window.__MOTO_E2E__.riding === false, { timeout: 5000 });

  await tap(page, '#run');
  assert.ok((await page.locator('#run').innerText()).includes('SIM'), 'O botão de corrida não alternou.');
  const beforeWalk = await page.evaluate(() => ({ x: window.__MOTO_E2E__.playerX, z: window.__MOTO_E2E__.playerZ }));
  await touchDrag(cdp, page, '#joystick', 0, -32);
  await page.waitForTimeout(350);
  const afterWalk = await page.evaluate(() => ({ x: window.__MOTO_E2E__.playerX, z: window.__MOTO_E2E__.playerZ }));
  assert.ok(Math.hypot(afterWalk.x - beforeWalk.x, afterWalk.z - beforeWalk.z) > 0.05, 'O joystick por toque não moveu o personagem.');
  const yawBefore = await page.evaluate(() => window.__MOTO_E2E__.cameraYaw);
  await touchDrag(cdp, page, '#look', 42, 0);
  const yawAfter = await page.evaluate(() => window.__MOTO_E2E__.cameraYaw);
  assert.notEqual(yawAfter, yawBefore, 'Arrastar a área de câmera não alterou a direção.');

  assert.deepEqual(pageErrors, [], 'Erros fatais JavaScript: ' + pageErrors.join(' | '));
  assert.deepEqual(consoleErrors, [], 'Erros no console: ' + consoleErrors.join(' | '));
  assert.deepEqual(badResponses, [], 'Respostas HTTP com erro: ' + badResponses.join(' | '));
  console.log(JSON.stringify({ status: 'PASS', viewport: '390x844 mobile touch', bikesLoaded: initial.bikesLoaded.length ? initial.bikesLoaded.filter(Boolean).length : 10, cityAssetsLoaded: initial.cityLoaded.length, gobkitAssetsLoaded: initial.gobkitLoaded.length, carsLoaded: initial.carsLoaded, triangles: initial.triangles, mobileControls: ['garage', 'mount/dismount', 'gas', 'joystick', 'camera drag', 'run'] }));
} catch (error) {
  if (page) await page.screenshot({ path: 'moto-mobile-failure.png', fullPage: true }).catch(() => {});
  throw error;
} finally {
  if (browser) await browser.close();
  server.kill('SIGTERM');
}