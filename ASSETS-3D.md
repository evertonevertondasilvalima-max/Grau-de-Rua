# Biblioteca 3D — Moto de Rua

## Dez motos 3D reais da garagem

A garagem usa dez arquivos GLB publicados no pacote **Motorcycle Racing and Street Bikes** da 3DAssets.dev. Os dez modelos abaixo aparecem no manifesto oficial do pacote, com licença **CC0 1.0 Universal**, dimensões em metros, eixo Y para cima, frente apontada para +Z e animações de roda/direção/descanso.

| Opção na garagem | Modelo publicado | Arquivo GLB |
|---|---|---|
| 1 | Prototype grand prix bike | [15416](https://cdn.3dassets.dev/assets/15416/v1/model.glb) |
| 2 | Superbike | [15415](https://cdn.3dassets.dev/assets/15415/v1/model.glb) |
| 3 | Supersport middleweight | [15422](https://cdn.3dassets.dev/assets/15422/v1/model.glb) |
| 4 | Lightweight single-cylinder racer | [15421](https://cdn.3dassets.dev/assets/15421/v1/model.glb) |
| 5 | Flat-track twin | [15420](https://cdn.3dassets.dev/assets/15420/v1/model.glb) |
| 6 | Speedway single | [15418](https://cdn.3dassets.dev/assets/15418/v1/model.glb) |
| 7 | Trials competition bike | [15417](https://cdn.3dassets.dev/assets/15417/v1/model.glb) |
| 8 | Supermoto single | [15423](https://cdn.3dassets.dev/assets/15423/v1/model.glb) |
| 9 | Road sportbike | [15424](https://cdn.3dassets.dev/assets/15424/v1/model.glb) |
| 10 | Naked streetfighter | [15425](https://cdn.3dassets.dev/assets/15425/v1/model.glb) |

Fontes e licença:
- Pacote e manifesto: https://3dassets.dev/packs/motorcycle-racing-and-street-bikes
- Manifesto JSON: https://3dassets.dev/api/v1/packs/motorcycle-racing-and-street-bikes
- Licença: CC0 1.0 Universal; o manifesto declara que não exige atribuição.
- O pacote declara 69 arquivos GLB e recomenda carregamento pelo Three.js GLTFLoader, sem Draco/Meshopt/KTX2.

O código usa as dimensões reais declaradas no manifesto para validar o tamanho importado. Os modelos são centralizados no eixo X/Z e apoiados no chão; a orientação local +Z é girada para a direção de avanço do jogo. Se o GLB falhar ou chegar com dimensões inesperadas, a moto não é substituída por cubos nem por geometria provisória: o erro fica visível no estado da garagem e impede montar até uma nova tentativa.

## Cidade: casas, prédios, carros, árvores e mobiliário

O jogo referencia arquivos GLB do repositório público **kayquer/kit-cidade-lowpoly**:
- Repositório: https://github.com/kayquer/kit-cidade-lowpoly
- Manifesto de arquivos: árvore Git do branch `main`
- Licença do repositório: CC0 1.0 Universal.
- O repositório declara 129 modelos GLB.

Modelos usados no código:
- Residências: `casa_simples.glb`, `casa_sobrado.glb`, `casas_geminadas.glb`, `predio_apartamentos.glb`, `predio_alto.glb`.
- Comércio e indústria: `loja_esquina.glb`, `mercado.glb`, `restaurante.glb`, `hotel.glb`, `oficina.glb`, `galpao.glb`.
- Veículos: `carro.glb`, `taxi.glb`.
- Vegetação: `ipe_amarelo.glb`, `araucaria.glb`, `buriti.glb`, `arbustos.glb`.
- Mobiliário: `poste_luz.glb`, `ponto_onibus.glb`, `semaforo.glb`, `banco_praca.glb`.

Os caminhos acima foram conferidos na árvore de arquivos do repositório de origem. O jogo os busca pelo endereço GitHub Raw; os arquivos binários não estão copiados neste repositório.

## Personagens e vegetação adicionais

O jogo usa modelos GLB da biblioteca gratuita Gobkit:
- Manifesto: https://gobkit.com/api/free
- Página da biblioteca: https://gobkit.com/freebies
- A biblioteca declara licença CC0 1.0 para os modelos gratuitos.

Arquivos referenciados no jogo:
- Árvores: `TreeHigh001.glb`, `TreeHigh002.glb`.
- Arbustos: `Bush001.glb`, `Bush002.glb`.
- Personagens: `OfficeWorker.glb`, `Student.glb`, `FoodCourier.glb`, `StoreManager.glb`.

Os nomes e URLs acima constam no manifesto oficial da biblioteca. Os personagens são rigados; o código atual inicia a animação Idle quando ela está disponível.

## Carregamento e estado dos testes

Three.js e GLTFLoader são carregados por CDN. Os arquivos GLB também são carregados de servidores externos em tempo de execução. É necessária conexão com a internet e a disponibilidade desses servidores.

**Verificação feita nesta atualização:** os dez IDs das motos e a licença CC0 foram conferidos no manifesto do pacote; os caminhos de cidade foram conferidos na árvore do repositório CC0; os nomes/URLs dos personagens e da vegetação Gobkit foram conferidos no manifesto da biblioteca.

**Ainda pendente:** não houve execução em navegador nesta atualização. Portanto, renderização visual, escala/orientação observada, controles móveis, carregamento simultâneo e ausência de erros em dispositivo real ainda não estão aprovados. A presença de URL ou metadados não é tratada como prova de renderização.
