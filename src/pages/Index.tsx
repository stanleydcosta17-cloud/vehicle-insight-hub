import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import AuthPreviewSection from "@/components/landing/AuthPreviewSection";
import AdminPreviewSection from "@/components/landing/AdminPreviewSection";
import TrustSection from "@/components/landing/TrustSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AuthPreviewSection />
      <AdminPreviewSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
