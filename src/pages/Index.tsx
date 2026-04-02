import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExitsSection from "@/components/ExitsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import NegevLabsSection from "@/components/NegevLabsSection";
import FundStats from "@/components/FundStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExitsSection />
      <FundStats />
      <PortfolioSection />
      <TeamSection />
      <NegevLabsSection />
      <Footer />
    </div>
  );
};

export default Index;
