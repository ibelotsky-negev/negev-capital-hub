import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "$30M+", label: "Fund Size" },
  { value: "Fully Invested", label: "Status" },
  { value: "3", label: "Realized Exits" },
  { value: "14", label: "Portfolio Companies" },
];

const FundStats = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:divide-x md:divide-primary-foreground/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center px-8 py-4 md:py-0">
              <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
              <span className="mt-1 text-sm text-primary-foreground/60 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundStats;
