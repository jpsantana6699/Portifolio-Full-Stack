# Portfólio — João Pedro Santana

Site pessoal para apresentar meu trabalho como desenvolvedor Full Stack: serviços, projetos, trajetória e contato.

No ar em **https://joaopedrotech.netlify.app**.

## Stack

- **Next.js 16** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS 4** no visual
- **Motion** nas animações (spotlight, cards 3D, scroll horizontal) e **Lenis** na rolagem suave
- **lucide-react** nos ícones
- Tradução PT/EN pelo `LanguageContext`; projetos e links ficam em `src/app/data/`

## Páginas

| Rota | O que tem |
|---|---|
| `/` | Apresentação com foto, serviços, projetos em destaque, stack e como funciona |
| `/sobre` | História, linha do tempo da carreira, stack e currículo |
| `/projetos` | Projetos com filtro por categoria (sistemas, sites, BI, pessoais) |
| `/contato` | Formulário que abre o WhatsApp com a mensagem pronta (nada é salvo no site) |

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

Descritas em [`.env.local.example`](./.env.local.example).

| Variável | O que é |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública usada no SEO/OpenGraph |

## Deploy

Netlify, com deploy automático a cada push na `main`. O Netlify detecta o Next.js e usa o runtime oficial dele; as variáveis acima ficam em **Site configuration → Environment variables**.

## Contato

- **E-mail:** jpsantana003@gmail.com
- **LinkedIn:** [João Pedro Santana](https://www.linkedin.com/in/jo%C3%A3o-pedro-santana-01570623a/)
- **GitHub:** [jpsantana6699](https://github.com/jpsantana6699)

## Licença

MIT — veja [LICENSE](./LICENSE).
