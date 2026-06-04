"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

export default function PrivacyPage() {
    const { lang } = useLanguage();
    const t = dictionaries[lang].privacy;

    return (
        <main className="relative bg-white text-[#101828] min-h-screen pt-32 pb-18 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
                <Link
                    href={lang === 'ru' ? '/' : `/${lang}`}
                    className="inline-flex items-center gap-2 text-sm text-zinc-600 border border-gray-300 rounded-md px-4 py-2 hover:bg-zinc-50 transition-all active:scale-95 mb-8"
                >
                    <ArrowLeft size={18} />
                    {t.backBtn}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#101828] mb-3 leading-tight">
                                {t.title}
                            </h1>
                            <p className="text-xs md:text-sm text-gray-400">{t.update}</p>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-2 border-blue-600 pl-4 py-2 bg-blue-50/40 rounded-r-xl">
                            {t.intro}
                        </p>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <div className="p-6 bg-gray-50/60 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50/90 transition-all">
                            <h2 className="text-base md:text-lg font-bold text-[#101828] mb-2">
                                {t.section1Title}
                            </h2>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{t.section1Text}</p>
                        </div>

                        <div className="p-6 bg-gray-50/60 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50/90 transition-all">
                            <h2 className="text-base md:text-lg font-bold text-[#101828] mb-2">
                                {t.section2Title}
                            </h2>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{t.section2Text}</p>
                        </div>

                        <div className="p-6 bg-gray-50/60 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50/90 transition-all">
                            <h2 className="text-base md:text-lg font-bold text-[#101828] mb-2">
                                {t.section3Title}
                            </h2>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{t.section3Text}</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}