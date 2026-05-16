import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const exits = [
  {
    company: "Gilgamesh Pharmaceuticals",
    logo: "/logos/gilgamesh.png",
    description:
      "Asset sale of lead compound bretisilocin (GM-2505) to strategic buyer AbbVie (2025).",
    dealLabel: "AbbVie acquisition announcement",
    dealUrl:
      "https://news.abbvie.com/2025-08-25-AbbVie-to-Acquire-Gilgamesh-Pharmaceuticals-Bretisilocin,-a-Novel,-Investigational-Therapy-for-Major-Depressive-Disorder,-Expanding-Psychiatry-Pipeline",
  },
  {
    company: "Mindset Pharma",
    logo: "/logos/mindset.png",
    description:
      "Exit to strategic buyer Otsuka Pharmaceutical, strengthening Otsuka's neuropsychiatric pipeline (2023).",
    dealLabel: "Otsuka acquisition announcement",
    dealUrl:
      "https://otsuka-us.com/news/otsuka-pharmaceutical-acquire-mindset-pharma-strengthens-pipeline-area-psychiatric-and",
  },
  {
    company: "Bright Minds Biosciences",
    logo: "/logos/brightminds.png",
    description:
      "Public-market exit — listed on Nasdaq (DRUG) advancing next-generation serotonin receptor agonists.",
    dealLabel: "Visit company",
    dealUrl: "https://www.brightmindsbio.com/",
  },
];

const ExitsSection = () => {
  return (
    <section id="exits" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Realized Exits</h2>
        <p className="mt-3 text-muted-foreground text-lg">
          Demonstrated outcomes for our investors.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {exits.map((exit) => (
            <Card
              key={exit.company}
              className="border-exit-border bg-exit-highlight/50 hover:shadow-md transition-shadow flex flex-col"
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="h-14 w-14 rounded-md bg-background border border-border flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                  <img src={exit.logo} alt={`${exit.company} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg leading-tight">{exit.company}</CardTitle>
                  <Badge variant="exit">Realized Exit</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground text-sm flex-1">{exit.description}</p>
                <a
                  href={exit.dealUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
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
