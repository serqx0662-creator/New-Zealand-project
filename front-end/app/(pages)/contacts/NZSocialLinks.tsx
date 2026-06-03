"use client";
import React from "react";
import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

export const NZSocialLinks = () => {
    const { lang } = useLanguage();
    const t = dictionaries[lang].contactsPage;

    return (
        <div className="border border-gray-200 rounded-[14px] p-8 bg-white">
            <h3 className="text-lg font-bold text-[#101828] mb-6">{t.socials}</h3>
            <div className="flex flex-wrap gap-3">
                {['Facebook', 'Instagram', 'LinkedIn'].map((name) => (
                    <Button
                        key={name}
                        className="bg-black text-white hover:bg-zinc-800 rounded-md px-6 h-12 font-bold transition-all active:scale-95"
                    >
                        {name}
                    </Button>
                ))}
            </div>
        </div>
    );
};