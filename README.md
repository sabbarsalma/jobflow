# JobFlow

A full-stack job application tracker, built from the ground up to learn production-grade web development — real database, typed ORM, server-rendered UI, no scaffolding shortcuts.

## Overview

JobFlow tracks job applications (company, position, status, salary) through a Next.js frontend backed by a real PostgreSQL database via Prisma. It started as a learning project with no prior programming background and is being built incrementally: every concept (JavaScript, TypeScript, React, Next.js, relational databases) is learned, applied, and connected to what came before rather than copy-pasted. It is also the tool I use for my own job search while I build it.

**Status: actively in progress**, alongside a full-stack internship. The sections below reflect exactly what works today, not the end goal.

## What works today

- Applications are stored in a real PostgreSQL database, modeled and migrated with Prisma (`Application`: company, position, status, salary).
- The home page queries the database directly through Prisma and renders the live list — no hardcoded data.
- Reusable UI components: `ApplicationCard`, `StatusBadge`, `Button`.
- An add-application form exists in the UI but is not yet wired to the database (see Roadmap).

## Tech Stack

Next.js (App Router) · TypeScript · React · Tailwind CSS · PostgreSQL · Prisma ORM

## Architecture

Standard Next.js App Router structure: pages and layouts under `app/`, reusable components under `app/components/`, database schema and migrations under `prisma/`. Prisma generates a typed client from `schema.prisma`, so every database query is type-checked against the real schema at compile time.

## Engineering challenges

Setting up the database layer surfaced real debugging work rather than following a tutorial end to end: a version conflict between Prisma 8 and Prisma 6 that broke the generated client, a leftover config file silently preventing environment variables from being read, and connection errors that took direct `psql` inspection to diagnose. Each was resolved by reading the actual error rather than working around it — the kind of debugging that only shows up once you're running your own local database instead of a managed cloud one, which is why I set up PostgreSQL locally instead of a hosted option like Neon.

## Roadmap

- Wire the add-application form to the database through a Server Action
- Edit and delete applications
- Filter and sort by status
- User authentication
- Deploy to Vercel

## Getting Started

1. Clone the repo and run `npm install`.
2. Create a PostgreSQL database and set `DATABASE_URL` (see below).
3. Run `npx prisma migrate dev` to apply the schema.
4. Run `npm run dev` and open `http://localhost:3000`.

## Environment Variables

`DATABASE_URL` — PostgreSQL connection string (see `.env.example` if present, or set directly in `.env`).
