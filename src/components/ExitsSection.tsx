import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const featureExits = [
  {
    company: "Gilgamesh Pharmaceuticals",
    logo: "/logos/gilgamesh.png",
    dealValue: "Up to $1.2B",
    subline: "Acquired by AbbVie · 2025",
    acquirerLabel: "AbbVie",
    body: "AbbVie acquired bretisilocin (GM-2505), Gilgamesh's lead compound — a next-generation psychedelic-derived candidate for major depressive disorder.",
    dealLabel: "Read the AbbVie announcement",
    dealUrl:
      "https://news.abbvie.com/2025-08-25-AbbVie-to-Acquire-Gilgamesh-Pharmaceuticals-Bretisilocin,-a-Novel,-Investigational-Therapy-for-Major-Depressive-Disorder,-Expanding-Psychiatry-Pipeline",
  },
  {
    company: "Mindset Pharma",
    logo: "/logos/mindset.png",
    dealValue: "~CAD $80M",
    subline: "Acquired by Otsuka Pharmaceutical · 2023",
    acquirerLabel: "Otsuka",
    body: "Otsuka acquired Mindset to strengthen its neuropsychiatric pipeline with next-generation psychedelic-based therapeutics.",
    dealLabel: "Read the Otsuka announcement",
    dealUrl:
      "https://otsuka-us.com/news/otsuka-pharmaceutical-acquire-mindset-pharma-strengthens-pipeline-area-psychiatric-and",
  },
];

const ExitsSection = () => {
  return (
    <section id="exits" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Outcomes
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Realized Exits</h2>
        <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
          Demonstrated outcomes for our investors — strategic acquisitions by global pharmaceutical leaders.
        </p>

        {/* Two feature exits */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featureExits.map((exit) => (
            <Card
              key={exit.company}
              className="border-exit-border bg-exit-highlight/40 hover:shadow-md transition-shadow flex flex-col"
            >
              <CardContent className="flex flex-col flex-1 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-md bg-background border border-border flex items-center justify-center overflow-hidden p-1.5 shrink-0">
                      <img
                        src={exit.logo}
                        alt={`${exit.company} logo`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-foreground">
                      {exit.company}
                    </h3>
                  </div>
                  <Badge variant="exit" className="shrink-0">Realized Exit</Badge>
                </div>

                <div className="mt-6 pb-6 border-b border-exit-border/60">
                  <p className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    {exit.dealValue}
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {exit.subline}
                  </p>
                </div>

                <p className="mt-6 text-muted-foreground text-[15px] leading-relaxed flex-1">
                  {exit.body}
                </p>

                <a
                  href={exit.dealUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {exit.dealLabel}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bright Minds — Public Market Listing */}
        <div className="mt-6">
          <Card className="border-border bg-card">
            <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-md bg-background border border-border flex items-center justify-center overflow-hidden p-1.5 shrink-0">
                  <img
                    src="/logos/brightminds.png"
                    alt="Bright Minds Biosciences logo"
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-foreground">Bright Minds Biosciences</h3>
                    <Badge variant="secondary" className="font-mono text-xs">Nasdaq: DRUG</Badge>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground mt-1">
                    Public Market Listing
                  </p>
                </div>
              </div>
              <div className="md:max-w-md md:text-right">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Publicly listed on Nasdaq advancing next-generation serotonin receptor agonists.
                </p>
                <a
                  href="https://www.brightmindsbio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Visit company
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExitsSection;
