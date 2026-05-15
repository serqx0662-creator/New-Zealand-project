"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

export const CTABanner: React.FC = () => {
    const { lang } = useLanguage();
    const t = dictionaries[lang].aboutPage.cta;

    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 pb-10">
            <div className="rounded-2xl bg-gray-900 px-8 py-12 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">{t.title}</h2>
                <p className="text-gray-400 text-sm mb-8">{t.desc}</p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <Link href="/Consultation">
                        <button className="bg-white active:scale-95 text-gray-900 text-sm font-medium px-6 py-2.5 rounded-md hover:bg-gray-200 transition-all">
                            {t.consultBtn}
                        </button>
                    </Link>
                    <Link href="/Programs">
                        <button className="border active:scale-95 border-white text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-white/10 transition-all">
                            {t.programsBtn}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};