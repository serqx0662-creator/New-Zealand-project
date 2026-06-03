"use client";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { CountryData } from "@/app/(pages)/countries/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

interface CountryCardProps {
    country: CountryData;
    STRAPI_URL: string;
}

export const CountryCard = ({ country, STRAPI_URL }: CountryCardProps) => {
    const { lang } = useLanguage();
    const t = dictionaries[lang].countryCard;

    const imageUrl = country.image?.url
        ? (country.image.url.startsWith('http') ? country.image.url : `${STRAPI_URL}${country.image.url}`)
        : "/placeholder.jpg";

    return (
        <Link href={`/countries/${country.slug}`} className="h-full">
            <div className="group h-full cursor-pointer rounded-[12px] overflow-hidden border border-gray-100 bg-white flex flex-col transition-all duration-500 hover:shadow-lg hover:shadow-gray-300/50 hover:-translate-y-1">
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
                        {/* Университеты */}
                        <div className="flex flex-col items-center gap-1 text-center">
                            <GraduationCap className="w-5 h-5 text-zinc-400" />
                            <span className="text-base font-bold text-gray-900">
                                {country.stats?.universities || "0"}
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase font-semibold">
                                {t.universities}
                            </span>
                        </div>

                        {/* Программы */}
                        <div className="flex flex-col items-center gap-1 text-center px-4">
                            <GraduationCap className="w-5 h-5 text-zinc-400" />
                            <span className="text-base font-bold text-gray-900">
                                {country.stats?.programs || "0"}
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase font-semibold">
                                {t.programs}
                            </span>
                        </div>

                        {/* Студенты */}
                        <div className="flex flex-col items-center gap-1 text-center">
                            <GraduationCap className="w-5 h-5 text-zinc-400" />
                            <span className="text-base font-bold text-gray-900">
                                {country.stats?.students || "0"}
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase font-semibold">
                                {t.students}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};