"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

export const NZContactInfo = () => {
    const { lang } = useLanguage();
    const t = dictionaries[lang].contactsPage.info;

    const sections = [
        { label: t.sections.phone, values: ["+7 (495) 123-45-67", "+7 (495) 123-45-68"] },
        { label: t.sections.email, values: ["info@studynz.com", "support@studynz.com"] },
        { label: t.sections.address, values: t.sections.addressValues },
        { label: t.sections.hours, values: t.sections.hoursValues },
    ];

    return (
        <div className="border border-gray-200 rounded-[14px] p-8 space-y-8 bg-white">
            <h3 className="text-lg font-bold text-[#101828]">{t.title}</h3>
            {sections.map((sec) => (
                <div key={sec.label} className="space-y-3">
                    <p className="font-semibold text-[#101828] tracking-wider">{sec.label}</p>
                    <div className="space-y-1">
                        {sec.values.map(v => <p key={v} className="text-[#7F838D]">{v}</p>)}
                    </div>
                </div>
            ))}
        </div>
    );
};