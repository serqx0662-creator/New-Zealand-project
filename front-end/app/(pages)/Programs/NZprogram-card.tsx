"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { ProgramData } from "@/app/(pages)/Programs/[id]/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

const PER_YEAR: Record<string, string> = {
    ru: "/год",
    en: "/yr",
};

export default function NZProgramCard({ program }: { program: ProgramData }) {
    const { lang } = useLanguage();
    const t = dictionaries[lang].programs.card;

    const imageUrl = program.image?.url
        ? (program.image.url.startsWith('http') ? program.image.url : `${STRAPI_URL}${program.image.url}`)
        : "/placeholder.jpg";

    const href = program.documentId
        ? `/Programs/${program.documentId}`
        : `/Programs/${program.slug || program.id}`;

    return (
        <div className="group flex flex-col bg-white border border-gray-100 rounded-[12px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-300/50 hover:-translate-y-1 h-full">
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={program.title || "Program"}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#101828] mb-5 line-clamp-2 min-h-[56px]">
                    {program.title || "---"}
                </h3>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <MapPin size={18} className="shrink-0 text-gray-400" />
                        <span className="line-clamp-1">{program.location || t.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <Calendar size={18} className="shrink-0 text-gray-400" />
                        <span>{program.duration || t.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base text-[#101828] font-bold mt-2">
                        <DollarSign size={18} className="text-gray-400 shrink-0" />
                        <span>
                            {t.priceFrom} ${program.price ? Number(program.price).toLocaleString("en-US") : "0"}
                            {PER_YEAR[lang] ?? "/yr"}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                    <Link
                        href={href}
                        className="flex items-center justify-center border border-gray-200 text-gray-700 font-semibold py-3 rounded-md hover:bg-gray-50 transition-colors text-sm"
                    >
                        {t.more}
                    </Link>
                    <Link
                        href="/Apply"
                        className="flex items-center justify-center bg-black text-white font-semibold py-3 rounded-md hover:bg-black/80 transition-all text-sm"
                    >
                        {t.apply}
                    </Link>
                </div>
            </div>
        </div>
    );
}