import { z } from "zod";
import { zodToConvex, zid } from "convex-helpers/server/zod";
import { defineTable } from "convex/server";

export const channelSchema = z.object({
  name: z.string(),
  color: z.string(),
  discordId: z.string(),
});

export const Channels = defineTable(zodToConvex(channelSchema));

export const statusTypeSchema = z.union([
  z.literal("todo"),
  z.literal("doing"),
  z.literal("done"),
  z.literal("backlog"),
  z.literal("cancelled"),
  z.literal("priority"),
]);
export const STATUS_TYPE_OPTIONS = zodToConvex(statusTypeSchema);

export const taskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: statusTypeSchema,
  assignedId: zid("users"),
  channelId: zid("channels"),
});

export const Tasks = defineTable(zodToConvex(taskSchema));
