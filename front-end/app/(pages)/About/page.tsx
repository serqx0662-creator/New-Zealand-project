"use client";
import React from "react";
import { MissionSection } from "./MissionSection";
import { ValuesSection } from "./ValuesSection";
import { CTABanner } from "./CTABanner";

const AboutPage: React.FC = () => {
    return (
        <main className="min-h-screen bg-white pt-40 pb-20">
            <MissionSection />
            <ValuesSection />
            <CTABanner />
        </main>
    );
};

export default AboutPage;