import { Table } from "convex-helpers/server";
import { zodToConvex } from "convex-helpers/server/zod";
import { defineTable } from "convex/server";
import { v } from "convex/values";
import { z } from "zod";

export const userSchema = z.object({
  clerkId: z.string(),
  discordId: z.string(),
});

export const Users = defineTable(zodToConvex(userSchema));
