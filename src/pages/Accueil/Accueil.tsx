import DefaultLayout from "@/layouts/default";
import HeroSection from "@/components/HeroSection/HeroSection";
import DomaineDroitSection from "@/components/DomaineDroit/DomaineDroitSection";

const Accueil = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <DomaineDroitSection />
    </DefaultLayout>
  );
};

export default Accueil;
