# Biblioteca 3D — Moto de Rua

## Modelos integrados nesta atualização

Os modelos abaixo são carregados em formato GLB pelo Three.js a partir do repositório público **kayquer/kit-cidade-lowpoly**.

- **Casas e prédios:** casa simples, sobrado, casas geminadas, prédio de apartamentos e prédio alto.
- **Comércio e edifícios:** loja de esquina, mercado, restaurante, hotel, oficina e galpão.
- **Vegetação:** ipê-amarelo, araucária e buriti.
- **Cidade:** poste de luz, ponto de ônibus, semáforo e banco de praça.
- **Trânsito:** modelos GLB de carro e táxi.

## Dez motos 3D reais adicionadas

A garagem agora possui dez entradas ligadas a dez arquivos GLB distintos do pacote **Motorcycle Racing and Street Bikes**, da 3DAssets.dev. Os modelos são carregados pelo GLTFLoader e substituem a geometria provisória da moto quando o download termina.

1. Prototype grand prix bike
2. Superbike
3. Supersport middleweight
4. Lightweight single-cylinder racer
5. Flat-track twin
6. Speedway single
7. Trials competition bike
8. Supermoto single
9. Road sportbike
10. Naked streetfighter

- Pacote: https://3dassets.dev/packs/motorcycle-racing-and-street-bikes
- Manifesto e URLs GLB: https://3dassets.dev/api/v1/packs/motorcycle-racing-and-street-bikes
- Licença: **CC0 1.0 Universal**, sem exigência de atribuição.
- Os modelos incluem animações de roda/partes móveis nos arquivos de origem; a animação de roda é reproduzida quando disponível.

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

## Nota sobre motos

Os dez modelos acima são arquivos 3D independentes e distintos. A aparência exata depende do carregamento do CDN; se a conexão falhar, o jogo mantém temporariamente o modelo de reserva para não deixar a garagem vazia.
