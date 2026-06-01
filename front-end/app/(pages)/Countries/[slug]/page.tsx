"use client";
import React, { useState, useEffect } from "react";
import { CountryDetail } from "../CountryDetail";
import { CountryData, Advantage } from "@/app/(pages)/Countries/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
const TOKEN = "cb2663af49ac0b0e6f72b2a9493b8739f6f8a590325cbe99d3521d63e590e63d4f263a4aaf713cd0fde2a3ae3256eb3811098b15d8310a0eeb6b349bc29bb5dda6f10ac579d30f0db5b9dca793962be741603537f5f4ed049e59ffe519e55a2eaa3277d1ed036c5648fc4f781269c35456ac20d19ff43b78d1871f2f132955d4";

interface TextChild {
    text: string;
    type: string;
}

interface ContentBlock {
    type: string;
    children?: TextChild[];
}

interface StrapiResponse {
    data: Array<{
        id: number;
        documentId: string;
        title: string;
        slug: string;
        short_description: ContentBlock[] | string;
        description: ContentBlock[] | string;
        image?: { url: string };
        stats?: CountryData['stats'];
        fast_facts?: CountryData['fast_facts'];
        programs?: CountryData['programs'];
        Advantage?: Advantage[];
        advantages?: Advantage[];
    }>;
}

export default function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { lang } = useLanguage();
    const t = dictionaries[lang].countriesPage; // Берем переводы для страницы стран

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
            setLoading(true); // Перезапускаем лоадер при смене языка
            try {
                const { slug } = await params;

                const query = new URLSearchParams();
                query.append("filters[slug][$eq]", slug);
                query.append("locale", lang); // ВАЖНО: запрашиваем конкретную локаль
                query.append("populate[0]", "image");
                query.append("populate[1]", "fast_facts");
                query.append("populate[2]", "stats");
                query.append("populate[3]", "programs");
                query.append("populate[4]", "Advantage");

                const res = await fetch(`${STRAPI_URL}/api/countries?${query.toString()}`, {
                    cache: 'no-store',
                    headers: { Authorization: `Bearer ${TOKEN}` },
                });

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
                        stats: d.stats,
                        fast_facts: d.fast_facts,
                        programs: d.programs || [],
                        advantages: d.Advantage || d.advantages || []
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
    }, [params, lang, t.notFound]); // Добавили lang в зависимости

    if (loading) return <div className="pt-40 text-center text-gray-500 font-medium">{t.loading}</div>;

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

    if (!country) return <div className="pt-40 text-center text-gray-500 font-medium">{t.notFound}</div>;

    return <CountryDetail country={country} STRAPI_URL={STRAPI_URL} />;
}