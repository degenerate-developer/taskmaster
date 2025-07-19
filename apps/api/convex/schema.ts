import { defineSchema } from "convex/server";
import {
  Channels,
  channelSchema,
  Tasks,
  taskSchema,
  STATUS_TYPE_OPTIONS,
} from "./model/tasks";
import { Users, userSchema } from "./model/users";

export default defineSchema({
  channels: Channels,
  tasks: Tasks,
  users: Users,
});

export const zodSchemas = {
  taskSchema,
  channelSchema,
  userSchema,
};

export const convexSchemas = {
  STATUS_TYPE_OPTIONS,
};
