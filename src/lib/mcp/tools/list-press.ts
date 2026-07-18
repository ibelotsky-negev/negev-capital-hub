import { defineTool } from "@lovable.dev/mcp-js";
import { press } from "../data";

export default defineTool({
  name: "list_press",
  title: "List press coverage",
  description: "List press coverage of Negev Capital portfolio, exits, and Palomar Labs — outlet, date, headline, and URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(press, null, 2) }],
    structuredContent: { count: press.length, items: press },
  }),
});
