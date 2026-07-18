import { defineMcp } from "@lovable.dev/mcp-js";
import getFundOverview from "./tools/get-fund-overview";
import listPortfolio from "./tools/list-portfolio";
import listExits from "./tools/list-exits";
import listTeam from "./tools/list-team";
import listPress from "./tools/list-press";

export default defineMcp({
  name: "negev-capital-mcp",
  title: "Negev Capital",
  version: "0.1.0",
  instructions:
    "Public read-only tools for Negev Capital — a $30M+ biotech venture fund focused on CNS and brain health. Use these to answer questions about the fund, its portfolio companies, realized exits (AbbVie/Gilgamesh, Otsuka/Mindset, Nasdaq/Bright Minds), team, press coverage, and the Negev Labs venture studio.",
  tools: [getFundOverview, listPortfolio, listExits, listTeam, listPress],
});
