import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const exits = [
  {
    company: "Gilgamesh Pharmaceuticals",
    description: "Lead asset acquired by AbbVie for up to $1.2B (2025).",
  },
  {
    company: "Mindset Pharma",
    description: "Acquired by Otsuka for ~CAD $80M (2023).",
  },
];

const ExitsSection = () => {
  return (
    <section id="exits" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Realized Exits</h2>
        <p className="mt-3 text-muted-foreground text-lg">Demonstrated outcomes for our investors.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {exits.map((exit) => (
            <Card
              key={exit.company}
              className="border-exit-border bg-exit-highlight/50 hover:shadow-md transition-shadow"
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center shrink-0">
                  <span className="text-xs text-muted-foreground">Logo</span>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-xl">{exit.company}</CardTitle>
                  <Badge variant="exit">Realized Exit</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExitsSection;
