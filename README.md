# Helpdesk starter (CA-5 Lab)

Only fill in the TODO sections.

## Start the databases (one command)
Needs Docker. From this folder:
```bash
docker compose up -d
```
This starts PostgreSQL (database `helpdesk`, already loaded with `postgres/setup.sql`) and Redis.

Open a psql prompt for Part A:
```bash
docker compose exec db psql -U postgres -d helpdesk
```
Paste your SQL there. To reset the data: `docker compose down -v` then `docker compose up -d`.

## Part B
```bash
cd redis-app
npm install
cp .env.example .env
npm run dev
```
Redis is on `localhost:6380` (already set in `.env.example`).
