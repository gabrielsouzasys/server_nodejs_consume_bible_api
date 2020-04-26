# Aplicação NODEJS consumindo API Bible.org

* Printando o texto em formato html
* gera o servidor no destino: http://localhost:2015/

#### Step by Step 

##### 1. Instalar o NodeJS versão estável (Para ver se o node.js está instalado, abra o Terminal e digite node -v. Ele mostrará o número da versão caso você já o tenha)
(Para verificar se o npm está instalado, digite npm -v. Ele mostrará o número da versão)
No entanto, você também pode atualizá-lo usando este comando: npm update -g npm

##### 2. Criar a pasta do projeto NODE
##### 3. Entrar na papsta criada e abrir o CMD a apartir dela  
##### 4. Executar NPM INIT (O npm é o gerenciador de pacotes do node) 

#### Para a criação do package.json o npm pedira os dados abaixo.
O nome do projeto;
A versão inicial;
A descrição;
O ponto de entrada;
Os comandos de teste;
O repositório git;
As palavras-chave;
A licença;
As dependências;
As dependências do desenvolvedor (devDependencies).


###### package name: (teste)
###### version: (1.0.0)
###### description:
###### entry point: (index.js)
###### test command:
###### git repository:
###### keywords:
###### author:
###### license: (ISC)


#### O arquivo criado fica assim:
`
{
  "name": "teste",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
`

##### 5. Criar o arquivo index.js 
##### 6. Executar o arquivo no node CMD 
##### 7. node index.js (dentro do arquivo node.index está o código da aplicação e o console.log da execução no servidor localhost:2015)

no arquivo package.json podemos incluir um script para rodar o node index.js

  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

para executar o node basta rodar o comando:
npm start


##Instalar Módulos npm
Um pacote em node.js contém todos os arquivos que você precisa para um módulo. Os módulos são bibliotecas JavaScript que você pode incluir no seu projeto.

Instalar módulos é uma das coisas mais básicas que você deve aprender a fazer quando começar a usar o gerenciador de pacote Node. Segue um comando para instalar um módulo no diretório atual:

$ npm install <module> 
$ npm i <module>


O comando acima irá instalar o módulo express em /node_modules no diretório atual.
Sempre que você instalar um módulo do npm, ele será instalado na pasta node_modules.

O modulo instalado será incluído no Package.json na sessão dependencies.
https://medium.com/tableless/criando-o-meu-novo-site-4-utilizando-npm-para-instala%C3%A7%C3%A3o-de-pacotes-6c7cea2ab4b3

