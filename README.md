# NimbusCRM (AI-Powered CRM SaaS Starter)

Production-grade Next.js + TypeScript CRM starter with PostgreSQL/Prisma backend architecture, secure auth, role-based access, and AI integration points.

## Stack
- Next.js App Router + TypeScript + Tailwind CSS
- PostgreSQL + Prisma ORM
- JWT auth with role-based middleware
- Modular API layer with validation (Zod)
- AI service abstraction ready for OpenAI API

## Architecture
- `app/(auth)`: public authentication pages
- `app/(app)`: authenticated product pages
- `app/api/*`: backend routes by domain (auth, crm, admin, ai)
- `components/*`: reusable UI, layout, and feature components
- `lib/*`: shared services, validators, auth, AI clients
- `prisma/*`: schema and deterministic seed data

## Key Features Included
- Authentication: login/register/forgot-password endpoints + protected routes
- Role access: Admin section restricted in middleware
- Dashboard metrics + activity panels
- Clients CRUD foundation + detail timeline + notes
- Leads pipeline board with stage grouping
- Tasks with assignee/due date/priority model
- Admin user management endpoint + page
- AI endpoints:
  - `/api/ai/summarize`
  - `/api/ai/next-action`
  - `/api/ai/email-draft`
  - `/api/ai/lead-analysis`
  - `/api/ai/hot-leads`

## Setup
1. Copy env values:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate Prisma client + migrate + seed:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate -- --name init
   npm run prisma:seed
   ```
4. Run app:
   ```bash
   npm run dev
   ```

## Production hardening checklist
- Replace mock AI client with real OpenAI integration
- Add audit logging + rate limiting + Sentry
- Add e2e tests (Playwright) and CI workflows
- Add Redis queue for reminders/notifications
- Add robust pagination/filtering on list APIs
