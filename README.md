# Leal Barber — Landing Page

Landing page da barbearia **Leal Barber** (São Paulo - SP), liderada por Nicolle Leal.

## Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite 7](https://vite.dev) com `vite-plugin-singlefile` (build gera um único `index.html`)
- [Tailwind CSS 4](https://tailwindcss.com)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

O resultado fica em `dist/` — um `index.html` único (JS e CSS embutidos) mais a pasta `images/`. Basta subir essas duas coisas em qualquer hospedagem estática (GitHub Pages, Vercel, Netlify, etc.).

## Seções

- **Início** — hero com CTA de agendamento via WhatsApp
- **Sobre** — apresentação da Nicolle e diferenciais
- **Serviços** — tabela de preços
- **Galeria** — antes/depois e fotos reais dos trabalhos
- **Localização** — endereço, horários, contato, fachada e mapa
