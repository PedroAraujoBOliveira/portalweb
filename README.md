# Portal Bons Fluídos 🌸

Sistema web para gestão de doações, voluntários, palestras e conteúdos educativos.
Projeto desenvolvido para a disciplina **Certificadora de Competências I**.

---

## 📚 Funcionalidades

- Cadastro de **doações** (tipo, doador, data)
- Cadastro de **voluntários** (nome, contato, área de interesse)
- Cadastro de **palestras** (data, local, tema)
- Exibição de **conteúdo educativo** sobre saúde e conscientização
- **Login de administrador** e painel com visualização de registros

---

## 📁 Estrutura de Pastas

```bash
├── admin/
│   ├── login.html
│   └── dashboard.html
├── backend/
│   ├── models/
│   │   ├── Admin.js
│   │   ├── Doacao.js
│   │   ├── Palestra.js
│   │   └── Voluntario.js
│   ├── .env
│   ├── server.js
│   └── createAdmin.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── components/
│   ├── header.html
│   └── footer.html
└── README.md
```

---

## 🧪 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript puro
- **Backend:** Node.js + Express
- **Banco de Dados:** MongoDB Atlas + Mongoose
- **Ferramentas:** VS Code, MongoDB Compass, GitHub

---

## 🧰 Instalação

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/portal-bons-fluidos.git
cd portal-bons-fluidos/backend
```

### 2. Instalar dependências do backend
```bash
npm install
```

### 3. Criar o arquivo `.env`
```bash
echo "MONGO_URI=<sua-URI-do-MongoDB>" > .env
```

> Exemplo de URI:
> ```
> MONGO_URI=mongodb+srv://admin:senha@cluster0.mongodb.net/portal?retryWrites=true&w=majority
> ```

### 4. Criar usuário admin (opcional)
```bash
node createAdmin.js
```

### 5. Rodar o servidor
```bash
node server.js
```

Servidor rodando em: `http://localhost:3000`

---

## ▶️ Executar o Projeto

1. Com o servidor rodando, abra o arquivo `public/index.html` no navegador.
2. Cadastre doações, voluntários e palestras.
3. Acesse `admin/login.html` para entrar como administrador.

**Credenciais padrão:**
```
Usuário: admin
Senha: admin123
```

---

## 🔒 Rotas Backend (API REST)

| Método | Rota                    | Função                       |
|--------|-------------------------|------------------------------|
| POST   | `/api/doacoes`         | Cadastrar doação             |
| GET    | `/api/doacoes`         | Listar doações               |
| POST   | `/api/voluntarios`     | Cadastrar voluntário         |
| GET    | `/api/voluntarios`     | Listar voluntários           |
| POST   | `/api/palestras`       | Cadastrar palestra           |
| GET    | `/api/palestras`       | Listar palestras             |
| POST   | `/api/login`           | Login de administrador       |

---

## 📄 Licença

Projeto acadêmico sem fins lucrativos. Todos os direitos reservados aos autores.
