# Avelino Fisioterapia

Este é o projeto oficial do website e sistema de gestão da **Dra. Liviane Avelino**. O objetivo é consolidar sua identidade visual, profissionalismo e facilitar a captação de pacientes via tráfego pago e agendamento inteligente.

🚀 **Live Deploy:** [avelino-fisioterapia.vercel.app](https://avelino-fisioterapia.vercel.app/)

---

## 🔗 Links Úteis

*   📄 **Documentação de Env Vars:** [Google Doc Vars](https://docs.google.com/document/d/1jBBo7lDhvunrKk_De2tOEL6PLC40REvsHOj13nktLDw/edit?usp=sharing)
*   📁 **Assets & Informações Extras (Drive):** [Google Drive Folder](https://drive.google.com/drive/folders/1vvysBylm7kZ5QkJkTDASXkKMlQLgoorI?usp=drive_link)
*   🎨 **Design (Figma):** [Avelino Fisioterapia - Figma](https://www.figma.com/design/4hP9JDb5JbSnT8zanU5SEl/Avelino-Fisioterapia?node-id=0-1&t=TYpNu2hMApdIr81P-1)

---

## 🛠️ Tecnologias Principais

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Banco de Dados:** [Prisma](https://www.prisma.io/) (PostgreSQL)
*   **Gerenciamento de Estado:** [TanStack Query](https://tanstack.com/query/latest)
*   **Ícones:** [Lucide React](https://lucide.dev/)
*   **Lint/Format:** [Biome](https://biomejs.dev/)

---

## 🚀 Como Executar o Projeto

### 1. Clonar e Instalar
```bash
git clone https://github.com/pedroffd/avelinofisioterapia.git
cd avelinofisioterapia
yarn install
```

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e preencha com as informações do [documento de suporte](https://docs.google.com/document/d/1jBBo7lDhvunrKk_De2tOEL6PLC40REvsHOj13nktLDw/edit?usp=sharing).

### 3. Rodar o Desenvolvimento
```bash
yarn dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📂 Estrutura de Pastas de Desenvolvimento
*   `src/app`: Rotas e Layouts (Next.js).
*   `src/components`: Componentes reutilizáveis e seções da Landing Page.
*   `src/lib`: Configurações de serviços externos (Google API, Prisma Client).
*   `prisma`: Schema e Migrations do banco de dados.

---

## 🛠️ Desenvolvimento e Contribuição

### Padrão de Commits
Este projeto utiliza **Conventional Commits**. Certifique-se de que suas mensagens de commit sigam o padrão (ex: `feat:`, `fix:`, `refactor:`). O `husky` validará isso automaticamente durante o commit.

### Banco de Dados (Prisma)
Sempre que o `schema.prisma` for alterado ou ao iniciar o projeto, execute:
```bash
npx prisma generate  # Gera o cliente Typescript
npx prisma db push   # Sincroniza o banco de dados (ambiente de dev)
```

### Qualidade de Código
Antes de abrir um Pull Request, valide seu código com o Biome:
```bash
yarn lint    # Para verificar erros e lints
yarn format  # Para formatar o código automaticamente
```

### Gerenciamento de Tarefas
O gerenciamento de sprint e backlog é feito via **Linear**. Solicite acesso ao workspace **Avelino Fisioterapia** para visualizar as tasks e projetos ativos.
