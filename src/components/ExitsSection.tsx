import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface FeatureExit {
  company: string;
  logo: string;
  dealValue: string;
  dealValueNote?: string;
  subline: string;
  body: string;
  dealLabel: string;
  dealUrl: string;
}

const featureExits: FeatureExit[] = [
  {
    company: "Gilgamesh Pharmaceuticals",
    logo: "/logos/gilgamesh.png",
    dealValue: "Up to $1.2B",
    dealValueNote: "(upfront + milestones)",
    subline: "Acquired by AbbVie · 2025",
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
    body: "Otsuka acquired Mindset to strengthen its neuropsychiatric pipeline with next-generation psychedelic-based therapeutics.",
    dealLabel: "Read the Otsuka announcement",
    dealUrl:
      "https://otsuka-us.com/news/otsuka-pharmaceutical-acquire-mindset-pharma-strengthens-pipeline-area-psychiatric-and",
  },
  {
    company: "Bright Minds Biosciences",
    logo: "/logos/brightminds.png",
    dealValue: "Public-Market Exit",
    subline: "Nasdaq: DRUG · 2024",
    body: "Negev Capital realized its position in Bright Minds Biosciences through public-market sales during the 2024 share-price appreciation. Bright Minds is advancing selective serotonin receptor agonists for epilepsy and neuropsychiatric disorders.",
    dealLabel: "Visit Bright Minds Biosciences",
    dealUrl: "https://www.brightmindsbio.com/",
  },
];

const ExitsSection = () => {
  return (
    <section id="exits" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <p className="eyebrow">Outcomes</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-foreground">Realized Exits</h2>
        <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
          Demonstrated outcomes for our investors — strategic acquisitions by global pharmaceutical leaders and public-market realizations.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureExits.map((exit) => (
            <Card
              key={exit.company}
              className="border-exit-border bg-exit-highlight/40 hover:shadow-md transition-shadow flex flex-col"
            >
              <CardContent className="flex flex-col flex-1 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-12 w-12 rounded-md bg-background border border-border flex items-center justify-center overflow-hidden p-1.5 shrink-0">
                      <img
                        src={exit.logo}
                        alt={`${exit.company} logo`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight text-foreground">
                      {exit.company}
                    </h3>
                  </div>
                  <Badge variant="exit" className="shrink-0">Realized Exit</Badge>
                </div>

                <div className="mt-6 pb-6 border-b border-exit-border/60">
                  <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    {exit.dealValue}
                  </p>
                  {exit.dealValueNote && (
                    <p className="mt-1 text-xs text-muted-foreground">{exit.dealValueNote}</p>
                  )}
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
      </div>
    </section>
  );
};

export default ExitsSection;
