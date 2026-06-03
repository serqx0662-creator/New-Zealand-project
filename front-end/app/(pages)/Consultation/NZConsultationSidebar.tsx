"use client";

import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/context/LanguageContext";

export const NzConsultationSidebar = () => {
    const { lang } = useLanguage();

    const content = {
        ru: {
            title: "Контактная информация",
            socials: "Социальные сети",
            items: [
                { title: "Телефон", details: ["+7 (495) 123-45-67", "+7 (495) 123-45-68"] },
                { title: "Email", details: ["info@studynz.com", "support@studynz.com"] },
                { title: "Адрес", details: ["Москва, ул. Тверская, 10", "Офис 205, 2 этаж"] },
                { title: "Рабочие часы", details: ["Пн - Пт: 9:00 - 18:00", "Сб: 10:00 - 16:00", "Вс: Выходной"] }
            ]
        },
        en: {
            title: "Contact Information",
            socials: "Social Networks",
            items: [
                { title: "Phone", details: ["+7 (495) 123-45-67", "+7 (495) 123-45-68"] },
                { title: "Email", details: ["info@studynz.com", "support@studynz.com"] },
                { title: "Address", details: ["10 Tverskaya St, Moscow", "Office 205, 2nd floor"] },
                { title: "Working Hours", details: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00", "Sun: Closed"] }
            ]
        }
    }[lang === 'ru' ? 'ru' : 'en'];

    return (
        <div className="lg:col-span-5 space-y-6">
            <div className="border border-gray-200 rounded-[14px] p-8 space-y-8 bg-white">
                <h3 className="text-lg font-bold text-[#101828]">{content.title}</h3>
                {content.items.map((item) => (
                    <div key={item.title} className="space-y-2">
                        <p className="font-semibold text-[#101828] ">{item.title}</p>
                        <div className="space-y-1">
                            {item.details.map((text, i) => (
                                <p key={i} className="text-gray-500">{text}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="border border-gray-200 rounded-[14px] p-8 bg-white">
                <h3 className="text-lg font-bold text-[#101828] mb-6">{content.socials}</h3>
                <div className="flex flex-wrap gap-3">
                    {['Facebook', 'Instagram', 'LinkedIn'].map((s) => (
                        <Button key={s} variant="secondary" className="bg-black text-white hover:bg-black/80 rounded-md px-6 transition-colors">
                            {s}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};