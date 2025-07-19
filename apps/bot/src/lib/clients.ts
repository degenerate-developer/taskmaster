import { Client as DiscordClient, GatewayIntentBits } from "discord.js";
import { env } from "./env";

export const discordClient = new DiscordClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
  ],
});
discordClient.login(env.DISCORD_TOKEN);
