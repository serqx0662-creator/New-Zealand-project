"use client";

import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { University } from "@/app/data/universities";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

interface UniversityCardProps {
    university: University;
}

export default function UniversityCard({ university }: UniversityCardProps) {
    const { lang } = useLanguage();
    const t = dictionaries[lang].universitiesPage;

    const { name, city, country, rating, qsRank, programsCount, image, documentId } = university;

    const imageUrl = image?.startsWith('http')
        ? image
        : `${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`;

    return (
        <Link href={`/Universities/${documentId}`}>
            <article className="group rounded-2xl border border-zinc-100 overflow-hidden bg-white shadow-sm hover:shadow-lg hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={imageUrl || "/placeholder-university.png"}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 text-sm font-semibold shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-black text-black" />
                        <span className="text-zinc-800">{rating || "0.0"}</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[15px] font-semibold text-zinc-900 mb-1.5 leading-snug">
                        {name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm mb-4">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{city}{country ? `, ${country}` : ""}</span>
                    </div>

                    <div className="mt-auto space-y-1.5 mb-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-400">{t.stats.rating}</span>
                            <span className="font-medium text-zinc-700">{qsRank || "N/A"}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-400">{t.stats.programs}</span>
                            <span className="font-bold text-zinc-900">{programsCount || 0}</span>
                        </div>
                    </div>

                    <div className="relative z-20 block w-full py-3 border border-gray-200 rounded-md text-center font-bold hover:bg-gray-100 transition-all active:scale-[0.98] bg-white text-zinc-900">
                        {t.cardBtn}
                    </div>
                </div>
            </article>
        </Link>
    );
}