# The Residency: Chalice Chat

uncommonapp.app it's the best.

## Overview

This is a first round interview agent for The Residency. It's organized as a monorepo with the following packages:

- `apps/web`: Next.js application
- `apps/api`: Convex API
- `packages/ui`: Shadcn UI based components
- `packages/email`: Email templates with Resend

## Requirements

- pnpm
- [convex cli](https://docs.convex.dev/cli)

## Quick Start

1. Clone repository and install dependencies
2. Configure environment variables (Convex, Clerk, ElevenLabs)
3. Run `pnpm dev` to start everything
4. Access local web instance at `localhost:3000`

## Tech Stack

### Big Pieces

- Eleven Labs (conversational ai)
- Next.js (frontend)
- Convex (backend/database)
- Shadcn (ui)
- Resend (email)
- Clerk (auth)
- Upstash (redis)

### Smaller Pieces

- OpenAI (llm)
- UploadThing (static file hosting)

## Accounts

The following accounts are setup via support@livetheresidency.com:

- Vercel
- OpenAI
- Resend
- Clerk
- Upstash
- Eleven Labs
- Convex
- GCP

Only the github account/repo, uploadthing static uploads, remain under Jesse's personal email.

# Deployment

Steps:

1. `git push` to main branch on github to deploy to vercel
2. `cd apps/api && pnpm ddeploy-convex` to deploy to convex
