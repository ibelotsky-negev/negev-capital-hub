import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface PressItem {
  outlet: string;
  date: string;
  headline: string;
  url: string;
}

const press: PressItem[] = [
  {
    outlet: "AbbVie Newsroom",
    date: "August 25, 2025",
    headline:
      "AbbVie to Acquire Gilgamesh Pharmaceuticals' Bretisilocin, a Novel, Investigational Therapy for Major Depressive Disorder",
    url: "https://news.abbvie.com/2025-08-25-AbbVie-to-Acquire-Gilgamesh-Pharmaceuticals-Bretisilocin,-a-Novel,-Investigational-Therapy-for-Major-Depressive-Disorder,-Expanding-Psychiatry-Pipeline",
  },
  {
    outlet: "Otsuka Pharmaceutical",
    date: "October 2023",
    headline:
      "Otsuka Pharmaceutical to Acquire Mindset Pharma, Strengthening Pipeline in Psychiatric & Neurological Disorders",
    url: "https://otsuka-us.com/news/otsuka-pharmaceutical-acquire-mindset-pharma-strengthens-pipeline-area-psychiatric-and",
  },
  {
    outlet: "Endpoints News",
    date: "TBD",
    headline: "Coverage placeholder — replace with Endpoints / Fierce Biotech / STAT feature on Negev portfolio.",
    url: "#",
  },
];

const PressSection = () => {
  return (
    <section id="press" className="py-20 md:py-28 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <p className="eyebrow">In the Press</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-foreground max-w-3xl">
          Coverage of our portfolio and exits.
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {press.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full border-border transition-all duration-200 hover:shadow-md hover:border-foreground/30">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {item.outlet}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{item.date}</p>
                  <p className="mt-4 text-[15px] leading-snug text-foreground font-medium flex-1">
                    {item.headline}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
