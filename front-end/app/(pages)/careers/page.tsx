"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries"; // Путь как в твоем примере

export default function CareersPage() {
    const router = useRouter();

    // Берем строго 'lang', как ты делал в компоненте NZServices
    const { lang } = useLanguage();

    // Вытаскиваем секцию 'careers' из словаря текущего языка
    const t = dictionaries[lang].careers;

    const handleCtaClick = () => {
        const targetPath = lang === 'ru' ? '/Consultation' : `/${lang}/Consultation`;
        router.push(targetPath);
    };

    return (
        <main className="relative bg-white text-[#101828] min-h-screen pt-32 pb-24 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">

                {/* Кнопка назад */}
                <Link
                    href={lang === 'ru' ? '/' : `/${lang}`}
                    className="inline-flex items-center gap-2 text-sm text-zinc-600 border border-gray-300 rounded-md px-4 py-2 hover:bg-zinc-50 transition-all active:scale-95 mb-8"
                >
                    <ArrowLeft size={18} />
                    {t.backBtn}
                </Link>

                {/* Основной двухколоночный грид */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* ЛЕВАЯ КОЛОНКА: Только тексты */}
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#101828] mb-4 leading-tight">
                                {t.title}
                            </h1>
                            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                                {t.subtitle}
                            </p>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-2 border-blue-600 pl-4 py-2 bg-blue-50/40 rounded-r-xl">
                            {t.intro}
                        </p>
                    </div>

                    {/* ПРАВАЯ КОЛОНКА: Сетка возможностей и консультация */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Блок этапов */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-[#101828]">
                                {t.blocksTitle}
                            </h2>

                            <div className="grid grid-cols-1 gap-4">
                                {t.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-6 bg-gray-50/60 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50/90 transition-all group"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <h3 className="text-base md:text-lg font-bold text-[#101828]">
                                                {item.title}
                                            </h3>
                                            <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md w-fit whitespace-nowrap">
                                                {item.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Блок консультации */}
                        <div className="p-6 md:p-8 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50/90 bg-gradient-to-r from-gray-50 to-white text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-4">
                            <div className="max-w-md">
                                <h4 className="font-bold text-base md:text-lg text-[#101828] mb-1">{t.ctaTitle}</h4>
                                <p className="text-xs md:text-sm text-gray-500">{t.ctaDesc}</p>
                            </div>
                            <button
                                onClick={handleCtaClick}
                                className="mt-4 sm:mt-0 w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition-all cursor-pointer active:scale-95 whitespace-nowrap"
                            >
                                {t.ctaBtn}
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}