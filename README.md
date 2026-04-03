# AI CRM Platform

Production-ready starter architecture for an AI-powered CRM built with **Next.js 15 + TypeScript + Tailwind + Prisma + PostgreSQL + NextAuth**.

## What is included

- App Router structure with route groups using valid folder names (`auth`, `dashboard`)
- Role-based auth foundations (Admin, Manager, Employee)
- CRM domains: clients, leads, tasks, activities, notes
- AI integration service layer (OpenAI-ready)
- Prisma schema + seed script with realistic sample data
- API route scaffolding by bounded context
- Reusable premium SaaS UI shell (sidebar, topbar, cards, tables)

## Quick start

```bash
pnpm install
cp .env.example .env
pnpm prisma generate
pnpm prisma migrate dev
pnpm prisma db seed
pnpm dev
```

## Folder structure

```text
src/
  app/
    auth/
      login/
      register/
      forgot-password/
    dashboard/
      page.tsx
      clients/
      leads/
      tasks/
      analytics/
      settings/
      admin/users/
    api/
      auth/
      clients/
      leads/
      tasks/
      ai/
  components/
    layout/
    dashboard/
    clients/
    leads/
    tasks/
    ui/
  features/
    auth/
    clients/
    leads/
    tasks/
    ai/
  lib/
    auth/
    db/
    validations/
    permissions/
prisma/
  schema.prisma
  seed.ts
```

## Next steps

1. Implement full form handlers + optimistic updates.
2. Wire drag-and-drop board with persisted lead stage updates.
3. Add background workers for reminders and AI enrichment.
4. Add observability, audit trails, and security hardening.
