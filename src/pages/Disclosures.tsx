import { Link } from "react-router-dom";

const Disclosures = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold text-foreground">
            Negev Capital
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-foreground">Disclosures</h1>

        <div className="mt-10 space-y-6 text-[15px] text-muted-foreground leading-relaxed">
          <p>
            <em>Placeholder legal copy. To be replaced by the fund.</em>
          </p>

          <p>
            This website is provided by Negev Capital ("the Fund") for informational purposes only.
            Nothing on this website constitutes an offer to sell, or a solicitation of an offer to
            buy, any securities or investment products. Any such offer or solicitation will be made
            only by means of a confidential offering memorandum and in accordance with applicable
            securities laws.
          </p>

          <p>
            Information regarding portfolio companies is provided for illustrative purposes and
            should not be construed as a recommendation of any particular investment or strategy.
            Past performance is not indicative of future results. Investments in private securities
            are speculative, illiquid, and involve a high degree of risk, including the risk of
            loss of capital.
          </p>

          <p>
            Statements regarding portfolio companies, transactions, and outcomes reflect the
            Fund's belief at the time of publication and are subject to change without notice.
            Certain information has been obtained from third-party sources believed to be reliable
            but has not been independently verified.
          </p>

          <p>
            For additional information, please contact{" "}
            <a href="mailto:info@negevcap.com" className="text-foreground hover:text-accent-gold">
              info@negevcap.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
};

export default Disclosures;
