import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { tomukiAgent } from "./agents/tomuki-agent";
import { postgresStore } from "./storage";

export const mastra = new Mastra({
  workflows: {},
  agents: { tomukiAgent },
  storage: postgresStore,
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
