# Helpdesk starter (CA-5 Lab)

Two independent parts. Only fill in the TODO sections.

## Prerequisites
- Local PostgreSQL (Part A) and Redis (Part B)
- Node.js 18+ (Part B)

## Part A: PostgreSQL (psql)
```bash
createdb helpdesk
psql -d helpdesk -f postgres/setup.sql
```
- Task 1: `postgres/task1_assign.sql`
- Task 2: `postgres/ANSWERS.md`

## Part B: Redis app
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
