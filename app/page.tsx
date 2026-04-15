import HeroSection from "@/components/HeroSection/Hero";
import ServiceSection from "@/components/ServiceSection/service";
import ProjectSection from "@/components/ProjectSection/project";
import FaqSection from "@/components/FaqSection/faq";
import PriceSection from "@/components/PriceSection/price";
import ReviewSection from "@/components/ReviewSection/review";
import TeamSection from "@/components/TeamSection/team";
import TechStackSection from "@/components/TechStackSection/TechStackSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TechStackSection />
      <ServiceSection />
      <ProjectSection />
      <TeamSection />
      <FaqSection />
      <ReviewSection />
      <PriceSection />
    </main>
  );
}
