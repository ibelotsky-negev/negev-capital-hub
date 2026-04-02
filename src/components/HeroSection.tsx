import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-28 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Advancing CNS Therapeutics From Discovery to Exit
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
            A fully invested biotech venture fund with realized outcomes in brain health.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-10 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="#portfolio">View Portfolio</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
