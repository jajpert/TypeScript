/*
Conhecendo o Postman
.O postman é um client para testes de API
.Podemos então criar o back-end antes ou separado do front
só com a ajuda deste software
.Como você deve imaginar, é fundamental quando estamos criando APIs
.Podemos simular verbos, corpos de requisição, inserir headers, tudo
que é possível com uma aplicação web
*/

/*
Roteamento
.Podemos utilizar qualquer verbo HTTP nas rotas Express
.Vamos criar uma que funciona a base de POST
.Para isso precisamos trafegar dados em JSON, podemos fazer isso 
ativando um middleware
.Iremos realizar os testes com o Postman
*/

/*
Rota para qualquer verbo
.Utilizando o método all, podemos criar uma rota que aceita qualquer 
verbo
.É interessante para quando um endpoint precisa realizar várias funções
.Podemos criar um tratamento para entregar a resposta
*/

/*
Interfaces do Express
.Para alinhar nossa aplicação ao TS vamos adicionar novos tipos
.As request podem utilizar o tipo Request
.E as respostas o Response
*/

/*
JSON como respostas
.Na maioria das vezes enviamos JSON para endpoints de API
.Para fazer isso com Express é fácil, basta enviar o JSON no método 
json de response
*/

/*
Router parameters
.Podemos pegar parâmetros de rotas com Express
.Vamos utilizar req.params
.A rota a ser criada precisa ser dinâmica, ou seja, os parâmetros que 
estamos querendo receber precisam estar no padrão :id
*/

/*
Rota mais complexa
.Podemos ter rotas com mais de um parâmetro
.Todos os dados continuam em req.params
.O é oadrão é: /algo/:param1/outracoisa/:param2
.Teremos então: param1 e param2 em req
*/

/*
Router handler
.Basicamente retiramos a função anônima de uma rota e
externalizamos em uma função
.Podemos reaproveitar essa função, ou estruturar nossa aplicação 
desta maneira
*/

/*
Middleware
.É um recurso para executar uma função entre a execução de uma rota, por exemplo
.O nosso app.use de json é um middleware
.Podemos utilizar middleware para validações, por exemplo
*/

/*
Middleware para todas as rotas
.Para criar um middleware que é executado em todas as rotas vamos 
utilizar o método use
.Criamos uma função e atrelamos ao método
. Desta maneira todas as rotas terão ação do nosso middleware
*/

/*
Request e Response generics
.Podemos estabelecer os argumentos que vem pelo request e vão pela response
.Para isso vamos utilizar os Generics de Response e Request que são Interfaces 
disponibilizadas pelo Express
*/

/*
Tratando erros
.Para tratar possíveis erros utilizamos blocos try catch
.Desta maneira podemos detectar algum problema e retornar uma resposta 
para o usuário ou até mesmo criar um log no sistema
*/