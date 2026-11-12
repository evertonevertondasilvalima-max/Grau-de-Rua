# Biblioteca 3D — Moto de Rua

## Motos 3D usadas pela garagem

A garagem possui dez opções de motos. Os primeiros cinco endereços abaixo apontam para modelos GLB genéricos com licença CC0; eles são referências visuais, não réplicas oficiais de marcas/modelos específicos.

1. **Adventure** — referência visual genérica para a Africa Twin: [GLB Adventure](https://files.innerscene.com/library/adventure-motorcycle-3de675e4/05f6f5080ca0a95360c3/adventure-motorcycle.glb).
2. **Sport Touring** — referência visual genérica para a Tiger Sport: [GLB Sport Motorcycle](https://files.innerscene.com/library/sport-motorcycle-e21e8303/625e0c0c4f03a83504cf/sport-motorcycle.glb).
3. **Street 160** — moto genérica; não é uma CG 160 Start oficial: [GLB Cafe Racer](https://files.innerscene.com/library/cafe-racer-motorcycle-e3fce667/20df806e3886dd1fe8fa/cafe-racer-motorcycle.glb).
4. **Trail** — moto off-road genérica: [GLB Dirt Motorcycle](https://files.innerscene.com/library/dirt-motorcycle-0a9c8589/61860de39c02fb96db40/dirt-motorcycle.glb).
5. **Cruiser** — moto custom genérica: [GLB Cruiser Motorcycle](https://files.innerscene.com/library/cruiser-motorcycle-96e47436/d499a54c2a3fccf45c85/cruiser-motorcycle.glb).
6–10. As outras cinco opções continuam apontando para os endereços CDN já existentes no código e ainda precisam de verificação individual de licença, integridade e aparência.

Os cinco modelos Innerscene são GLB e estão identificados como **CC0 1.0** nas respectivas páginas, permitindo uso, modificação e redistribuição. Consulte as páginas de origem antes de publicar alterações:
- https://www.innerscene.com/tools/library/3d-parts/adventure-motorcycle-3de675e4
- https://www.innerscene.com/tools/library/3d-parts/sport-motorcycle-e21e8303
- https://www.innerscene.com/tools/library/3d-parts/cafe-racer-motorcycle-e3fce667
- https://www.innerscene.com/tools/library/3d-parts/dirt-motorcycle-0a9c8589
- https://www.innerscene.com/tools/library/3d-parts/cruiser-motorcycle-96e47436

## Cidade e personagens

O jogo também referencia modelos GLB do kit público **kayquer/kit-cidade-lowpoly** para edifícios, vegetação, mobiliário urbano e veículos:
- Origem: https://github.com/kayquer/kit-cidade-lowpoly
- Licença declarada pelo projeto: CC0 1.0.
- Modelos carregados pelo GLTFLoader a partir dos endereços do repositório.

Modelos de vegetação e moradores também são carregados da biblioteca Gobkit:
- Origem: https://gobkit.com/freebies
- Manifesto: https://gobkit.com/api/free
- A licença deve ser conferida para cada arquivo antes de redistribuição.

## Como os arquivos são carregados

O jogo usa Three.js e GLTFLoader para buscar os GLB por URL durante a execução. **Os arquivos binários das motos não foram copiados para dentro deste repositório nesta atualização**; por isso, é necessária conexão com a internet e os modelos podem não carregar se os servidores externos estiverem indisponíveis.

A integração no código não equivale a teste visual no navegador. Escala, orientação, materiais, desempenho em celular e compatibilidade ainda precisam ser testados no jogo.
