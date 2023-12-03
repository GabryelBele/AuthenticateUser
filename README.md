# API de Autenticação de Usuários

**Dentro da coleção do postman, acesse o ícone "import" e cole a url abaixo**
**Coleção do Postman dessa api: https://api.postman.com/collections/29971967-136b5c8e-7b1a-4963-9417-25e33f10970e?access_key=PMAT-01HGRER72PP61QBFG0SPJ8EYAY**

### 1. Sign Up (Criação de Cadastro)

- **Requisição:** 
    - Método: POST
    - Endpoint: `https://authenticateuser-production.up.railway.app/user`
    - Corpo da Requisição (JSON):
        ```json
        {
            "nome": "nome",
            "email": "nome@gmail.com",
            "password": "987654321",
            "telefones": [{
              "numero": "98765431", "ddd": "60"
        }]
        ```
- **Output (sucesso):**
    - Status: 200 OK
    - Resposta (JSON):
        ```json
        {
          "id": 2,
          "data_criacao": "2023-12-03T16:26:42.585Z",
          "data_atualizacao": "2023-12-03T16:26:42.585Z",
          "ultimo_login": "2023-12-03T16:26:42.608Z",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzAxNjIwODAyLCJleHAiOjE3MDE2MjI2MDJ9.njK7Rf-x5CikE3zW_HAiukMhwqTvJn6tAbx962-vczw"
        }
        ```
- **Erro:**
    - E-mail já cadastrado:
        - Status: 400 Bad Request
        - Resposta (JSON):
            ```json
            {
                "mensagem": "E-mail já existente"
            }
            ```

### 2. Sign In (Autenticação)

- **Requisição:** 
    - Método: POST
    - Endpoint: `https://authenticateuser-production.up.railway.app/signin`
    - Corpo da Requisição (JSON):
        ```json
        {
            "email": "email@exemplo.com",
            "senha": "senha123"
        }
        ```
- **Output:**
    - Status: 200 OK
    - Corpo da Requisição (JSON):
        ```json
        {
            "token": "tokenexemplo"
        }
        ```
- **Erros:**
    - E-mail não cadastrado ou senha incorreta:
        - Status: 401 Unauthorized
        - Resposta (JSON):
            ```json
            {
                "mensagem": "Usuário e/ou senha inválidos"
            }
            ```
    - Senha incorreta:
        - Status: 401 Unauthorized
        - Resposta (JSON):
            ```json
            {
                "mensagem": "Usuário e/ou senha inválidos"
            }
            ```

### 3. Buscar Usuário por ID

- **Requisição:** 
    - Método: GET
    - Endpoint: `https://authenticateuser-production.up.railway.app/user/{id}`
    - Header: 
        ```
        Authorization: Bearer {token}
        ```
- **Output (sucesso):**
    - Status: 200 OK
    - Resposta (JSON):
        ```json
        {
            "id": 123,
            "nome": "Nome do Usuário",
            "email": "email@exemplo.com",
            // Outras informações do usuário
        }
        ```
- **Erros:**
    - Token inválido:
        - Status: 403 Forbidden
        - Resposta (JSON):
            ```json
            {
                "mensagem": "Não autorizado"
            }
            ```
    - Token expirado (mais de 30 minutos):
        - Status: 403 Forbidden
        - Resposta (JSON):
            ```json
            {
                "mensagem": "Sessão inválida"
            }
            ```
