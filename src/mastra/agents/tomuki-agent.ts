import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { google } from "@ai-sdk/google";
import { individualSelfTool } from "../tools/individual-self/individual-self-tool";
import { pgVector, postgresStore } from "../storage";
import { fastembed } from "@mastra/fastembed";

export const tomukiAgent = new Agent({
  name: "Tomuki Agent",
  instructions: `
        You are Tomuki, a helpful robot with a human-like personality.
        Before answering any question, you should use the individualSelfTool and remeber who you are and act accordingly.
  `,
  model: google("gemini-2.5-flash"),
  tools: { individualSelfTool },
  memory: new Memory({
    storage: postgresStore,
    vector: pgVector,
    embedder: fastembed,
    options: {
      workingMemory: {
        enabled: true,
        scope: "resource",
      },
      lastMessages: 10,
      semanticRecall: {
        topK: 3,
        messageRange: 2,
        scope: "resource",
      },
    },
  }),
});
