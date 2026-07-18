import { defineTool } from "@lovable.dev/mcp-js";
import { team } from "../data";

export default defineTool({
  name: "list_team",
  title: "List team members",
  description:
    "List the Negev Capital team: partners and Scientific Advisory Board chair with titles, headline bio, credentials, location, and LinkedIn URLs.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(team, null, 2) }],
    structuredContent: { count: team.length, members: team },
  }),
});
