"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import UniversityCard from "./UniversityCard";
import {
    University,
    Program,
    StrapiUniversity,
    StrapiCollectionResponse
} from "@/app/data/universities";

export default function UniversitiesPage() {
    const [query, setQuery] = useState<string>("");
    const [universities, setUniversities] = useState<University[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchUniversities(): Promise<void> {
            const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

            try {
                const res = await fetch(`${baseUrl}/api/universities?populate=*`, {
                    cache: 'no-store'
                });

                if (!res.ok) throw new Error(`Ошибка: ${res.status}`);

                const json: StrapiCollectionResponse<StrapiUniversity> = await res.json();

                if (json.data && Array.isArray(json.data)) {
                    const formattedData: University[] = json.data.map((item: StrapiUniversity) => ({
                        id: item.id,
                        documentId: item.documentId,
                        name: item.title || "Без названия",
                        city: item.city || "",
                        country: item.country?.title || "Не указана",
                        rating: Number(item.rating) || 0,
                        qsRank: item.qsRank || "N/A",
                        programsCount: Number(item.programsCount) || 0,
                        image: item.image?.url ? `${baseUrl}${item.image.url}` : "/image/country.png",
                        description: item.description || "",
                        about: item.about || "",
                        programs: (item.programs || []).map((p): Program => ({
                            id: p.id,
                            documentId: p.documentId,
                            slug: p.slug || "",
                            name: p.title || "Программа",
                            type: p.type || "Undergraduate"
                        }))
                    }));

                    setUniversities(formattedData);
                }
            } catch (error) {
                const message = error instanceof Error ? error.message : "Unknown error";
                console.error("🚨 Fetch error:", message);
            } finally {
                setLoading(false);
            }
        }

        fetchUniversities();
    }, []);

    const filtered = universities.filter((u: University) =>
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.city.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white py-10 max-w-[1440px] pt-40 pb-20 mx-auto px-4 md:px-6">
            <div className="mb-8">
                <h1 className="text-[32px] md:text-[48px] font-bold text-zinc-900 tracking-tight mb-2 leading-tight">
                    Университеты-партнёры
                </h1>
                <p className="text-zinc-400 text-sm md:text-base max-w-[600px] mx-auto md:mx-0">
                    Лучшие университеты со всего мира
                </p>
            </div>

            <div className="relative mb-8 group">
                <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400
                    transition-colors duration-200
                   group-focus-within:text-zinc-600 group-hover:text-zinc-500"
                />

                <input
                    type="text"
                    placeholder="Поиск университета"
                    value={query}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-200 text-sm
                   bg-white transition-all duration-200 outline-none
                   hover:border-zinc-300
                   focus:border-zinc-400
                   placeholder:text-zinc-400"
                />
            </div>

            {loading ? (
                <div className="text-center py-20 text-zinc-500">Загрузка...</div>
            ) : filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((u: University) => (
                        <UniversityCard key={u.id} university={u} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-zinc-400">Университеты не найдены</div>
            )}
        </div>
    );
}