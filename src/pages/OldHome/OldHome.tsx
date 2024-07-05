import DefaultLayout from "@/layouts/default";
import HeroSection from "@/components/HeroSection/HeroSection";
import DomaineDroitSection from "@/components/DomaineDroit/DomaineDroitSection";
import OldLawsSection from "@/components/OldLawsSection/OldLawsSection";

const OldHome = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <DomaineDroitSection />
      <OldLawsSection />
    </DefaultLayout>
  );
};

export default OldHome;
