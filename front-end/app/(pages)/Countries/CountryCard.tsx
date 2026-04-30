"use client";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import {CountryData} from "@/app/(pages)/Countries/data";

interface CountryCardProps {
    country: CountryData;
    STRAPI_URL: string;
}

export const CountryCard = ({ country, STRAPI_URL }: CountryCardProps) => {
    const imageUrl = country.image?.url
        ? (country.image.url.startsWith('http') ? country.image.url : `${STRAPI_URL}${country.image.url}`)
        : "/placeholder.jpg";

    return (
        <Link href={`/Countries/${country.slug}`} className="h-full">
            <div className="group h-full cursor-pointer rounded-[12px] overflow-hidden border border-gray-100 bg-white flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1">
                <div className="relative overflow-hidden h-48 shrink-0">
                    <img
                        src={imageUrl}
                        alt={country.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{country.title}</h3>
                    <p className="text-sm text-gray-500 flex-1 line-clamp-3">
                        {country.short_description}
                    </p>

                    <div className="flex w-full justify-between mt-auto pt-2">
                        <div className="flex flex-col items-center gap-1 text-center">
                            <GraduationCap className="w-5 h-5" />
                            <span className="text-base font-bold text-gray-900">
                                {country.stats?.universities || "0"}
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase">Университетов</span>
                        </div>

                        <div className="flex flex-col items-center gap-1 text-center px-4">
                            <GraduationCap className="w-5 h-5" />
                            <span className="text-base font-bold text-gray-900">
                                {country.stats?.programs || "0"}
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase">Программ</span>
                        </div>

                        <div className="flex flex-col items-center gap-1 text-center">
                            <GraduationCap className="w-5 h-5" />
                            <span className="text-base font-bold text-gray-900">
                                {country.stats?.students || "0"}
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase">Студентов</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};