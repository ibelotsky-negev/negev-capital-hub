import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { portfolio } from "../data";

export default defineTool({
  name: "list_portfolio_companies",
  title: "List portfolio companies",
  description:
    "List Negev Capital portfolio companies. Optionally filter by status: active, exit (realized exit), merged, or liquidity.",
  inputSchema: {
    status: z
      .enum(["active", "exit", "merged", "liquidity"])
      .optional()
      .describe("Filter by portfolio status. Omit to return all."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ status }) => {
    const items = status ? portfolio.filter((c) => c.status === status) : portfolio;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, companies: items },
    };
  },
});
