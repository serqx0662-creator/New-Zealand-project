"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

export default function NZServices() {
    const { lang } = useLanguage();
    const t = dictionaries[lang].services;

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-16 text-[#101828]">
                    {t.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {t.items.map((service) => (
                        <div
                            key={service.id}
                            className="relative bg-[#F1F2F8] rounded-[16px] flex flex-col group transition-all duration-500 hover:bg-[#EBEDF0]"
                        >
                            <div className="p-6 md:p-8 z-10 md:max-w-[60%]">
                                <span className="text-xl md:text-[32px] font-bold text-[#101828] block mb-2">
                                    {service.id}
                                </span>
                                <h3 className="text-sm md:text-base font-semibold text-[#101828] mb-3 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-sm md:text-base text-[#475467]">
                                    {service.description}
                                </p>
                            </div>
                            <div className="relative h-36 md:h-48 w-full md:absolute md:right-0 md:bottom-0 md:top-0 md:w-[45%] mt-4 md:mt-0 pointer-events-none">
                                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105 origin-bottom">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-contain object-bottom"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}