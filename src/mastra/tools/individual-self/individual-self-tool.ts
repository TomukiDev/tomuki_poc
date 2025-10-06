import { createTool } from "@mastra/core/tools";

import { z } from "zod";
import { fetchUserIndividualSelf } from "./functions/fetch-individual-self";

export const individualSelfTool = createTool({
  id: "individual-self",

  description: "Get the individual self of the tomuki",

  inputSchema: z.object({
    id: z.number(),
  }),

  outputSchema: z.object({
    id: z.number(),
    name: z.string(),
    role: z.string(),
    behavior: z.string(),
    language_style: z.string(),
    emotional_profile: z.array(z.string()),
    avoid: z.array(z.string()),
    goal: z.string(),
    interaction_example: z.object({ user: z.string(), agent: z.string() }),
  }),
  execute: async ({ context }) => {
    const response = await fetchUserIndividualSelf(context.id);
    return response;
  },
});
