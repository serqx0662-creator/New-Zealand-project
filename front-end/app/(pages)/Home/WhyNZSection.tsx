"use client";
import React from 'react';
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";


export default function WhyNZSection() {
    const { lang } = useLanguage();
    const t = dictionaries[lang].whyNZ;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        {t.title}
                    </h2>
                    <p className="text-black text-base font-normal md:min-w-[891px] mx-auto leading-relaxed overflow-hidden ">
                        {t.description}
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
                    style={{ gridTemplateRows: "auto" }}
                >
                    <div className="lg:col-span-2 border border-gray-100 rounded-[16px] p-8 bg-white transition-all duration-500 hover:bg-[#F8F9FB] hover:border-gray-200 group">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-500">
                            {t.cards.safety.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {t.cards.safety.desc}
                        </p>
                    </div>

                    <div className="lg:col-span-3 border border-gray-100 rounded-[16px] p-8 bg-white transition-all duration-500 hover:bg-[#F8F9FB] hover:border-gray-200 group">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-500">
                            {t.cards.education.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {t.cards.education.desc}
                        </p>
                    </div>

                    <div className="md:row-span-2 lg:col-span-2 lg:row-span-2 border border-transparent bg-[#F2F4F7] rounded-[16px] p-8 flex flex-col justify-between overflow-hidden min-h-[360px] transition-all duration-500 hover:bg-[#EBEDF0] group">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-500">
                                {t.cards.career.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {t.cards.career.desc}
                            </p>
                        </div>
                        <div className="mx-0 -mb-8 mt-6 overflow-hidden">
                            <img
                                src="/image/why-nz-people.webp"
                                alt="Students"
                                className="w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-1 border border-transparent bg-[#F2F4F7] rounded-[16px] flex items-center justify-center p-6 min-h-[180px] transition-all duration-500 hover:bg-[#EBEDF0] group">
                        <img
                            src="/image/why-nz-map.webp"
                            alt="World Map"
                            className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                        />
                    </div>

                    <div className="lg:col-span-2 border border-gray-100 rounded-[16px] p-8 bg-white transition-all duration-500 hover:bg-[#F8F9FB] hover:border-gray-200 group">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-500">
                            {t.cards.culture.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {t.cards.culture.desc}
                        </p>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3 border border-gray-100 rounded-[16px] p-8 bg-white transition-all duration-500 hover:bg-[#F8F9FB] hover:border-gray-200 group">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-500">
                            {t.cards.quality.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {t.cards.quality.desc}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}