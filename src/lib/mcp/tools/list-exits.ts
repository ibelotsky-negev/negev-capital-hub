import { defineTool } from "@lovable.dev/mcp-js";
import { realizedExits } from "../data";

export default defineTool({
  name: "list_realized_exits",
  title: "List realized exits",
  description:
    "List Negev Capital's realized exits with counterparty, year, deal value, summary, and news URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(realizedExits, null, 2) }],
    structuredContent: { count: realizedExits.length, exits: realizedExits },
  }),
});
