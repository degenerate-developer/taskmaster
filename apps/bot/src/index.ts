import { discordClient } from "./lib/clients";
import type { Message } from "discord.js";
// // import { MessageHelper } from "./message";
// // import { selectLoggers } from "./schema/loggers";
// // import { validTodoChannel, getTodo } from "./schema/todos";
// // import { getUser } from "./schema/users";
// // import { __prod__ } from "./lib/constants";

discordClient.once("ready", () => {
  if (discordClient.user) console.log(`Logged in as ${discordClient.user.tag}`);
  else console.error("Failed to login");
});

// // casting message type to Message<boolean> cuz idk tf default message type does
discordClient.on("messageCreate", async (message: Message<boolean>) => {
  console.log(message.content);
});
