/*
React com TS
-Adicionar TS ao React nos dá mais possibilidades
-Seguindo a mesma linha de que em JS, temos uma forma mais padronizada para programar
-Como tipos para componentes ou mapeamento de props por meio de interface
-Isso dá mais confiabilidade ao projeto e está sendo cada vez mais utilizado 
hoje em dia
*/

/*
Instalando React com TS
-Vamos começar com create-react-app e adicionar a flag -template com o 
valor de typescript
-Um novo projeto é criado, agora com arquivos .tsx
-Podemos inicializá-lo normalmente
*/

/*
Estrutura de React com TS
-A estrutura de React quando adicionamos TS não muda muito
-Temos as pastas clássicas como: node_modules, src e public
-Que são arquivos jsx porém com a possibilidade de aplicação das funcionalidades de TS
-Podemos executar o projeto com npm run start
*/

/*
Criação de variáveis em componentes
-Podemos criar variáveis dentro dos componentes
-E elas podem receber os tipos que já vimos até este momento do curso
*/

/*
Criação de funções em componentes
-Podemos também criar funções em componentes
-Estas funções recebem parâmetros, que podem ser tipados
-E o seu retorno também
*/

/*
Extensão para React com TS
-A extensão que vamos utilizar é a TypeScript React code snippets
-Ela nos ajuda com atalhos para programar mais rápido
-Como o tsrafce, que cria um componente funcional
*/

/*
Importando componentes
-A importação de componente funciona da mesma forma que sem TS
-Porém temos que nos atentar aos valores e tipos das props de cada componente
-O TS interage de forma mais sucinta na parte da importação
*/

/* 
Destructuring nas props
-O destructuring é um recurso de ES6, que permite separar um array ou objeto em várias váriaveis
-Aplicamos esta técnica nas props, para não precisar repetir o nome do objeto sempre
-Podemos fazer desta maneira em TS também
*/

/*
O hook useState
-O useState é um hook muito utilizado em React
-Serve para consultar e alterar o estado de algum dado
-Atrelamos uma função set a um evento, como mudança de dado em input e alteramos o valor da variável base
*/

/*
Enum
-O Enum é uma forma interessante de formatar um objeto com chaves e valores
-Onde podemos utilizar como props
-Passando a chave pela prop, imprimimos o valor dela no componente
*/

/*
Types
-Além da sinterfaces, podemos criar estruturas de tipos com o type
-Isso nos permite criar dados com tipos de dados fixos
-Ou até tipos customizados, como quando utilizamos o operador |
*/

/*
Context API
-A Context API, é uma forma de transmitir dados entre os componentes do React
-A ideia principal é que podemos determinar quais componentes recebem estes dados
-Ou seja, fazem parte do contexto
*/

/* 
Utilizando o dado de contexto
-Para utilizar os dados do contexto vamos precisar de um hook
-Que é o use Context
-A partir dele conseguimos extrair os dados e utilizar em um componente
*/