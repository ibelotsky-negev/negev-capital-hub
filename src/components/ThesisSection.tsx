const ThesisSection = () => {
  return (
    <section id="thesis" className="py-20 md:py-28 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <p className="eyebrow">Our Thesis</p>
        <div className="mt-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            A conviction in neuropsychiatric innovation, validated by outcomes.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Negev Capital was founded on the conviction that psychedelic-derived and novel
            neuropsychiatric compounds would become a mainstream therapeutic category. The fund's
            exits to AbbVie and Otsuka validated that thesis. Today, through Negev Labs and our
            active portfolio, we continue to build at the intersection of neuroscience innovation
            and clinical drug development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
