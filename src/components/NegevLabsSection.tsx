import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetaItem {
  label: string;
  value: string;
}

interface Lab {
  name: string;
  description: string;
  badge: string;
  accent?: boolean;
  website?: string;
  logo?: string;
  meta?: MetaItem[];
}

const labs: Lab[] = [
  {
    name: "Ariadne Bio",
    description:
      "Addressing what aging takes first. Ariadne Bio is developing AB-300, a first-in-class non-hallucinogenic 5-HT2A agonist designed to treat apathy in Parkinson's disease, late-life depression, and neurodegeneration — an unmet need affecting ~8 million U.S. patients with zero approved therapies. Phase 1b trial initiation targeted for Q3 2026.",
    badge: "Active",
    website: "https://www.ariadnebio.com",
    logo: "/logos/ariadne.png",
    meta: [
      { label: "Stage", value: "Preclinical → Phase 1b Q3 2026" },
      { label: "Modality", value: "Non-hallucinogenic 5-HT2A agonist" },
      { label: "Indication", value: "Apathy in Parkinson's / late-life depression" },
    ],
  },
];

const NegevLabsSection = () => {
  return (
    <section id="labs" className="py-20 md:py-28 bg-muted border-t border-border">
      <div className="container mx-auto px-6">
        <p className="eyebrow">Negev Labs</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-foreground max-w-3xl">
          Our CNS venture studio.
        </h2>
        <p className="mt-6 text-muted-foreground text-[15px] md:text-base leading-relaxed max-w-3xl">
          Negev Labs sources overlooked CNS drug candidates backed by existing human data, builds
          them into capital-efficient companies, and targets pharma licensing on accelerated
          timelines. The studio model is designed to deliver founder-level returns to our investors.
        </p>
        <p className="mt-4 text-[15px] md:text-base max-w-3xl">
          <a
            href="https://negevlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors"
          >
            Visit Negev Labs &rarr;
          </a>
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 max-w-xl">
          {labs.map((lab) => (
            <Card
              key={lab.name}
              className="flex flex-col border-border transition-all duration-200 hover:shadow-md hover:border-foreground/30"
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="h-16 w-16 rounded border border-border bg-background flex items-center justify-center shrink-0 overflow-hidden p-2">
                  {lab.logo ? (
                    <img
                      src={lab.logo}
                      alt={`${lab.name} logo`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-foreground">
                      {lab.name
                        .split(" ")
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div className="space-y-2 min-w-0">
                  <CardTitle className="text-lg">{lab.name}</CardTitle>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                      lab.accent
                        ? "border-accent-gold text-accent-gold"
                        : "border-border text-foreground/70",
                    )}
                  >
                    {lab.badge}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-sm text-muted-foreground flex-1">{lab.description}</p>
                {lab.website && (
                  <a
                    href={lab.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent-gold transition-colors"
                  >
                    Visit website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {lab.meta && (
                  <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
                    {lab.meta.map((it, idx) => (
                      <span key={it.label} className="inline-flex items-center gap-2">
                        <span>
                          <span className="uppercase tracking-wider text-[10px] text-muted-foreground/80">
                            {it.label}
                          </span>{" "}
                          <span className="text-foreground/80">{it.value}</span>
                        </span>
                        {idx < lab.meta!.length - 1 && <span aria-hidden="true">·</span>}
                      </span>
                    ))}
                  </div>
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
