# cypress-express

## Pré-requisitos do Projeto

### Ferramentas Necessárias

- **Node.js**
  - Versão recomendada: `v22.14.0` (para Cypress)
  - Versão recomendada: `v18.12.1` (para MarkL)
- **Yarn**
  Instale globalmente:
  ```powershell
  npm install --global yarn
  ```
- **Git**
  Para clonar o repositório.

---

### Estrutura de Pastas

```powershell
C:\
└── QAx
    ├── apps
    │   └── markL
    └── project
        └── <nome do repo>
```

---

### Passos de Instalação

1. **Inicialize o projeto com Yarn**

   ```powershell
   yarn init
   ```

2. **Clone o repositório**

   ```powershell
   cd C:/QAx/project
   git clone <url-do-repo>
   cd <nome do repo>
   ```

3. **Instale o Cypress**
   ```powershell
   yarn add cypress@12.2.0 -D
   yarn cypress open
   ```

---

### MarkL App

1. **Extraia o arquivo `mark-dev-build-r3.zip` e salve como `markL` em `QAx/apps/markL`**
2. **API**
   ```powershell
   cd C:/QAx/apps/markL/api
   npm install
   npm run db:init
   npm run dev   # database rodando
   ```
3. **Web**
   ```powershell
   cd C:/QAx/apps/markL/web
   npm install
   npm run dev
   ```
4. **Acesse o app**
   - Abra [http://localhost:3000](http://localhost:3000) no navegador.

---
