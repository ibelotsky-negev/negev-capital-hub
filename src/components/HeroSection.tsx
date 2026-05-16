import { Button } from "@/components/ui/button";

const heroStats = [
  { value: "$30M+", label: "Fund Size" },
  { value: "2021", label: "Vintage" },
  { value: "16", label: "Portfolio Companies" },
  { value: "3", label: "Realized Exits" },
  { value: "Fully Invested", label: "Status" },
  { value: "Cayman Islands", label: "Domicile" },
  { value: "CNS / Brain Health · Seed–Series A", label: "Strategy" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Subtle neural / network motif */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 text-primary-foreground/[0.06] lg:block"
        viewBox="0 0 600 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="currentColor" strokeWidth="0.75">
          <circle cx="120" cy="100" r="2.5" fill="currentColor" />
          <circle cx="300" cy="80" r="2" fill="currentColor" />
          <circle cx="480" cy="160" r="3" fill="currentColor" />
          <circle cx="200" cy="240" r="2" fill="currentColor" />
          <circle cx="400" cy="300" r="2.5" fill="currentColor" />
          <circle cx="540" cy="380" r="2" fill="currentColor" />
          <circle cx="140" cy="420" r="3" fill="currentColor" />
          <circle cx="320" cy="500" r="2" fill="currentColor" />
          <circle cx="460" cy="520" r="2.5" fill="currentColor" />
          <circle cx="80" cy="300" r="2" fill="currentColor" />
          <line x1="120" y1="100" x2="300" y2="80" />
          <line x1="300" y1="80" x2="480" y2="160" />
          <line x1="120" y1="100" x2="200" y2="240" />
          <line x1="200" y1="240" x2="400" y2="300" />
          <line x1="400" y1="300" x2="480" y2="160" />
          <line x1="400" y1="300" x2="540" y2="380" />
          <line x1="200" y1="240" x2="140" y2="420" />
          <line x1="140" y1="420" x2="320" y2="500" />
          <line x1="320" y1="500" x2="460" y2="520" />
          <line x1="460" y1="520" x2="540" y2="380" />
          <line x1="80" y1="300" x2="200" y2="240" />
          <line x1="80" y1="300" x2="140" y2="420" />
          <line x1="320" y1="500" x2="400" y2="300" />
        </g>
      </svg>

      <div className="container relative mx-auto px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 lg:items-center">
          {/* Left column - 60% */}
          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              Fully Invested · 3 Realized Exits
            </p>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
              CNS and brain health therapeutics.
              <span className="block text-primary-foreground/70 font-light">Fully invested. Realized.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/70 leading-relaxed">
              Negev Capital is a $30M+ biotech venture fund. Our realized exits include the AbbVie acquisition of Gilgamesh Pharmaceuticals (up to $1.2B, 2025), the Otsuka acquisition of Mindset Pharma (2023), and the public-market exit of Bright Minds Biosciences (Nasdaq: DRUG, 2024). Today we continue building through Negev Labs, our CNS venture studio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="font-medium">
                <a href="#portfolio">View Portfolio</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="#exits">Our Exits</a>
              </Button>
            </div>
            <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground/45">
                Exits to:
              </span>
              <span className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">
                AbbVie
              </span>
              <span aria-hidden="true" className="text-primary-foreground/30">·</span>
              <span className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">
                Otsuka Pharmaceutical
              </span>
              <span aria-hidden="true" className="text-primary-foreground/30">·</span>
              <span className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">
                Public Markets (Nasdaq)
              </span>
            </div>
          </div>

          {/* Right column - 40% stat block */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] backdrop-blur-sm p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/50 mb-5">
                Fund at a glance
              </p>
              <dl className="divide-y divide-primary-foreground/10">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline justify-between py-3.5 first:pt-0 last:pb-0">
                    <dt className="text-sm text-primary-foreground/65">{stat.label}</dt>
                    <dd className="text-lg md:text-xl font-semibold tracking-tight">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
