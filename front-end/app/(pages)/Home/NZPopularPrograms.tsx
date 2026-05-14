"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProgramData } from "@/app/(pages)/Programs/[id]/data";
import NZProgramCard from "@/app/(pages)/Programs/NZprogram-card";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

interface StrapiProgramResponse {
    id: number;
    documentId: string;
    title: string;
    location: string;
    duration: string;
    price: number;
    slug: string;
    image?: {
        url: string;
        alternativeText?: string;
    };
}

export default function PopularPrograms() {
    const { lang } = useLanguage();
    const t = dictionaries[lang].popularPrograms;

    const [programs, setPrograms] = useState<ProgramData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularPrograms = async () => {
            const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
            try {
                // Добавляем параметр locale=${lang}, чтобы подгружать правильный перевод из Strapi
                const res = await fetch(
                    `${baseUrl}/api/programs?locale=${lang}&populate=*&pagination[pageSize]=3`
                );

                const json: { data: StrapiProgramResponse[] } = await res.json();

                if (json.data) {
                    const formatted: ProgramData[] = json.data.map((item) => ({
                        id: item.id,
                        documentId: item.documentId,
                        title: item.title,
                        location: item.location,
                        duration: item.duration,
                        price: item.price,
                        slug: item.slug,
                        image: item.image
                    }));
                    setPrograms(formatted);
                }
            } catch (error) {
                console.error("🚨 Error loading programs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularPrograms();
    }, [lang]); // Перезагружаем при смене языка

    if (loading) return <div className="py-20 text-center text-gray-500 font-medium">{t.loading}</div>;
    if (programs.length === 0) return null;

    return (
        <section className="py-12 md:py-20 bg-[#FCFCFC]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-3">
                            {t.title}
                        </h2>
                        <p className="text-gray-500 text-lg">
                            {t.description}
                        </p>
                    </div>
                    <Link
                        href="/Programs"
                        className="inline-flex items-center justify-center bg-black text-white hover:bg-zinc-800 px-8 py-4 rounded-md font-bold transition-all active:scale-95"
                    >
                        {t.allBtn}
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <NZProgramCard key={program.documentId} program={program} />
                    ))}
                </div>
            </div>
        </section>
    );
}