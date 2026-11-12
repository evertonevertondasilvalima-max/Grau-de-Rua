# Biblioteca 3D — Grau de Rua

## Modelos integrados nesta atualização

Os modelos abaixo são carregados em formato GLB pelo Three.js a partir do repositório público **kayquer/kit-cidade-lowpoly**.

- **Casas e prédios:** casa simples, sobrado, casas geminadas, prédio de apartamentos e prédio alto.
- **Comércio e edifícios:** loja de esquina, mercado, restaurante, hotel, oficina e galpão.
- **Vegetação:** ipê-amarelo, araucária e buriti.
- **Cidade:** poste de luz, ponto de ônibus, semáforo e banco de praça.
- **Trânsito:** modelos GLB de carro e táxi.

## Licença

O repositório de origem publica a biblioteca sob **CC0 1.0 Universal**. A licença permite copiar, modificar e redistribuir os modelos, inclusive em projetos comerciais.

- Origem: https://github.com/kayquer/kit-cidade-lowpoly
- Licença: https://github.com/kayquer/kit-cidade-lowpoly/blob/main/LICENSE

## Carregamento

O jogo usa Three.js GLTFLoader e carrega os GLB sob demanda. É necessária conexão com a internet para baixar os modelos externos na primeira execução.

## Observação

Esta atualização melhora os elementos da cidade e o trânsito. Não representa uma substituição completa de todos os modelos do jogo; alguns elementos de gameplay ainda são protótipos e precisam de etapas próprias de desenvolvimento.

## Modelos adicionais Gobkit integrados

Também foram adicionados modelos GLB gratuitos da biblioteca Gobkit:

- **Vegetação:** TreeHigh001, TreeHigh002, Bush001 e Bush002.
- **Moradores/NPCs:** OfficeWorker, Student, FoodCourier e StoreManager.
- Os moradores usam a animação `idle` quando ela está presente no arquivo GLB.
- Origem: https://gobkit.com/freebies
- Manifesto oficial dos modelos: https://gobkit.com/api/free
- Licença informada por modelo: **CC0 1.0 Universal**.

Esses modelos são carregados pelo GLTFLoader a partir dos endereços oficiais Gobkit. Portanto, ainda exigem internet durante o carregamento. A integração não significa que os arquivos GLB estejam armazenados dentro deste repositório.
