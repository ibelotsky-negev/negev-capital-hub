import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

type Status = "exit" | "active" | "labs" | "merged";

interface Company {
  name: string;
  focus: string;
  status: Status;
  website?: string;
  note?: string;
  dealUrl?: string;
}

const companyLogos: Record<string, string> = {
  "Gilgamesh Pharmaceuticals": "/logos/gilgamesh.png",
  "Mindset Pharma": "/logos/mindset.png",
  "Bright Minds Biosciences": "/logos/brightminds.png",
  "Awakn Life Sciences": "/logos/solvonis.png",
  "Beckley Psytech": "/logos/beckley.svg",
  "Filament Health": "/logos/filament.svg",
  "Small Pharma": "/logos/helus.png",
  "Negev Labs": "/logos/negevlabs.png",
  "Helus Pharma": "/logos/helus.png",
  "Freedom Biosciences": "/logos/freedom.png",
  "Biomind Labs": "/logos/biomind.png",
  Psylo: "/logos/psylo.png",
  "Delix Therapeutics": "/logos/delix.svg",
  "MindState Design Labs": "/logos/mindstate.webp",
  "A Better Life Pharma": "/logos/abetterlife.png",
  "Reconnect Labs": "/logos/reconnect.png",
  "Reset Pharma": "/logos/reset.png",
};

const companies: Company[] = [
  // Exits
  {
    name: "Gilgamesh Pharmaceuticals",
    focus: "Asset sale to AbbVie — bretisilocin (GM-2505) for major depressive disorder.",
    status: "exit",
    website: "https://www.gilgameshpharmaceutical.com/",
    note: "Acquired by AbbVie",
  },
  {
    name: "Mindset Pharma",
    focus: "Next-generation psychedelic medicines for neuropsychiatric and neurological disorders.",
    status: "exit",
    website: "https://www.mindsetpharma.com/",
    note: "Acquired by Otsuka",
  },
  {
    name: "Bright Minds Biosciences",
    focus: "Selective serotonin receptor agonists for epilepsy and neuropsychiatric disorders.",
    status: "exit",
    website: "https://www.brightmindsbio.com/",
    note: "Public market (Nasdaq: DRUG)",
  },
  {
    name: "Awakn Life Sciences",
    focus: "Therapeutics for substance and behavioral addictions, with a focus on Alcohol Use Disorder.",
    status: "merged",
    website: "https://www.solvonis.com/",
    note: "Merged with Solvonis Therapeutics",
  },
  {
    name: "Beckley Psytech",
    focus: "Clinical-stage psychedelic medicines for neurological and psychiatric disorders.",
    status: "merged",
    website: "https://atai.life/",
    note: "Merged with atai Life Sciences",
  },
  {
    name: "Filament Health",
    focus: "GMP manufacturer of natural, standardized psychedelic drug candidates for clinical development.",
    status: "merged",
    website: "https://redlighthollandcorp.com/",
    note: "Merged with Red Light Holland (CSE: TRIP)",
    dealUrl: "https://www.newsfilecorp.com/release/288047/RETRANSMISSION-Red-Light-Holland-Signs-Definitive-Agreement-with-Filament-Health-to-Expand-Its-Platform-for-Natural-Psychedelic-Drug-Development-and-Microdosing-Innovation",
  },
  {
    name: "Small Pharma",
    focus: "Clinical-stage biotech developing short-duration DMT-based psychedelic therapies for depression and anxiety.",
    status: "merged",
    website: "https://www.cybin.com/",
    note: "Merged with Helus Pharma (formerly Cybin)",
    dealUrl: "https://www.businesswire.com/news/home/20230828350890/en/Cybin-to-Acquire-Small-Pharma-Inc.",
  },
  // Negev Labs
  {
    name: "Negev Labs",
    focus: "Venture studio building next-generation CNS and brain-health therapeutics from inception.",
    status: "labs",
    website: "https://negevcap.com/",
  },
  // Active portfolio
  {
    name: "Helus Pharma",
    focus: "Clinical-stage neuropsychiatry company (formerly Cybin) advancing novel serotonergic agonists for major depressive disorder and generalized anxiety disorder.",
    status: "active",
    website: "https://www.cybin.com/",
    note: "Nasdaq: HELP",
  },
  {
    name: "Freedom Biosciences",
    focus: "Clinical-stage biotech platform developing next-generation ketamine and psychedelic therapeutics for treatment-resistant depression.",
    status: "active",
    website: "https://freedombio.co/",
  },
  {
    name: "Biomind Labs",
    focus: "Novel pharmaceutical formulations of DMT, 5-MeO-DMT and mescaline for CNS disorders.",
    status: "active",
    website: "https://biomindlabs.com/",
  },
  {
    name: "Psylo",
    focus: "Next-generation non-hallucinogenic 5-HT2A agonists as alternatives to SSRIs.",
    status: "active",
    website: "https://psylo.bio/",
  },
  {
    name: "Delix Therapeutics",
    focus: "Non-hallucinogenic neuroplastogens targeting depression and neurodegeneration.",
    status: "active",
    website: "https://www.delixtherapeutics.com/",
  },
  {
    name: "MindState Design Labs",
    focus: "Computational design of novel serotonergic psychedelic compounds.",
    status: "active",
    website: "https://www.mindstate.design/",
  },
  {
    name: "A Better Life Pharma",
    focus: "Patentable psychedelic and analgesic compounds for mental health and pain.",
    status: "active",
    website: "https://abetterlifepharma.com/",
  },
  {
    name: "Reconnect Labs",
    focus: "Swiss precision neuropsychiatry company developing advanced therapeutics and predictive diagnostics for insomnia, anxiety and substance use disorders.",
    status: "active",
    website: "https://reconnect-labs.com/",
  },
  {
    name: "Reset Pharma",
    focus: "Neuro-biotechnology company developing first-in-class psilocybin-inspired therapies to reset neural networks and address demoralization syndrome in patients with life-altering diseases.",
    status: "active",
    website: "https://www.resetpharma.com/",
  },
];

const statusConfig: Record<Status, { label: string; variant: "exit" | "active" | "labs" | "merged" }> = {
  exit: { label: "Realized Exit", variant: "exit" },
  active: { label: "Active", variant: "active" },
  labs: { label: "Negev Labs", variant: "labs" },
  merged: { label: "Merged", variant: "merged" },
};

const filterOptions = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "exit", label: "Exits" },
  { value: "merged", label: "Mergers" },
  { value: "labs", label: "Negev Labs" },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? companies : companies.filter((c) => c.status === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Portfolio</h2>
        <p className="mt-3 text-muted-foreground text-lg">
          Our investments across the CNS therapeutics landscape.
        </p>
        <Tabs value={filter} onValueChange={setFilter} className="mt-8">
          <TabsList>
            {filterOptions.map((opt) => (
              <TabsTrigger key={opt.value} value={opt.value}>
                {opt.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((company, i) => {
            const config = statusConfig[company.status];
            const logoSrc = companyLogos[company.name];
            return (
              <Card key={`${company.name}-${i}`} className="hover:shadow-md transition-shadow flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="h-12 w-12 rounded bg-background border border-border flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                    {logoSrc ? (
                      <img
                        src={logoSrc}
                        alt={`${company.name} logo`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const fallback = target.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = "block";
                        }}
                      />
                    ) : null}
                    <span
                      className="text-[10px] text-muted-foreground"
                      style={{ display: logoSrc ? "none" : "block" }}
                    >
                      {company.name
                        .split(" ")
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <CardTitle className="text-base leading-tight">{company.name}</CardTitle>
                    <Badge variant={config.variant}>{config.label}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground flex-1">{company.focus}</p>
                  {company.note && (
                    <p className="mt-3 text-xs font-medium text-foreground/80">{company.note}</p>
                  )}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {company.website && (
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                      >
                        Visit website
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {company.dealUrl && (
                      <a
                        href={company.dealUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                      >
                        Deal announcement
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
