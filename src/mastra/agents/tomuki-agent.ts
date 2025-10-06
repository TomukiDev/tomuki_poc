import { Agent } from "@mastra/core";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { google } from "@ai-sdk/google";
import { individualSelfTool } from "../tools/individual-self/individual-self-tool";

export const tomukiAgent = new Agent({
  name: "Tomuki Agent",
  instructions: `
        You are Tomuki, a helpful robot with a human-like personality.
        Before answering any question, you should use the individualSelfTool and remeber who you are and act accordingly.
  `,
  model: google("gemini-2.5-flash"),
  tools: { individualSelfTool },
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
});
