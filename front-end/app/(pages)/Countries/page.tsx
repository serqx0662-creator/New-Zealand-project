"use client";
import React, { useState, useEffect } from "react";
import { CountryCard } from "./CountryCard";
import { CountryData } from "@/app/(pages)/Countries/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

interface StrapiEntry {
    id: number;
    attributes?: Record<string, any>;
    documentId?: string;
    title?: string;
    slug?: string;
    short_description?: string;
    description?: string;
    image?: { url: string };
    stats?: {
        universities: string | number;
        programs: string | number;
        students: string | number;
    };
    fast_facts?: any;
}

export default function CountriesPage() {
    const { lang } = useLanguage();
    const t = dictionaries[lang].countriesPage;

    const [countries, setCountries] = useState<CountryData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCountries() {
            setLoading(true);
            try {
                const res = await fetch(
                    `${STRAPI_URL}/api/countries?locale=${lang}&populate[0]=image&populate[1]=stats`
                );

                if (!res.ok) {
                    throw new Error(`Ошибка сервера: ${res.status}`);
                }

                const responseData = await res.json();

                if (!responseData.data) {
                    setCountries([]);
                    return;
                }

                const normalizedData: CountryData[] = responseData.data.map((item: StrapiEntry) => {
                    const data = item.attributes ? item.attributes : item;
                    return {
                        id: item.id,
                        documentId: data.documentId || "",
                        title: data.title || "",
                        slug: data.slug || "",
                        short_description: data.short_description || "",
                        description: data.description || "",
                        image: data.image ? { url: data.image.url } : undefined,
                        stats: data.stats ? {
                            universities: data.stats.universities,
                            programs: data.stats.programs,
                            students: data.stats.students,
                        } : undefined,
                        fast_facts: data.fast_facts
                    };
                });

                setCountries(normalizedData);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
                setCountries([]);
            } finally {
                setLoading(false);
            }
        }
        fetchCountries();
    }, [lang]);

    if (loading) return <div className="pt-40 text-center text-gray-500 font-medium">{t.loading}</div>;

    if (countries.length === 0) {
        return (
            <div className="pt-40 text-center text-gray-500">
                {t.notFound}
            </div>
        );
    }

    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 flex flex-col gap-15 pt-40 pb-20">
            <div className="mb-2">
                <h1 className="text-3xl md:text-[48px] font-bold text-gray-900 mb-2">
                    {t.title}
                </h1>
                <p className="text-gray-500 text-lg">
                    {t.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {countries.map((country) => (
                    <CountryCard
                        key={country.id}
                        country={country}
                        STRAPI_URL={STRAPI_URL}
                    />
                ))}
            </div>
        </section>
    );
}