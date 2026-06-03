"use client";
import React, { useState, useEffect } from "react";
import { CountryCard } from "./CountryCard";
import { CountryData } from "@/app/(pages)/Countries/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

interface CountryStats {
    universities: string | number;
    programs: string | number;
    students: string | number;
}

interface StrapiEntry {
    id: number;
    documentId?: string;
    title?: string;
    slug?: string;
    short_description?: string;
    description?: string;
    image?: { url: string };
    stats?: CountryStats;
    fast_facts?: {
        capital?: string;
        currency?: string;
        academic_year?: string;
    };
}

export default function CountriesPage() {
    const { lang } = useLanguage();
    const t = dictionaries[lang].countriesPage;

    const [countries, setCountries] = useState<CountryData[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function fetchCountries() {
            setLoading(true);
            setFetchError(false);
            try {
                const res = await fetch(
                    `${STRAPI_URL}/api/countries?locale=${lang}&populate[0]=image&populate[1]=stats`,
                    { cache: "no-store" }
                );

                if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

                const responseData = await res.json();

                if (!isMounted) return;

                if (!responseData.data) {
                    setCountries([]);
                    return;
                }

                const normalizedData: CountryData[] = responseData.data.map((item: StrapiEntry) => ({
                    id: item.id,
                    documentId: item.documentId || "",
                    title: item.title || "",
                    slug: item.slug || "",
                    short_description: item.short_description || "",
                    description: item.description || "",
                    image: item.image ? { url: item.image.url } : undefined,
                    stats: item.stats
                        ? {
                            universities: String(item.stats.universities),
                            programs: String(item.stats.programs),
                            students: String(item.stats.students),
                        }
                        : undefined,
                    fast_facts: item.fast_facts,
                }));

                setCountries(normalizedData);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
                if (isMounted) setFetchError(true);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchCountries();
        return () => { isMounted = false; };
    }, [lang]);

    if (loading) {
        return <div className="pt-40 text-center text-gray-500 font-medium">{t.loading}</div>;
    }

    // Only show error when the request actually failed — not when data is just empty
    if (fetchError) {
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

            {countries.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {countries.map((country) => (
                        <CountryCard
                            key={country.id}
                            country={country}
                            STRAPI_URL={STRAPI_URL}
                        />
                    ))}
                </div>
            ) : (
                <div className="pt-10 text-center text-gray-400">
                    {t.loading}
                </div>
            )}
        </section>
    );
}