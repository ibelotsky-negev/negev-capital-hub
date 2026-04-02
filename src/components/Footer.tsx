import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-background py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">Negev Capital · Cayman Islands</span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@negevcap.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              info@negevcap.com
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground/60 text-center max-w-3xl mx-auto">
          This website does not constitute an offer to sell or solicitation of an offer to buy any securities.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
