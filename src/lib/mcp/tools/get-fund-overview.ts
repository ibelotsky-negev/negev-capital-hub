import { defineTool } from "@lovable.dev/mcp-js";
import { fundOverview } from "../data";

export default defineTool({
  name: "get_fund_overview",
  title: "Get fund overview",
  description:
    "Return Negev Capital fund facts: size, vintage, domicile, strategy, status, portfolio count, realized exits, and the Negev Labs venture studio summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(fundOverview, null, 2) }],
    structuredContent: fundOverview,
  }),
});
