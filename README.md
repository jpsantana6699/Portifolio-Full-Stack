# Portfólio — João Pedro Santana

Site pessoal para apresentar meu trabalho como desenvolvedor Full Stack: serviços, projetos, trajetória e contato.

No ar em **https://joaopedrotech.netlify.app**.

## Stack

- **Next.js 16** (App Router) + **React 18** + **TypeScript**
- **Material-UI 6** com Emotion
- **tsParticles** e **react-type-animation** nas animações
- **Nodemailer** na rota `/api/contact` do formulário de contato
- Tradução PT/EN pelo `LanguageContext`

## Páginas

| Rota | O que tem |
|---|---|
| `/` | Apresentação, serviços, como funciona e depoimentos |
| `/sobre` | História, o que faço hoje, stack e linha do tempo da carreira |
| `/projetos` | Projetos com filtro por categoria (sistemas, sites, BI, pessoais) |
| `/contato` | Formulário (e-mail) com fallback para o WhatsApp |

## Como rodar

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Verificações antes de subir:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Variáveis de ambiente

Descritas em [`.env.local.example`](./.env.local.example). Sem as variáveis de SMTP, o formulário responde `503` e o site leva o visitante para o WhatsApp.

| Variável | O que é |
|---|---|
| `SMTP_HOST` / `SMTP_PORT` | Servidor SMTP (ex.: `smtp.gmail.com` / `465`) |
| `SMTP_USER` / `SMTP_PASS` | Conta e senha de app do e-mail que envia |
| `CONTACT_TO` | Quem recebe os contatos (padrão: `SMTP_USER`) |
| `NEXT_PUBLIC_SITE_URL` | URL pública usada no SEO/OpenGraph |

## Deploy

Netlify, com deploy automático a cada push na `main`. O Netlify detecta o Next.js e usa o runtime oficial dele; as variáveis acima ficam em **Site configuration → Environment variables**.

## Contato

- **E-mail:** jpsantana003@gmail.com
- **LinkedIn:** [João Pedro Santana](https://www.linkedin.com/in/jo%C3%A3o-pedro-santana-01570623a/)
- **GitHub:** [jpsantana6699](https://github.com/jpsantana6699)

## Licença

MIT — veja [LICENSE](./LICENSE).
