import "dotenv/config";
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    DISCORD_TOKEN: z.string(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with PUBLIC_.
   */
  clientPrefix: "PUBLIC_",
  client: {},
  /*
   * Specify what values should be validated by your schemas above.
   */
  runtimeEnv: process.env,
});
