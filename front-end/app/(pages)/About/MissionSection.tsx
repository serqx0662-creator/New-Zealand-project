"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

export const MissionSection: React.FC = () => {
    const { lang } = useLanguage();
    const t = dictionaries[lang].aboutPage;

    return (
        <section className="max-w-[1440px] mx-auto flex flex-col gap-5 px-4 md:px-6">
            <h1 className="text-[32px] md:text-[48px] font-bold text-gray-900 ">{t.title}</h1>
            <p className="text-gray-500 text-base">{t.subtitle}</p>

            <div className="rounded-2xl border border-gray-200 p-8 flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.mission.title}</h2>
                    <p className="text-gray-600 text-sm md:text-[16px] leading-relaxed mb-4">
                        {t.mission.p1}
                    </p>
                    <p className="text-gray-600 text-sm md:text-[16px] leading-relaxed">
                        {t.mission.p2}
                    </p>
                </div>

                <div className="w-full lg:w-[580px] shrink-0 rounded-xl overflow-hidden h-56 lg:h-[320px]">
                    <img
                        src="/image/country.png"
                        alt="About Us"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};