"use client";

import React from 'react';
import { NZConsultationForm } from "@/app/(pages)/consultation/NZConsultationForm";
import { NzConsultationSidebar } from "@/app/(pages)/consultation/NZConsultationSidebar";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

export default function ConsultationPage() {
    const { lang } = useLanguage();
    const t = dictionaries[lang].consultation; // Убедись, что в словаре есть секция consultation

    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">
                        {lang === 'ru' ? 'Запросить консультацию' : 'Request a consultation'}
                    </h1>
                    <p className="text-gray-500 text-lg">
                        {lang === 'ru'
                            ? 'Заполните форму, и наш консультант свяжется с вами в ближайшее время'
                            : 'Fill out the form and our consultant will contact you shortly'}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <NZConsultationForm />
                    <NzConsultationSidebar />
                </div>
            </div>
        </main>
    );
}