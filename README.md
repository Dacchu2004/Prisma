# 📦 Prisma ORM Learning Project

A hands-on learning project for exploring **Prisma ORM** with **TypeScript** and **PostgreSQL**.
Built while following along with Prisma fundamentals — from schema design to CRUD operations and migrations.

---

## 🛠 Tech Stack

- **Prisma ORM** — schema, migrations, Prisma Client
- **TypeScript** — strict mode, CommonJS
- **PostgreSQL** — relational database
- **Node.js** — runtime

---

## 📁 Project Structure

```
prisma/
  schema.prisma        # Data models and relations
  migrations/          # Auto-generated migration SQL
prisma.config.ts       # Prisma config with dotenv support
script.ts              # Practice scripts (CRUD operations)
tsconfig.json
```

---

## 🗃 Schema Overview

Models defined in `prisma/schema.prisma`:

| Model            | Description                              |
|------------------|------------------------------------------|
| `User`           | Core user with role enum (BASIC/ADMIN)   |
| `UserPreference` | One-to-one optional preference record    |
| `Post`           | Posts with author + optional favBy user  |
| `Category`       | Many-to-many relation with posts         |

---

## 📝 Concepts Practiced

- `createMany`, `findUnique`, `findFirst`, `findMany`
- `update`, `updateMany` with field operators (`increment`, `multiply`, etc.)
- `delete`, `deleteMany`
- Filtering: `distinct`, `take`, `skip`, `orderBy`
- Relations: one-to-one, one-to-many, many-to-many
- Enums, composite unique constraints, indexes
- Schema migrations with `prisma migrate dev`

---

## ⚙️ Setup

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Add your DATABASE_URL to .env

# Run migrations
npx prisma migrate dev

# Run a script
npx ts-node script.ts
```

---

## 📌 Notes

- `script.ts` contains commented-out examples for each operation type
- `prisma.config.ts` uses `dotenv/config` for local `.env` loading
- All scripts follow a `main()` + `.finally(() => prisma.$disconnect())` pattern

---

Built while learning Prisma — not production code
