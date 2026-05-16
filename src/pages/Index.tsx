import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThesisSection from "@/components/ThesisSection";
import ExitsSection from "@/components/ExitsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import NegevLabsSection from "@/components/NegevLabsSection";
import PressSection from "@/components/PressSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ThesisSection />
      <ExitsSection />
      <div className="border-t border-border" aria-hidden="true" />
      <PortfolioSection />
      <TeamSection />
      <NegevLabsSection />
      <PressSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
