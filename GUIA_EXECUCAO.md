# Como Rodar e Testar seu Portfólio

## 🚀 Como Executar o Projeto

### Opção 1: Rodar Tudo de Uma Vez (Recomendado)
```bash
# Na pasta raiz do projeto
npm run dev
```
Este comando vai iniciar tanto o backend quanto o frontend simultaneamente.

### Opção 2: Rodar Separadamente
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

### Opção 3: Usar as Tarefas do VS Code
1. Pressione `Ctrl+Shift+P`
2. Digite "Tasks: Run Task"
3. Escolha "Start Full Stack"

### Opção 4: Usando o Script de Reinicialização
O projeto inclui um script PowerShell para reiniciar rapidamente os serviços:

```powershell
# Reiniciar tudo
.\restart.ps1

# Reiniciar apenas o backend
.\restart.ps1 -backend

# Reiniciar apenas o frontend
.\restart.ps1 -frontend
```
Este script irá encerrar processos existentes nas portas usadas e reiniciar os serviços.

## 📍 URLs dos Serviços

- **Frontend**: http://localhost:5174
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## 🔍 Verificação de Status

### API Backend
Para verificar se o backend está funcionando corretamente, acesse:
```
http://localhost:3001/api/health
```

Você deve ver uma resposta JSON como esta:
```json
{
  "success": true,
  "message": "API do Portfólio funcionando!",
  "timestamp": "2025-05-25T12:34:56.789Z"
}
```

### Debug (apenas em desenvolvimento)
Para verificar informações de debug da API, acesse:
```
http://localhost:3001/api/debug
```

### Frontend
O frontend estará disponível em:
```
http://localhost:5173
```

## 📱 Testando a Responsividade

Você pode testar a responsividade do site de várias maneiras:

1. **Redimensionando o navegador**: Simplesmente ajuste o tamanho da janela do navegador.
2. **DevTools do navegador**: Use as ferramentas de desenvolvedor (F12) para simular diversos dispositivos.
3. **Dispositivos reais**: Acesse o site pelo seu smartphone ou tablet quando estiver na mesma rede Wi-Fi.

## 🧪 Testando Funcionalidades

### Navegação
- Clique nos links do menu para navegar entre as seções
- Verifique se a rolagem suave está funcionando
- Teste a navegação em dispositivos móveis (menu hamburguer)

### Formulário de Contato
1. Preencha o formulário com dados inválidos e verifique as validações
2. Preencha o formulário com dados válidos e envie
3. Verifique se a mensagem de sucesso aparece

### Projetos
- Teste os filtros de projetos por tecnologia
- Clique nos links para GitHub e visualização ao vivo

## 📦 Build para Produção

Para gerar uma versão de produção:

```bash
# Na pasta raiz do projeto
npm run build
```

Para testar a versão de produção:

```bash
npm start
```

## 🛠️ Funcionalidades Implementadas

### Frontend
- ✅ Design responsivo com Tailwind CSS
- ✅ Navegação suave entre seções
- ✅ Componente Hero com apresentação
- ✅ Seção Sobre com skills e experiência
- ✅ Galeria de projetos com filtros
- ✅ Formulário de contato funcional
- ✅ Footer com links sociais
- ✅ Integração com API

### Backend
- ✅ API REST com TypeScript
- ✅ Endpoints para projetos, contatos e informações pessoais
- ✅ Upload de imagens (perfil e projetos)
- ✅ Banco de dados em memória (simulação)
- ✅ Tratamento de erros
- ✅ CORS configurado
- ✅ Segurança com Helmet

## 🔧 Comandos Úteis

### Instalar Dependências
```bash
# Instalar tudo de uma vez
npm run install:all

# Ou separadamente
cd backend && npm install
cd frontend && npm install
```

### Build para Produção
```bash
npm run build
```

### Executar em Produção
```bash
npm start
```

## 📂 Estrutura de Arquivos

```
Portifolio/
├── backend/                 # API TypeScript/Express
│   ├── src/
│   │   ├── controllers/     # Controladores da API
│   │   ├── middleware/      # Middlewares (upload, errors)
│   │   ├── models/         # Modelos de dados
│   │   ├── routes/         # Rotas da API
│   │   └── types/          # Tipos TypeScript
│   └── uploads/            # Arquivos enviados
├── frontend/               # React/Vite
│   └── src/
│       ├── components/     # Componentes React
│       ├── services/       # Serviços de API
│       └── types/          # Tipos TypeScript
└── package.json           # Scripts do monorepo
```

## 🐛 Solução de Problemas

### Backend não inicia
- Verifique se a porta 3001 está livre
- Certifique-se que as dependências estão instaladas: `cd backend && npm install`

### Frontend não carrega
- Verifique se a porta 5173/5174 está livre  
- Certifique-se que as dependências estão instaladas: `cd frontend && npm install`

### Erro de CORS
- Verifique se o backend está rodando na porta 3001
- Confirme a configuração em `backend/src/index.ts`

### Upload de imagens não funciona
- Verifique se a pasta `backend/uploads` existe
- Confirme as permissões de escrita

### Se o servidor backend não iniciar:
1. Verifique se a porta 3001 não está sendo usada
2. Tente encerrar o processo manualmente:
   ```powershell
   # Encontre o processo
   Get-NetTCPConnection -LocalPort 3001 | Select-Object OwningProcess
   
   # Encerre o processo (substitua XXXXX pelo número do processo)
   Stop-Process -Id XXXXX -Force
   ```

### Se o frontend não iniciar:
1. Verifique se a porta 5173 não está sendo usada
2. Tente limpar o cache:
   ```bash
   cd frontend
   rm -rf node_modules/.vite
   npm run dev
   ```

### Se as imagens não carregarem:
1. Verifique se a pasta `uploads` existe e tem as permissões corretas
2. Verifique se os arquivos de imagem existem na pasta

## 📱 Próximos Passos

1. **Banco de Dados**: Integrar com MongoDB ou PostgreSQL
2. **Autenticação**: Adicionar login para área administrativa
3. **Deploy**: Configurar para Vercel, Netlify ou Heroku
4. **Cache**: Implementar cache para melhor performance
5. **Testes**: Adicionar testes unitários e de integração
