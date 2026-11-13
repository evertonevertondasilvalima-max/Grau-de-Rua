# Moto de Rua

Protótipo 3D de exploração e direção de motocicletas em uma cidade, desenvolvido com Three.js.

## Funcionalidades no código
- Cidade aberta com ruas, calçadas, quadras, casas e prédios.
- Modelos GLB externos de residências, comércio, oficina, árvores, mobiliário e veículos.
- Trânsito simples com carros GLB.
- Personagem controlável a pé, com joystick e corrida.
- Câmera em terceira pessoa controlada por arraste.
- Entrar e sair da moto.
- Garagem com dez opções de motocicletas GLB reais e seleção/desbloqueio com dinheiro fictício.
- HUD com minimapa, dinheiro e missões de exploração.

## Controles

### Celular
- Joystick esquerdo: andar e direcionar.
- Arrastar a área livre da tela: girar a câmera.
- Correr: alterna a corrida quando estiver a pé.
- Subir na moto / Descer da moto: entrar ou sair.
- Acelerar / Frear: controles da moto.
- Garagem: abrir perto do prédio da oficina.

### Computador
- WASD ou setas: mover.
- Shift: correr.
- Arrastar a área inferior com o mouse: girar a câmera.
- E: subir ou descer da moto.
- G: abrir a garagem.

## Executar
Abra `index.html` por um servidor HTTP local ou publique o repositório com GitHub Pages. É necessária conexão com a internet para carregar Three.js e os modelos GLB externos.

## Modelos e licenças
- **Motos:** dez GLBs do pacote [Motorcycle Racing and Street Bikes](https://3dassets.dev/packs/motorcycle-racing-and-street-bikes), licença CC0 1.0. Os arquivos são carregados individualmente pelo CDN.
- **Cidade:** [Kit Cidade Low Poly](https://github.com/kayquer/kit-cidade-lowpoly), licença CC0 1.0, com casas, prédios, comércio, carros, táxi, árvores, arbustos e mobiliário.
- **Personagens e vegetação adicionais:** [Gobkit](https://gobkit.com/freebies), cujos modelos gratuitos são declarados CC0 1.0.

Os arquivos binários dos modelos não estão armazenados neste repositório; são baixados de suas fontes durante a execução. Consulte [ASSETS-3D.md](ASSETS-3D.md) para a lista de arquivos e os manifestos usados na conferência.

## Estado de validação
As fontes, IDs, caminhos de arquivos e licenças dos assets foram conferidos. O código da garagem foi alterado para não criar motos geométricas provisórias caso um GLB falhe; a moto fica indisponível até o carregamento real ser concluído.

**O jogo ainda não está aprovado para entrega:** não foi possível executar um teste visual em navegador nesta atualização. Renderização 3D, escala/orientação observada das dez motos, controles móveis, carregamento de todos os modelos e ausência de erros continuam pendentes de teste em navegador.
