import React from "react";
import { MissionSection } from "./MissionSection";
import { ValuesSection } from "./ValuesSection";
import { CTABanner } from "./CTABanner";

 
const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pt-40 pb-20 mx-auto px-4 md:px-6">
      <MissionSection />
      <ValuesSection />
      <CTABanner />
    </div>
  );
};
 
export default AboutPage;