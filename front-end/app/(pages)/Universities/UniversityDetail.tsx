"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, ArrowLeft, Calendar, Award } from "lucide-react";
import { University, Program } from "@/app/data/universities";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

interface UniversityDetailProps {
    documentId: string;
}

interface StrapiProgram {
    id: number;
    documentId: string;
    title: string;
    type: "Undergraduate" | "Postgraduate" | "Foundation";
    slug?: string;
}

interface StrapiUniversityItem {
    id: number;
    documentId: string;
    title: string;
    city: string;
    rating: number;
    qsRank: string;
    programsCount: number;
    description: string;
    about: string;
    image?: { url: string };
    country?: { title: string };
    programs?: StrapiProgram[];
}

interface StrapiResponse {
    data: StrapiUniversityItem[];
}

export default function UniversityDetail({ documentId }: UniversityDetailProps) {
    const { lang } = useLanguage();
    const t = dictionaries[lang].universitiesPage;
    const programTypes = dictionaries[lang].programTypes;

    const [university, setUniversity] = useState<University | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUniversity() {
            setLoading(true);
            const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
            try {
                const url = `${baseUrl}/api/universities?locale=${lang}&filters[documentId][$eq]=${documentId}&populate=*`;
                const res = await fetch(url, { cache: "no-store" });
                if (!res.ok) throw new Error(`Error: ${res.status}`);

                const json: StrapiResponse = await res.json();
                if (!json.data || json.data.length === 0) return;

                const item = json.data[0];
                setUniversity({
                    id: item.id,
                    documentId: item.documentId,
                    name: item.title || "",
                    city: item.city || "",
                    country: item.country?.title || "",
                    rating: Number(item.rating) || 0,
                    qsRank: item.qsRank || "N/A",
                    programsCount: Number(item.programsCount) || 0,
                    description: item.description || "",
                    about: item.about || "",
                    image: item.image?.url
                        ? (item.image.url.startsWith("http")
                            ? item.image.url
                            : `${baseUrl}${item.image.url}`)
                        : "/image/country.png",
                    programs: (item.programs || []).map((p): Program => ({
                        id: p.id,
                        documentId: p.documentId,
                        slug: p.slug || "",
                        name: p.title || "Program",
                        type: p.type || "Undergraduate",
                    })),
                });
            } catch (error) {
                console.error("🚨 Fetch error:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchUniversity();
    }, [lang, documentId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center text-zinc-500">
                {t.loading}
            </div>
        );
    }

    if (!university) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center text-zinc-500">
                {dictionaries[lang].programPage.notFound}
            </div>
        );
    }

    const { image, name, city, country, qsRank, rating, description, about, programs } = university;

    return (
        <div className="min-h-screen bg-white max-w-[1440px] mx-auto px-4 md:px-6 pt-40 pb-20">
            {/* Back button */}
            <Link
                href="/Universities"
                className="inline-flex items-center gap-2 text-sm text-zinc-600 border border-zinc-200 rounded-xl px-4 py-2 hover:bg-zinc-50 transition-all mb-6"
            >
                <ArrowLeft className="w-4 h-4" />
                {t.backBtn}
            </Link>

            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden h-72 mb-7">
                <img src={image} alt={name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm flex items-center gap-2">
                    <span className="text-zinc-500 font-medium">{qsRank}</span>
                    <div className="w-[1px] h-3 bg-zinc-200" />
                    <div className="flex items-center gap-1">
                        <span className="text-amber-400 text-sm">★</span>
                        <span>{rating}</span>
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 text-white">
                    <h1 className="text-3xl font-bold leading-tight mb-2">{name}</h1>
                    <div className="flex items-center gap-1.5 text-white/90 text-sm">
                        <MapPin className="w-4 h-4 text-white/70" />
                        <span>{city}, {country}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <section className="border border-gray-200 rounded-2xl p-6">
                        <h2 className="text-lg font-semibold text-zinc-900 mb-4">
                            {t.aboutTitle}
                        </h2>
                        <div className="space-y-4 text-zinc-600 text-[15px] leading-relaxed">
                            <p>{description}</p>
                            <p>{about}</p>
                        </div>
                    </section>

                    <section className="border border-gray-200 rounded-2xl p-6 bg-white">
                        <h2 className="text-lg font-semibold text-zinc-900 mb-5">
                            {t.programsTitle}
                        </h2>
                        <div className="space-y-3">
                            {programs && programs.length > 0 ? (
                                programs.map((program) => (
                                    <div
                                        key={program.id}
                                        className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-all bg-white gap-4"
                                    >
                                        <div>
                                            <p className="font-semibold text-zinc-900">{program.name}</p>
                                            <span className="text-xs font-medium text-zinc-400 mt-1 block">
                                                {programTypes[program.type as keyof typeof programTypes] || program.type}
                                            </span>
                                        </div>
                                        <Link  href={`/Programs/${program.slug}`} className="w-full sm:w-auto text-center text-xs bg-zinc-900 text-white px-6 py-2.5 rounded-md hover:bg-black transition-colors font-medium">
                                            {t.detailsBtn}
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-zinc-400 italic text-center py-4">{t.noPrograms}</p>
                            )}
                        </div>
                    </section>
                </div>

                <aside>
                    <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                        <h2 className="text-lg font-semibold text-zinc-900 mb-6">
                            {t.quickInfo}
                        </h2>

                        <div className="space-y-5 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-zinc-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-400 font-medium">{t.stats.programs}</p>
                                    <p className="text-base font-bold text-zinc-900">{programs.length}+</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-zinc-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-400 font-medium">{t.stats.rating}</p>
                                    <p className="text-base font-bold text-zinc-900">{rating}/5.0</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/Apply">
                            <button className="w-full bg-zinc-900 text-white rounded-md py-3.5 font-semibold hover:bg-black transition-all">
                                {t.applyBtn}
                            </button>
                        </Link>
                    </div>
                </aside>
            </div>
        </div>
    );
}