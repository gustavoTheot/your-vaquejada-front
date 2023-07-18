# Introdução 

A aplicação foi criada para representar a parte visual de um sistema de gerenciamento de vaquejadas.

# Construção 🏗️

A estrutura da aplicação é organizada em diferentes pacotes, cada um com uma finalidade específica:

### Components 🗃️
O pacote **components** contém componentes que são usados repetidamente em toda a aplicação, como botões e diferentes formatos de cabeçalho.

### Layout 📂
O pacote **layout** contém o componente que utiliza cabeçalhos diferentes dependendo da página, como por exemplo: um layout padrão exibido antes do usuário fazer login e um layout de usuário mostrado após o login.

### Lib 📂
O pacote **lib** contém a conexão com a API criada para realizar todas as operações de dados.

### Pages 📂
O pacote **pages** contém todas as páginas da aplicação e seus visuais.

### Styles 📂
O pacote **styles** abrange a parte visual da aplicação, incluindo o estilo global, como variáveis com cores que podem ser importadas em toda a aplicação.

## Tecnologias Utilizads 💻

Tecnologias utilizadas na construção do front-end:

- Typescript
- React Router Dom (trabalho com rotas)
- Axios (conexão com a API)
- Phosphor React (ícones)
- Styles Component (estilização em forma de componente)
- Zod (validação de formulário)


# Necessário 🛠️

### Instalar 📦

Para instalar as dependências do projeto, execute o seguinte comando:
```bash
npm install

```

### Run

Para executar a aplicação, utilize o seguinte comando após ter aberto a aplicação seja no prompt de comando ou VSCode:
```bash
npm run dev
```
