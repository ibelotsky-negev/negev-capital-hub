import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Thesis", href: "/#thesis" },
  { label: "Exits", href: "/#exits" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Team", href: "/#team" },
  { label: "Negev Labs", href: "/#labs" },
  { label: "Press", href: "/#press" },
];

const contactLinks = [
  { label: "lp@negevcap.com", href: "mailto:lp@negevcap.com" },
  { label: "bd@negevcap.com", href: "mailto:bd@negevcap.com" },
  { label: "founders@negevcap.com", href: "mailto:founders@negevcap.com" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Legal</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/disclosures"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Disclosures
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2">
              {contactLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Social</p>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/company/negev-capital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Negev Capital on LinkedIn"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border space-y-3">
          <p className="text-xs text-muted-foreground/70 max-w-3xl">
            This website does not constitute an offer to sell or solicitation of an offer to buy any securities.
          </p>
          <p className="text-xs text-muted-foreground/70">
            © 2026 Negev Capital. Cayman Islands.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
