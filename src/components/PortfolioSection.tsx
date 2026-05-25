import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "exit" | "active" | "merged" | "liquidity";

interface Company {
  name: string;
  focus: string;
  status: Status;
  website?: string;
  note?: string;
  dealUrl?: string;
  stage?: string;
  modality?: string;
  indication?: string;
  year?: string;
}

const companyLogos: Record<string, string> = {
  "Gilgamesh Pharmaceuticals": "/logos/gilgamesh.png",
  "Mindset Pharma": "/logos/mindset.png",
  "Bright Minds Biosciences": "/logos/brightminds.png",
  
  "Beckley Psytech": "/logos/beckley.svg",
  "Filament Health": "/logos/filament.svg",
  "Helus Pharma": "/logos/helus.png",
  "Freedom Biosciences": "/logos/freedom.png",
  Psylo: "/logos/psylo.png",
  "Delix Therapeutics": "/logos/delix.svg",
  "MindState Design Labs": "/logos/mindstate.png",
  "A Better Life Pharma": "/logos/ablp.png",
  "Reconnect Labs": "/logos/reconnect.png",
  "Reset Pharma": "/logos/reset.png",
  "Biomind Labs": "/logos/biomind.png",
};

const companies: Company[] = [
  {
    name: "Gilgamesh Pharmaceuticals",
    focus: "Asset sale to AbbVie — bretisilocin (GM-2505) for major depressive disorder.",
    status: "exit",
    website: "https://www.gilgameshpharmaceutical.com/",
    note: "Acquired by AbbVie",
    stage: "Phase 2",
    modality: "Small molecule",
    indication: "Major Depressive Disorder",
    year: "2022",
  },
  {
    name: "Mindset Pharma",
    focus: "Next-generation psychedelic medicines for neuropsychiatric and neurological disorders.",
    status: "exit",
    website: "https://www.mindsetpharma.com/",
    note: "Acquired by Otsuka",
    stage: "Preclinical",
    modality: "Small molecule",
    indication: "Neuropsychiatric",
    year: "2021",
  },
  {
    name: "Bright Minds Biosciences",
    focus: "Selective serotonin receptor agonists for epilepsy and neuropsychiatric disorders.",
    status: "exit",
    website: "https://www.brightmindsbio.com/",
    note: "Public-market exit · Nasdaq: DRUG · 2024",
    stage: "Phase 2",
    modality: "Small molecule",
    indication: "Epilepsy / Neuropsychiatry",
    year: "2021",
  },
  {
    name: "Awakn Life Sciences",
    focus: "Therapeutics for substance and behavioral addictions, with a focus on Alcohol Use Disorder.",
    status: "merged",
    website: "https://www.solvonis.com/",
    note: "Merged with Solvonis Therapeutics",
    stage: "Phase 2",
    modality: "Small molecule",
    indication: "Alcohol Use Disorder",
    year: "2021",
  },
  {
    name: "Beckley Psytech",
    focus: "Clinical-stage psychedelic medicines for neurological and psychiatric disorders.",
    status: "merged",
    website: "https://atai.life/",
    note: "Merged with atai Life Sciences",
    stage: "Phase 2",
    modality: "Psychedelic",
    indication: "Treatment-resistant depression",
    year: "2021",
  },
  {
    name: "Filament Health",
    focus: "GMP manufacturer of natural, standardized psychedelic drug candidates for clinical development.",
    status: "merged",
    website: "https://redlighthollandcorp.com/",
    note: "Merged with Red Light Holland (CSE: TRIP)",
    dealUrl:
      "https://www.newsfilecorp.com/release/288047/RETRANSMISSION-Red-Light-Holland-Signs-Definitive-Agreement-with-Filament-Health-to-Expand-Its-Platform-for-Natural-Psychedelic-Drug-Development-and-Microdosing-Innovation",
    stage: "Preclinical",
    modality: "Botanical psychedelics",
    indication: "Substance Use Disorders",
    year: "2021",
  },
  {
    name: "Small Pharma",
    focus: "Clinical-stage biotech developing short-duration DMT-based psychedelic therapies for depression and anxiety.",
    status: "merged",
    website: "https://www.cybin.com/",
    note: "Merged with Helus Pharma (formerly Cybin)",
    dealUrl: "https://www.businesswire.com/news/home/20230828350890/en/Cybin-to-Acquire-Small-Pharma-Inc.",
    stage: "Phase 2",
    modality: "DMT",
    indication: "Depression / Anxiety",
    year: "2021",
  },
  {
    name: "Helus Pharma",
    focus:
      "Clinical-stage neuropsychiatry company (formerly Cybin) advancing novel serotonergic agonists for major depressive disorder and generalized anxiety disorder.",
    status: "active",
    website: "https://www.cybin.com/",
    note: "Nasdaq: HELP",
    stage: "Phase 2",
    modality: "Serotonergic agonist",
    indication: "MDD / GAD",
    year: "2021",
  },
  {
    name: "Freedom Biosciences",
    focus:
      "Clinical-stage biotech platform developing next-generation ketamine and psychedelic therapeutics for treatment-resistant depression.",
    status: "active",
    website: "https://freedombio.co/",
    stage: "Phase 1",
    modality: "Ketamine / psychedelic",
    indication: "Treatment-resistant depression",
    year: "2021",
  },
  {
    name: "Biomind Labs",
    focus: "Novel pharmaceutical formulations of DMT, 5-MeO-DMT and mescaline for CNS disorders.",
    status: "active",
    website: "https://biomindlabs.com/",
    stage: "Preclinical",
    modality: "DMT / 5-MeO-DMT",
    indication: "CNS disorders",
    year: "2021",
  },
  {
    name: "Psylo",
    focus: "Next-generation non-hallucinogenic 5-HT2A agonists as alternatives to SSRIs.",
    status: "active",
    website: "https://psylo.bio/",
    stage: "Preclinical",
    modality: "Non-hallucinogenic 5-HT2A",
    indication: "Depression",
    year: "2022",
  },
  {
    name: "Delix Therapeutics",
    focus: "Non-hallucinogenic neuroplastogens targeting depression and neurodegeneration.",
    status: "active",
    website: "https://www.delixtherapeutics.com/",
    stage: "Phase 1",
    modality: "Neuroplastogen",
    indication: "Depression / Neurodegeneration",
    year: "2021",
  },
  {
    name: "MindState Design Labs",
    focus: "Computational design of novel serotonergic psychedelic compounds.",
    status: "active",
    website: "https://www.mindstate.design/",
    stage: "Preclinical",
    modality: "Serotonergic psychedelic",
    indication: "Neuropsychiatric",
    year: "2022",
  },
  {
    name: "A Better Life Pharma",
    focus: "Patentable psychedelic and analgesic compounds for mental health and pain.",
    status: "active",
    website: "https://abetterlifepharma.com/",
    stage: "Preclinical",
    modality: "Psychedelic / analgesic",
    indication: "Mental health / Pain",
    year: "2021",
  },
  {
    name: "Reconnect Labs",
    focus:
      "Swiss precision neuropsychiatry company developing advanced therapeutics and predictive diagnostics for insomnia, anxiety and substance use disorders.",
    status: "active",
    website: "https://reconnect-labs.com/",
    stage: "Preclinical",
    modality: "Precision neuropsychiatry",
    indication: "Insomnia / Anxiety / SUD",
    year: "2022",
  },
  {
    name: "Reset Pharma",
    focus:
      "Neuro-biotechnology company developing first-in-class psilocybin-inspired therapies to reset neural networks and address demoralization syndrome in patients with life-altering diseases.",
    status: "active",
    website: "https://www.resetpharma.com/",
    stage: "Preclinical",
    modality: "Psilocybin-inspired",
    indication: "Demoralization syndrome",
    year: "2022",
  },
];

type StatusStyle = "exitFilled" | "liquidity" | "merged" | "active";
const statusConfig: Record<Status, { label: string; style: StatusStyle }> = {
  exit: { label: "Realized Exit", style: "exitFilled" },
  liquidity: { label: "Liquidity Event", style: "liquidity" },
  active: { label: "Active", style: "active" },
  merged: { label: "Merged", style: "merged" },
};

const statusClasses: Record<StatusStyle, string> = {
  exitFilled: "bg-accent-gold text-white border-transparent",
  liquidity: "border-transparent bg-blue-100 text-blue-800",
  merged: "border-border text-foreground/70",
  active: "border-transparent bg-muted text-muted-foreground",
};

const filterOptions = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "exit", label: "Exits" },
  { value: "merged", label: "Mergers" },
];

const Monogram = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="h-12 w-12 rounded border border-border bg-background flex items-center justify-center shrink-0">
      <span className="text-sm font-semibold tracking-wide text-foreground">{initials}</span>
    </div>
  );
};

const Meta = ({ company }: { company: Company }) => {
  const items = [
    company.stage && { label: "Stage", value: company.stage },
    company.modality && { label: "Modality", value: company.modality },
    company.indication && { label: "Indication", value: company.indication },
    company.year && { label: "Invested", value: company.year },
  ].filter(Boolean) as { label: string; value: string }[];
  if (!items.length) return null;
  return (
    <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
      {items.map((it, idx) => (
        <span key={it.label} className="inline-flex items-center gap-2">
          <span>
            <span className="uppercase tracking-wider text-[10px] text-muted-foreground/80">{it.label}</span>{" "}
            <span className="text-foreground/80">{it.value}</span>
          </span>
          {idx < items.length - 1 && <span aria-hidden="true">·</span>}
        </span>
      ))}
    </div>
  );
};

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? companies : companies.filter((c) => c.status === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto px-6">
        <p className="eyebrow">Portfolio</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-foreground max-w-3xl">
          16 companies across the CNS therapeutics landscape.
        </h2>

        <div className="mt-8 border-b border-border overflow-x-auto">
          <div className="flex items-center gap-x-8 min-w-max">
            {filterOptions.map((opt) => {
              const active = filter === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFilter(opt.value)}
                  className={cn(
                    "relative py-3 text-sm tracking-wide transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {opt.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-0 right-0 -bottom-px h-px transition-colors",
                      active ? "bg-foreground" : "bg-transparent",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((company, i) => {
            const config = statusConfig[company.status];
            const logoSrc = companyLogos[company.name];
            return (
              <Card
                key={`${company.name}-${i}`}
                className="flex flex-col border-border transition-all duration-200 hover:shadow-md hover:border-foreground/30"
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  {logoSrc ? (
                    <div className="h-12 w-12 rounded border border-border bg-background flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                      <img
                        src={logoSrc}
                        alt={`${company.name} logo`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <Monogram name={company.name} />
                  )}
                  <div className="space-y-2 min-w-0">
                    <CardTitle className="text-base leading-tight">{company.name}</CardTitle>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                        statusClasses[config.style],
                      )}
                    >
                      {config.label}
                    </span>
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
                  <Meta company={company} />
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
