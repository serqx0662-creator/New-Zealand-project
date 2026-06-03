"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import UniversityCard from "./UniversityCard";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";
import {
    University,
    Program,
    StrapiUniversity,
    StrapiCollectionResponse
} from "@/app/data/universities";

export default function UniversitiesPage() {
    const { lang } = useLanguage();
    const t = dictionaries[lang].universitiesPage;

    const [query, setQuery] = useState<string>("");
    const [universities, setUniversities] = useState<University[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchUniversities(): Promise<void> {
            setLoading(true);
            const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

            try {
                // Добавляем locale=${lang}
                const res = await fetch(`${baseUrl}/api/universities?locale=${lang}&populate=*`, {
                    cache: 'no-store'
                });

                if (!res.ok) throw new Error(`Error: ${res.status}`);

                const json: StrapiCollectionResponse<StrapiUniversity> = await res.json();

                if (json.data && Array.isArray(json.data)) {
                    const formattedData: University[] = json.data.map((item: StrapiUniversity) => ({
                        id: item.id,
                        documentId: item.documentId,
                        name: item.title || "No title",
                        city: item.city || "",
                        country: item.country?.title || "",
                        rating: Number(item.rating) || 0,
                        qsRank: item.qsRank || "N/A",
                        programsCount: Number(item.programsCount) || 0,
                        image: item.image?.url
                            ? (item.image.url.startsWith("http") ? item.image.url : `${baseUrl}${item.image.url}`)
                            : "/image/country.png",
                        description: item.description || "",
                        about: item.about || "",
                        programs: (item.programs || []).map((p): Program => ({
                            id: p.id,
                            documentId: p.documentId,
                            slug: p.slug || "",
                            name: p.title || "Program",
                            type: p.type || "Undergraduate"
                        }))
                    }));

                    setUniversities(formattedData);
                }
            } catch (error) {
                console.error("🚨 Fetch error:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchUniversities();
    }, [lang]);

    const filtered = universities.filter((u: University) =>
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.city.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white py-10 max-w-[1440px] pt-40 pb-20 mx-auto px-4 md:px-6">
            <div className="mb-8">
                <h1 className="text-[32px] md:text-[48px] font-bold text-zinc-900 tracking-tight mb-2 leading-tight">
                    {t.title}
                </h1>
                <p className="text-zinc-400 text-sm md:text-base max-w-[600px]">
                    {t.description}
                </p>
            </div>

            <div className="relative mb-8 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-200 text-sm outline-none focus:border-zinc-400"
                />
            </div>

            {loading ? (
                <div className="text-center py-20 text-zinc-500">{t.loading}</div>
            ) : filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((u: University) => (
                        <UniversityCard key={u.id} university={u} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-zinc-400">{t.notFound}</div>
            )}
        </div>
    );
}