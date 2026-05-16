import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Lab {
  name: string;
  description: string;
  badge: string;
  badgeVariant: "active" | "labs";
  website?: string;
  logo?: string;
}

const labs: Lab[] = [
  {
    name: "Ariadne Bio",
    description:
      "Addressing what aging takes first. Ariadne Bio is developing AB-300, a first-in-class non-hallucinogenic 5-HT2A agonist designed to treat apathy in Parkinson's disease, late-life depression, and neurodegeneration — an unmet need affecting ~8 million U.S. patients with zero approved therapies. Phase 1b trial initiation targeted for Q3 2026.",
    badge: "Active",
    badgeVariant: "active",
    website: "https://www.ariadnebio.com",
    logo: "/logos/ariadne.png",
  },
  {
    name: "Pipeline Asset",
    description:
      "Future CNS venture studio company currently in development. Details to be announced.",
    badge: "Stealth Mode",
    badgeVariant: "labs",
  },
];

const NegevLabsSection = () => {
  return (
    <section id="labs" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Negev Labs — Our CNS Venture Studio</h2>
        <p className="mt-3 text-muted-foreground text-lg">
          Building brain health companies from first principles.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab) => (
            <Card key={lab.name} className="hover:shadow-md transition-shadow flex flex-col">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="h-20 w-20 rounded bg-background border border-border flex items-center justify-center shrink-0 overflow-hidden">
                  {lab.logo ? (
                    <img
                      src={lab.logo}
                      alt={`${lab.name} logo`}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-[10px] text-muted-foreground">
                      {lab.name
                        .split(" ")
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div className="space-y-1.5 min-w-0">
                  <CardTitle className="text-lg">{lab.name}</CardTitle>
                  <Badge variant={lab.badgeVariant}>{lab.badge}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-sm text-muted-foreground flex-1">{lab.description}</p>
                {lab.website && (
                  <a
                    href={lab.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Visit website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NegevLabsSection;
