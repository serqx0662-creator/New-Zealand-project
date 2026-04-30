"use client";
import { CountryData } from "@/app/(pages)/Countries/data";
import Link from "next/link";

interface CountryDetailProps {
    country: CountryData;
    STRAPI_URL: string;
}

export const CountryDetail = ({ country }: CountryDetailProps) => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-40 pb-20 text-gray-900 dark:text-white">
            <Link
                href="/Countries"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors mb-6 sm:max-w-[174px]"
            >
                ← Назад к странам
            </Link>

            <h1 className="text-2xl md:text-4xl font-bold mb-3">
                {country.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <div className="border border-gray-200 dark:border-zinc-800 rounded-xl p-4 md:p-6 bg-white dark:bg-zinc-950">
                        <h2 className="text-base font-semibold mb-3">О стране</h2>
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
                            Программы в {country.title}
                        </h2>
                        <div className="space-y-3">
                            {country.programs && country.programs.length > 0 ? (
                                country.programs.map((program) => (
                                    <div
                                        key={program.id}
                                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-200 dark:border-zinc-900 rounded-lg p-4"
                                    >
                                        <div>
                                            <p className="font-semibold text-sm mb-2">{program.title}</p>
                                            <p className="text-xs text-gray-400 dark:text-gray-500">
                                                {program.location} • {program.duration}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-bold text-sm text-black">
                                                ${program.price.toLocaleString()}/год
                                            </span>
                                            <Link
                                                href={`/Programs/${program.slug}`}
                                                className="text-xs bg-gray-900 text-white px-4 py-2.5 rounded-md"
                                            >
                                                Подробнее
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-400 italic">Программы пока не добавлены</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="border border-gray-200 dark:border-zinc-800 rounded-xl p-5 bg-white dark:bg-zinc-950">
                        <h3 className="font-semibold mb-3 text-sm">Быстрые факты</h3>
                        {country.fast_facts ? (
                            <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-baseline gap-4 dark:border-zinc-900 pb-2">
                                    <span className="w-24 shrink-0">Столица:</span>
                                    <span className="text-gray-900 dark:text-white font-medium">
                                        {country.fast_facts.capital}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-4 dark:border-zinc-900 pb-2">
                                    <span className="w-24 shrink-0">Валюта:</span>
                                    <span className="text-gray-900 dark:text-white font-medium">
                                        {country.fast_facts.currency}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-4 pb-1">
                                    <span className="w-24 shrink-0">Учебный год:</span>
                                    <span className="text-gray-900 dark:text-white font-medium">
                                        {country.fast_facts.academic_year}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-400">Данные отсутствуют</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};