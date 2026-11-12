# Grau de Rua

Protótipo 3D para navegador, desenvolvido com Three.js.

## Já implementado
- Cidade aberta com ruas, calçadas, quadras, casas e prédios.
- Modelos 3D externos de casas, comércio, oficina, árvores brasileiras e veículos.
- Trânsito simples com carros circulando pela cidade.
- Personagem 3D controlável a pé, com movimento de caminhada e corrida.
- Câmera em terceira pessoa, controlada arrastando a tela.
- Moto pilotável, com entrar e sair.
- Dez variações de motos 3D criadas por código; a garagem permite desbloquear modelos usando dinheiro fictício.
- HUD com minimapa, dinheiro e três missões de exploração com recompensa.

## Controles
### Celular
- Joystick esquerdo: andar e direcionar.
- Arrastar a área livre da tela: girar a câmera.
- Correr: alterna a corrida quando estiver a pé.
- Subir na moto / Descer da moto: entrar ou sair.
- Acelerar / Frear: controles da moto.
- Garagem: abrir quando estiver perto do prédio da oficina.

### Computador
- WASD ou setas: mover.
- Shift: correr.
- Arrastar com o mouse na área inferior: girar a câmera.
- E: subir ou descer da moto.
- G: abrir a garagem.

## Executar
Abra o arquivo index.html por um servidor HTTP local ou publique o repositório com GitHub Pages. O navegador precisa de internet para carregar Three.js e os modelos GLB hospedados no repositório de assets.

## Modelos e licenças
Os modelos de cidade carregados externamente vêm do Kit Cidade Low Poly (https://github.com/kayquer/kit-cidade-lowpoly), distribuído sob CC0 1.0. Os arquivos GLB são buscados no GitHub Raw quando o jogo inicia; eles não estão copiados para este repositório.

As dez motos atuais são modelos low-poly montados proceduralmente no próprio código. O personagem também é um modelo original feito com geometria do Three.js, com animação simples de caminhada/corrida. Portanto, ainda não são dez motos GLB externas nem um personagem humano rigado com animações de terceiros.

## Próximas etapas
- Melhorar o personagem e as animações.
- Integrar modelos de motocicletas com licenças claras.
- Melhorar colisões, tráfego, interiores, áudio e otimização para celulares.
- Criar mais missões e salvar progresso.
