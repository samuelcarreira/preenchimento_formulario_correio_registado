# Preenchimento de Formulários de Correio Registado

Página Web para auxiliar o preenchimento e impressão dos Formulários de Correio Registado dos CTT. Basta preencher os campos, colocar o formulário na impressora e imprimir!

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)


## http://samuelcarreira.com/correioregistado/

## Funcionalidades
 - Impressão rápida dos formulários com uma fonte legível
 - Armazenamento local dos últimos dados introduzidos (nome e morada) de forma a facilitar o preenchimento futuro (ver FAQ)
 - Página simples de acesso rápido (não é preciso instalar nada, nem descarregar nenhum PDF por exemplo)


## Motivação
Decidi criar esta página simples porque a minha caligrafia não é das melhores e porque prefiro utilizar o computador para preencher os formulários e o formulário que criei no Word não era o mais prático para usar. 
É claro que poderia criar um formulário PDF em vez de criar uma página Web, mas não consegui encontrar nenhum editor de PDF gratuito que me permitisse criar um bom formulário sem limitações.


---

## FAQ
- **Os meus dados pessoais são armazenados de forma segura?**
    - Não existe nenhum armazenamento remoto dos seus dados. Conforme é possível ver no código-fonte, todos os dados são armazenados no browser local (o que quer dizer que se mudar de browser/fizer limpeza dos dados, perderei todos os dados) através da funcionalidade de LocalStorage (mais informações https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage )


- **Experimentei a aceder à página noutro dispositivo e não tenho os dados preenchidos**
    - Conforme está descrito na pergunta acima, não há nenhum armazenamento de dados online. Tudo é armazenado no seu browser e por isso, ao mudar de dispositivo/browser, não terá acesso aos dados guardados noutro dispositivo.

- **A impressão não está perfeitamente ajustada. Como corrigir?**
    - Não é possível esperar um alinhamento perfeito na impressão, tal depende de muitos fatores, tais como a impressão do formulário e a tolerância na impressora. Pode no entanto ajustar em frações de 0.5mm o alinhamento de todos os elementos. Exemplo: pode subir -1 mm no eixo vertical ("y") todos os elementos de forma serem impressos 1 mm acima


---

## Licença

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="http://samuelcarreira.com" target="_blank">Samuel Carreira</a>.