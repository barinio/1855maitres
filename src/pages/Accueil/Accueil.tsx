import DefaultLayout from "@/layouts/default";
import HeroSection from "@/components/HeroSection/HeroSection";
import DomaineDroitSection from "@/components/DomaineDroit/DomaineDroitSection";
import LawsSection from "@/components/LawsSection/LawsSection";

const Accueil = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <DomaineDroitSection />
      <LawsSection />
    </DefaultLayout>
  );
};

export default Accueil;
