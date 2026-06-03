"use client";
import React from "react";
import { Target, Heart, Clock } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

export const ValuesSection: React.FC = () => {
    const { lang } = useLanguage();
    const t = dictionaries[lang].aboutPage;

    const icons = [
        <Target key="target" size={22} strokeWidth={1.5} />,
        <Heart key="heart" size={22} strokeWidth={1.5} />,
        <Clock key="clock" size={22} strokeWidth={1.5} />
    ];

    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.values.title}</h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                {t.values.items.map((item, index) => (
                    <div key={index} className="flex-1 min-w-[220px] rounded-2xl border border-gray-200 bg-white p-6">
                        <div className="mb-4 text-gray-400">{icons[index]}</div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white px-8 py-6 flex flex-wrap justify-around gap-6">
                {t.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                        <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};