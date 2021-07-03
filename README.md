# Galeria de Praças


## Descrição

Este projeto consiste numa simples exibição de algumas praças famosas no mundo. Na tela principal, temos uma lista exibindo cards com algumas informações das praças, como nome, foto, por exemplo. Caso o usuário queira conhecer mais detalhes de alguma praça específica, ele pode clicar no card desejado da lista, que será aberto uma nova página, exibindo um mapa e dados de localização, como país, cidade e, em alguns casos, o endereço.

## Como rodar a aplicação

Para rodar a aplicação pela primeira vez, é preciso seguir os passos abaixo, dentro do diretório principal do projeto:

1. Rodar o `npm install` para instalar todas as depedências do projeto
2. Rodar o comando `json-server pracas.json` para subir o servidor com os dados das praças
3. Dar o comando `ng serve -o` para buildar a aplicação e abrir o navegador na página principal
    
## Tecnologias utilizadas

A versão do Angular utilizada neste projeto foi a `v9.1.12`. Para a construção dos componentes visuais, serviços e afins, foi utilizado tecnologias populares como o Typescript, HTML e CSS. Os mapas foram feitos com a versão `v7.0.1` do Ngx-leaflet, que é uma solução para o Angular que nos permite utilizar os mapas do Leaflet dentro da aplicação.