# Radek Gryc Portfolio Site

## What this is
Single-page portfolio site. Dark, premium, slightly playful.
Target: AM/PM recruiters. Not an engineering portfolio.

## Stack
Next.js 14 App Router · TypeScript · Tailwind · Framer Motion · Vercel

## Content system
- All content lives in /content/
- base.json = core profile (never edit for role variants)
- roles/am-pm.json = role-specific overrides
- lib/content.ts merges them at build time
- To create a new role variant: duplicate roles/am-pm.json, rename, adjust

## Key conventions
- Components are in /src/components/, one file per section
- All animations use Framer Motion (no CSS keyframes)
- Colors: background #0a0a0a, accent #C8922A, text #F5F5F5
- Fonts: Playfair Display for headings, Inter for body

## Do NOT
- Add auth, databases, or API routes in V1
- Add pages beyond the single-page layout in V1
- Change the content schema without updating lib/content.ts

## North-star
Recruiter opens the link and reads past the fold.
Test: does the project section make someone want to ask a question?

## Deploy
Push to branch → Vercel auto-deploys to branch URL
main → meet-radek.vercel.app
role/am-pm → auto-generated branch URL
