import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const labs = [
  {
    name: "Ariadne Bio",
    description: "Precision neuroscience company leveraging proprietary data platforms to develop targeted therapies for neurodegenerative diseases.",
  },
  {
    name: "Pipeline Asset",
    description: "Future CNS venture studio company currently in development. Details to be announced.",
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
            <Card key={lab.name} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="h-12 w-12 rounded bg-accent flex items-center justify-center shrink-0">
                  <span className="text-[10px] text-muted-foreground">Logo</span>
                </div>
                <div className="space-y-1.5">
                  <CardTitle className="text-lg">{lab.name}</CardTitle>
                  <Badge variant="labs">Venture Studio</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{lab.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NegevLabsSection;
