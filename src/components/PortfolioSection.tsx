import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Status = "exit" | "active" | "labs";

interface Company {
  name: string;
  focus: string;
  status: Status;
}

const companies: Company[] = [
  { name: "Gilgamesh Pharmaceuticals", focus: "Next-generation psychedelic therapeutics for neuropsychiatric disorders.", status: "exit" },
  { name: "Mindset Pharma", focus: "Optimized psychedelic compounds for mental health indications.", status: "exit" },
  { name: "Biomind Labs", focus: "Novel DMT-based therapeutics for treatment-resistant depression.", status: "active" },
  { name: "Lobe Sciences", focus: "Psilocybin-based treatments for PTSD and traumatic brain injury.", status: "active" },
  { name: "Wesana Health", focus: "Psilocybin-assisted therapy for traumatic brain injury.", status: "active" },
  { name: "ATAI Life Sciences", focus: "Platform for developing novel psychedelic and non-psychedelic therapies.", status: "active" },
  { name: "Ariadne Bio", focus: "Precision neuroscience for neurodegenerative diseases.", status: "labs" },
  { name: "Portfolio Company", focus: "CNS-focused therapeutic development.", status: "active" },
  { name: "Portfolio Company", focus: "Brain health research and development.", status: "active" },
  { name: "Portfolio Company", focus: "Neuroscience drug discovery platform.", status: "active" },
  { name: "Portfolio Company", focus: "CNS therapeutics pipeline.", status: "active" },
];

const statusConfig: Record<Status, { label: string; variant: "exit" | "active" | "labs" }> = {
  exit: { label: "Realized Exit", variant: "exit" },
  active: { label: "Active", variant: "active" },
  labs: { label: "Negev Labs", variant: "labs" },
};

const filterOptions = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "exit", label: "Exits" },
  { value: "labs", label: "Negev Labs" },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? companies : companies.filter((c) => c.status === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Portfolio</h2>
        <p className="mt-3 text-muted-foreground text-lg">Our investments across the CNS therapeutics landscape.</p>
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
            return (
              <Card key={`${company.name}-${i}`} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="h-12 w-12 rounded bg-muted flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-muted-foreground">Logo</span>
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <CardTitle className="text-base leading-tight">{company.name}</CardTitle>
                    <Badge variant={config.variant}>{config.label}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{company.focus}</p>
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
