# API com Cadastro e Login em NodeJS

# Descrição

API em NodeJS com banco de dados MongoDB aplicada no postman. Com as rotas '/usuarios/cadastro' - POST (Cadastrar usuários passando os dados: nome, email e senha) e '/usuarios/login' - POST (Fazer Login passando os dados: email e senha).

- Obs: Criar um banco de dados no MongoLab, conectar a aplicação com o banco colocando a URL na variável URL_BANCO no arquivo .env e testar no MongoDB Compass.


# Dependências usadas

- bcrypt  (Método de criptografia do tipo hash para senhas baseado no Blowfish e esse apresenta uma segurança maior em relação à maioria dos outros métodos);
- body-parser  (faz formatação e transformação de dados vindos do usuário);
- dotenv  (orquestra as variáveis ambiente de um projeto, mostrando onde elas ficarão);
- express  (framework web que roda o nodejs em tempo de execução);
- mongoose  (módulo do NodeJS desenvolvido para conectar-se ao MongoDB).

# Comandos

- Clonar o projeto:

```bash
git clone https://github.com/lucasharzer/cadastro_login_nodejs.git
```

- Preparar as dependências:

```bash
npm i
```

- Rodar a aplicação:

```bash
npm start
```
