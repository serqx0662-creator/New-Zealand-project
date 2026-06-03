"use client";
import React, { useState, useEffect } from "react";
import { CountryDetail } from "../CountryDetail";
import { CountryData, Advantage } from "@/app/(pages)/Countries/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

interface TextChild {
    text: string;
    type: string;
}

interface ContentBlock {
    type: string;
    children?: TextChild[];
}

interface FastFacts {
    capital?: string;
    currency?: string;
    academic_year?: string;
}

interface CountryStats {
    universities: string | number;
    programs: string | number;
    students: string | number;
}

interface StrapiProgram {
    id: number;
    title: string;
    location?: string;
    duration?: string;
    price: number;
    slug?: string;
    documentId?: string;
}

interface StrapiEntry {
    id: number;
    documentId?: string;
    title?: string;
    slug?: string;
    short_description?: ContentBlock[] | string;
    description?: ContentBlock[] | string;
    image?: { url: string };
    stats?: CountryStats;
    fast_facts?: FastFacts;
    programs?: StrapiProgram[];
    Advantage?: Advantage[];
    advantages?: Advantage[];
}

interface StrapiResponse {
    data: StrapiEntry[];
}

export default function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { lang } = useLanguage();
    const t = dictionaries[lang].countriesPage;

    const [country, setCountry] = useState<CountryData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const extractText = (blocks: ContentBlock[] | string | undefined): string => {
        if (!blocks) return "";
        if (typeof blocks === "string") return blocks;
        return blocks
            .map(block => block.children?.map(child => child.text).join("") || "")
            .join("\n");
    };

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            try {
                const { slug } = await params;

                const query = new URLSearchParams();
                query.append("filters[slug][$eq]", slug);
                query.append("locale", lang);
                query.append("populate[0]", "image");
                query.append("populate[1]", "fast_facts");
                query.append("populate[2]", "stats");
                query.append("populate[3]", "programs");
                query.append("populate[4]", "Advantage");

                const res = await fetch(
                    `${STRAPI_URL}/api/countries?${query.toString()}`,
                    { cache: "no-store" }
                );

                if (!res.ok) throw new Error(`Server Error: ${res.status}`);

                const response: StrapiResponse = await res.json();
                const d = response.data?.[0];

                if (d) {
                    const normalized: CountryData = {
                        id: d.id,
                        documentId: d.documentId || "",
                        title: d.title || "",
                        slug: d.slug || "",
                        short_description: extractText(d.short_description),
                        description: extractText(d.description),
                        image: d.image?.url ? { url: d.image.url } : undefined,
                        // Coerce number → string to match CountryData.stats
                        stats: d.stats
                            ? {
                                universities: String(d.stats.universities),
                                programs: String(d.stats.programs),
                                students: String(d.stats.students),
                            }
                            : undefined,
                        fast_facts: d.fast_facts,
                        // Guarantee documentId is always a string to match ProgramData
                        programs: (d.programs || []).map(p => ({
                            ...p,
                            documentId: p.documentId || "",
                            slug: p.slug || "",
                            location: p.location || "",
                            duration: p.duration || "",
                        })),
                    };
                    setCountry(normalized);
                    setError(null);
                } else {
                    setError(t.notFound);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Error");
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [params, lang, t.notFound]);

    if (loading) {
        return <div className="pt-40 text-center text-gray-500 font-medium">{t.loading}</div>;
    }

    if (error) {
        return (
            <div className="pt-40 text-center">
                <p className="text-red-500 font-medium mb-4">{error}</p>
                <button
                    onClick={() => window.history.back()}
                    className="text-sm underline text-gray-500"
                >
                    {t.back}
                </button>
            </div>
        );
    }

    if (!country) {
        return <div className="pt-40 text-center text-gray-500 font-medium">{t.notFound}</div>;
    }

    return <CountryDetail country={country} STRAPI_URL={STRAPI_URL} />;
}