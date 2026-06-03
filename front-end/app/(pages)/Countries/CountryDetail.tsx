"use client";
import { CountryData } from "@/app/(pages)/Countries/data";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";
import { ArrowLeft } from "lucide-react";
import React from "react";

interface CountryDetailProps {
    country: CountryData;
    STRAPI_URL: string;
}

export const CountryDetail = ({ country }: CountryDetailProps) => {
    const { lang } = useLanguage();
    const t = dictionaries[lang].countriesPage;

    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-40 pb-20 text-gray-900">
            <Link
                href="/Countries"
                className="inline-flex items-center gap-2 text-sm text-zinc-600 border border-gray-300 rounded-md px-4 py-2 hover:bg-zinc-50 transition-all active:scale-95 mb-8"
            >
                <ArrowLeft size={18} /> {t.back}
            </Link>

            <h1 className="text-2xl md:text-4xl font-bold mb-6">
                {country.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* ── Left column ─────────────────────────────────── */}
                <div className="md:col-span-2 space-y-6">

                    {/* About + advantages */}
                    <div className="border border-gray-200 rounded-xl p-4 md:p-6 bg-white">
                        <h2 className="text-base font-semibold mb-3">{t.about}</h2>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                            {country.description}
                        </p>

                        {country.advantages && country.advantages.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {country.advantages.map((adv) => (
                                    <div
                                        key={adv.id}
                                        className="p-4 border border-gray-200 rounded-md"
                                    >
                                        <h4 className="text-sm font-bold mb-1">{adv.title}</h4>
                                        <p className="text-xs text-gray-500 leading-normal">
                                            {adv.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Programs */}
                    <div className="border border-gray-200 rounded-xl p-4 md:p-6 bg-white">
                        <h2 className="text-base font-semibold mb-4">
                            {t.programsIn} {country.title}
                        </h2>
                        <div className="space-y-3">
                            {country.programs && country.programs.length > 0 ? (
                                country.programs.map((program) => (
                                    <div
                                        key={program.id}
                                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-200 rounded-lg p-4 transition-all hover:border-zinc-300"
                                    >
                                        <div>
                                            <p className="font-semibold text-sm mb-1">{program.title}</p>
                                            <p className="text-xs text-gray-400">
                                                {program.location} • {program.duration}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-bold text-sm text-black">
                                                ${program.price.toLocaleString("en-US")}/
                                                {lang === "ru" ? "год" : "year"}
                                            </span>
                                            <Link
                                                href={`/Programs/${program.documentId || program.slug}`}
                                                className="text-xs bg-gray-900 text-white px-4 py-2.5 rounded-md hover:bg-black transition-all"
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

                {/* ── Right sidebar ────────────────────────────────── */}
                <div className="space-y-4">

                    {/* Fast facts */}
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <h3 className="font-semibold mb-3 text-sm">{t.fastFacts.title}</h3>
                        {country.fast_facts ? (
                            <div className="space-y-3 text-sm text-gray-500">
                                <div className="flex items-baseline gap-4 pb-2">
                                    <span className="w-24 shrink-0 text-xs uppercase text-gray-400">
                                        {t.fastFacts.capital}
                                    </span>
                                    <span className="text-gray-900 font-medium">
                                        {country.fast_facts.capital}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-4 pb-2">
                                    <span className="w-24 shrink-0 text-xs uppercase text-gray-400">
                                        {t.fastFacts.currency}
                                    </span>
                                    <span className="text-gray-900 font-medium">
                                        {country.fast_facts.currency}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-4 pb-1">
                                    <span className="w-24 shrink-0 text-xs uppercase text-gray-400">
                                        {t.fastFacts.year}
                                    </span>
                                    <span className="text-gray-900 font-medium">
                                        {country.fast_facts.academic_year}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-400">{t.fastFacts.noData}</p>
                        )}
                    </div>

                    {/* Consultation button */}
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <h3 className="font-semibold mb-2 text-sm">
                            {lang === "ru" ? "Нужна помощь?" : "Need help?"}
                        </h3>
                        <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                            {lang === "ru"
                                ? "Наши консультанты помогут выбрать программу и оформить документы."
                                : "Our consultants will help you choose a program and prepare documents."}
                        </p>
                        <Link
                            href="/Apply"
                            className="block w-full text-center bg-zinc-900 text-white text-sm font-semibold py-3 rounded-md hover:bg-black transition-all"
                        >
                            {lang === "ru" ? "Запросить консультацию" : "Request Consultation"}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};