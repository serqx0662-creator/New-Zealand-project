"use client";
import { CountryData } from "@/app/(pages)/Countries/data";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";
import {ArrowLeft} from "lucide-react";
import React from "react";

interface CountryDetailProps {
    country: CountryData;
    STRAPI_URL: string;
}

export const CountryDetail = ({ country }: CountryDetailProps) => {
    const { lang } = useLanguage();
    const t = dictionaries[lang].countriesPage;

    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-40 pb-20 text-gray-900 dark:text-white">
            <Link
                href="/Countries"
                className="inline-flex items-center gap-2 text-sm text-zinc-600 border border-gray-300 rounded-md px-4 py-2 hover:bg-zinc-50 transition-all active:scale-95 mb-8"
            >
                <ArrowLeft size={18} /> {t.back}
            </Link>

            <h1 className="text-2xl md:text-4xl font-bold mb-3">
                {country.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <div className="border border-gray-200 dark:border-zinc-800 rounded-xl p-4 md:p-6 bg-white dark:bg-zinc-950">
                        <h2 className="text-base font-semibold mb-3">{t.about}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                            {country.description}
                        </p>

                        {/* Сетка с преимуществами */}
                        {country.advantages && country.advantages.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {country.advantages.map((adv) => (
                                    <div
                                        key={adv.id}
                                        className="p-4 border border-gray-200 dark:border-zinc-900 rounded-md"
                                    >
                                        <h4 className="text-sm font-bold mb-1">{adv.title}</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                                            {adv.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Секция программ */}
                    <div className="border border-gray-200 dark:border-zinc-800 rounded-xl p-4 md:p-6 bg-white dark:bg-zinc-950">
                        <h2 className="text-base font-semibold mb-4">
                            {t.programsIn} {country.title}
                        </h2>
                        <div className="space-y-3">
                            {country.programs && country.programs.length > 0 ? (
                                country.programs.map((program) => (
                                    <div
                                        key={program.id}
                                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-200 dark:border-zinc-900 rounded-lg p-4 transition-all hover:border-zinc-300 dark:hover:border-zinc-700"
                                    >
                                        <div>
                                            <p className="font-semibold text-sm mb-2">{program.title}</p>
                                            <p className="text-xs text-gray-400 dark:text-gray-500">
                                                {program.location} • {program.duration}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-bold text-sm text-black dark:text-white">
                                                ${program.price.toLocaleString('en-US')}/{lang === 'ru' ? 'год' : 'year'}
                                            </span>
                                            <Link
                                                href={`/programs/${program.slug}`}
                                                className="text-xs bg-gray-900 dark:bg-white dark:text-black text-white px-4 py-2.5 rounded-md hover:bg-black dark:hover:bg-zinc-200 transition-all"
                                            >
                                                {t.more}
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-400 italic">{t.noPrograms}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="border border-gray-200 dark:border-zinc-800 rounded-xl p-5 bg-white dark:bg-zinc-950">
                        <h3 className="font-semibold mb-3 text-sm">{t.fastFacts.title}</h3>
                        {country.fast_facts ? (
                            <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-baseline gap-4 dark:border-zinc-900 pb-2">
                                    <span className="w-24 shrink-0 text-xs uppercase text-gray-400">{t.fastFacts.capital}</span>
                                    <span className="text-gray-900 dark:text-white font-medium">
                                        {country.fast_facts.capital}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-4 dark:border-zinc-900 pb-2">
                                    <span className="w-24 shrink-0 text-xs uppercase text-gray-400">{t.fastFacts.currency}</span>
                                    <span className="text-gray-900 dark:text-white font-medium">
                                        {country.fast_facts.currency}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-4 pb-1">
                                    <span className="w-24 shrink-0 text-xs uppercase text-gray-400">{t.fastFacts.year}</span>
                                    <span className="text-gray-900 dark:text-white font-medium">
                                        {country.fast_facts.academic_year}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-400">{t.fastFacts.noData}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};