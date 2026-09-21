# Edemrey Homes and Properties Limited

Company/marketing + listings portal for Edemrey Homes & Properties. React + Vite + TypeScript, client-side routing, SEO meta, contact/lead flow.

## Stack
- React 18, React Router 7, TypeScript, Vite 6
- Tailwind CSS 4, @tailwindcss/typography, lucide-react, motion
- react-helmet-async for SEO
- Express backend shim for local/dev (`src`, `server` entry where present)

## Run locally
1. `npm install`
2. `cp .env.example .env` if you need runtime env (defaults are placeholders)
3. `npm run dev` â€” Vite on port 3000 (`--host 0.0.0.0`)
4. `npm run build` / `npm run preview`
5. `npm run lint` (`tsc --noEmit`)

## Deploy
- `netlify.toml` present â€” Netlify-ready static + functions setup.
- `.env*` gitignored except `.env.example`. No secrets committed.

## Repo
- Default branch: `main`
- Author: Abdulsobur Obe â€” https://www.linkedin.com/in/abdulsobur-obe-463a6729b/
