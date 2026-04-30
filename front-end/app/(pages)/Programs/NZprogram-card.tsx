"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { ProgramData } from "@/app/(pages)/Programs/[id]/data";

const STRAPI_URL = "http://127.0.0.1:1337";

export default function NZProgramCard({ program }: { program: ProgramData }) {
    const imageUrl = program.image?.url
        ? `${STRAPI_URL}${program.image.url}`
        : "/placeholder.jpg";

    return (
        <div className="group flex flex-col bg-white border border-gray-100 rounded-[12px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 h-full">
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
                    {program.title || "Без названия"}
                </h3>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <MapPin size={18} className="shrink-0 text-gray-400" />
                        <span className="line-clamp-1">{program.location || "Локация не указана"}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <Calendar size={18} className="shrink-0 text-gray-400" />
                        <span>{program.duration || "Уточняется"}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base text-[#101828] font-bold mt-2">
                        <DollarSign size={18} className="text-gray-400 shrink-0" />
                        <span>
                            От ${program.price ? Number(program.price).toLocaleString('en-US') : "0"}/год
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                    <Link
                        href={`/Programs/${program.slug}`}
                        className="flex items-center justify-center border border-gray-200 text-gray-700 font-semibold py-3 rounded-md hover:bg-gray-50 transition-colors text-sm"
                    >
                        Подробнее
                    </Link>
                    <Link
                        href="/Apply"
                        className="flex items-center justify-center bg-black text-white font-semibold py-3 rounded-md hover:bg-black/80 transition-all text-sm"
                    >
                        Подать Заявку
                    </Link>
                </div>
            </div>
        </div>
    );
}