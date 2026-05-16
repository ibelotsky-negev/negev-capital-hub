import { Mail } from "lucide-react";

const channels = [
  {
    label: "For LPs & Co-Investors",
    email: "lp@negevcap.com",
    description:
      "Fund updates, allocation inquiries, and co-investment opportunities alongside Negev Capital.",
  },
  {
    label: "For Pharma BD & Partnerships",
    email: "bd@negevcap.com",
    description:
      "Licensing discussions, asset diligence, and strategic partnerships across our CNS portfolio.",
  },
  {
    label: "For Founders",
    email: "founders@negevcap.com",
    description:
      "Pitches for CNS and brain-health therapeutics with existing human data and a clear path to value.",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-warm-gray border-t border-border">
      <div className="container mx-auto px-6">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-foreground max-w-3xl">
          Get in touch with the right team.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((c) => (
            <div
              key={c.email}
              className="rounded-md border border-border bg-background p-6 flex flex-col"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium">
                {c.label}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {c.description}
              </p>
              <a
                href={`mailto:${c.email}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                {c.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
