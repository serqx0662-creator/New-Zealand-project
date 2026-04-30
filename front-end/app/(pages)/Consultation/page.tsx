import React from 'react';
import {NZConsultationForm} from "@/app/(pages)/Consultation/NZConsultationForm";
import {NzConsultationSidebar} from "@/app/(pages)/Consultation/NZConsultationSidebar";


export default function ConsultationPage() {
    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">
                        Запросить консультацию
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Заполните форму, и наш консультант свяжется с вами в ближайшее время
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