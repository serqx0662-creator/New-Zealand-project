import React from "react";
import { MissionSection } from "./MissionSection";
import { ValuesSection } from "./ValuesSection";
import { CTABanner } from "./CTABanner";

 
const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen font-sans pt-40 pb-20 mx-auto ">
      <MissionSection />
      <ValuesSection />
      <CTABanner />
    </div>
  );
};
 
export default AboutPage;