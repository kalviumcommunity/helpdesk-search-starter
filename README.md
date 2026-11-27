# Helpdesk starter (CA-5 Lab)

Two independent parts. Only fill in the TODO sections.

## Prerequisites
- Local PostgreSQL (Tasks 1-2) and Redis (Tasks 3-5)
- Node.js 18+ (Tasks 3-5)

## Tasks 1-2: PostgreSQL (psql)
```bash
createdb helpdesk
psql -d helpdesk -f postgres/setup.sql
```
- Task 1: `postgres/task1_assign.sql`
- Task 2: `postgres/ANSWERS.md`

## Tasks 3-5: Redis app
```bash
cd redis-app
npm install
cp .env.example .env
npm run dev
```
- Task 3: `src/cache.js`, `src/routes/articles.js`
- Task 4: `src/rrf.js`
- Task 5: `src/rag.js`

Check: `npm run check` (app running), `npm run eval`.

## Submit
Zip the folder without `node_modules`, `.env`, `.git`.
