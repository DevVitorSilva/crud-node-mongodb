# crud-node-mongoDB

**Requisitos:** 

* Ter o [nodejs](https://nodejs.org/pt-br) instalado na sua máquina.

* Ter uma conta no [mongodb atlas](https://www.mongodb.com/cloud/atlas/register) ou instalado [mongodb community edition](https://www.mongodb.com/try/download/community) na sua máquina.

* Ter instalado na sua máquina o [insomnia](https://insomnia.rest/download) ou o [postman](https://www.postman.com/) para fazer as requisições na api.

**Opcional:**

* Ter instalado o [compass](https://www.mongodb.com/products/compass), um visualizador de banco de dados.

**Passo a passo:**

1. clone este repositório.

2. abra o projeto no [vscode](https://code.visualstudio.com/) ou na IDE de sua preferência.

3. configure as variáveis de ambiente no arquivo **.env**, lá deve configurar a porta que o servidor irá rodar e os dados(credenciais no caso do atlas ou url no caso do community edtion) do mongodb.

4. abra o terminal integrado do vscode ou um terminal externo, se caso deseje usar o terminal externo lembre-se de que deve estar no repositório do projeto clonado.

5. digite o seguinte comando no terminal ```npm install``` para instalar as dependências do projeto, em segui digite ```npm update``` este comando atualizará todos os pacotes listados para a versão mais recente.

6. ainda no terminal digite ```npm start```, se tudo ocorrer bem irá aparecer a mensagem **Server running**, caso contrário irá aparecer um erro, se a conexão com o mongo for estabelecida irá aparecer a mensagem **Connected to database**, caso contrário a mensagem será **db connection error**.

7. abra o insomnia para acessar as rotas da api.

**Rotas:**

* GET ```/api/v1/people``` requisita todos os nomes do mongodb.

* POST ```/api/v1/register``` cadastra um novo nome passando o argumento **name**, o argumento passado deve ser um JSON:
 ~~~json
{
    "name": "John Doe"
}
~~~

* PUT ```/api/v1/update``` irá atualizar algum nome já cadastrado, os argumentos são o **name** e o **id**, no argumento **name** irá ser colocado o novo nome que deseja, os argumentos passados devem ser um JSON:
 ~~~json
{
    "id": "10",
    "name": "Jaime Doe"
}
~~~

* DELETE ```/api/v1/delete``` irá deletar um nome já cadastrado, o argumento a ser passado é somente o **id**, o argumento passado deve ser um JSON:
 ~~~json
{
    "id": "10"
}
~~~
