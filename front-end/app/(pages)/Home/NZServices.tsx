"use client";
import React from 'react';
import Image from 'next/image';
import { SERVICES_DATA } from "@/app/data/services";

export default function NZServices() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-16 text-[#101828]">
                    Наши услуги
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {SERVICES_DATA.map((service) => (
                        <div
                            key={service.id}
                            className="relative bg-[#F1F2F8] rounded-3xl flex flex-col group transition-all duration-500 hover:bg-[#EBEDF0]"
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

                            <div className="relative h-36 md:h-0 w-full md:static mt-10 md:mt-0 pb-4 md:pb-0 pointer-events-none">
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[135%] w-[75%] md:left-auto md:translate-x-0 md:right-0 md:h-[110%] md:w-[45%] transition-transform duration-500 group-hover:scale-105 origin-bottom pointer-events-none z-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-contain object-bottom md:object-right-bottom"
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