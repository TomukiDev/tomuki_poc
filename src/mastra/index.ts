import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { tomukiAgent } from "./agents/tomuki-agent";
import { pgVector, postgresStore } from "./storage";

export const mastra = new Mastra({
  workflows: {},
  agents: { tomukiAgent },
  storage: postgresStore,
  vectors: { pgVector },
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
