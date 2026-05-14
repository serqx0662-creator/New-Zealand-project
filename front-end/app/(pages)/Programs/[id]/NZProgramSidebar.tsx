"use client";

import React from 'react';
import { Calendar, Clock, DollarSign, Star, MessageCircle, Download } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import { NZInfoItem } from "./NZInfoItem";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

interface SidebarProps {
    duration: string;
    startDate: string;
    price: string;
    rating: string;
}

export const NZProgramSidebar = ({ duration, startDate, price, rating }: SidebarProps) => {
    const { lang } = useLanguage();
    const t = dictionaries[lang].sidebar;

    return (
        <aside className="lg:w-[35%] space-y-6 shrink-0 w-full">
            <div className="bg-white border border-gray-300 rounded-[14px] p-8">
                <h3 className="text-xl font-bold mb-8 text-[#101828]">{t.title}</h3>
                <div className="space-y-6 mb-10">
                    <NZInfoItem icon={<Calendar />} label={t.duration} value={duration} />
                    <NZInfoItem icon={<Clock />} label={t.start} value={startDate} />
                    <NZInfoItem icon={<DollarSign />} label={t.price} value={price} />
                    <NZInfoItem icon={<Star />} label={t.rating} value={rating} />
                </div>

                <div className="flex flex-col gap-3">
                    <Link
                        href="/Apply"
                        className={cn("w-full h-14 rounded-md px-6 bg-black hover:bg-black/80 text-white flex items-center justify-center transition-all active:scale-95 font-medium text-sm")}
                    >
                        {t.apply}
                    </Link>
                    <Button variant="outline" className="w-full h-14 rounded-md border-gray-300 gap-2 hover:bg-gray-50 transition-all">
                        <MessageCircle size={18}/> {t.ask}
                    </Button>
                    <Button variant="ghost" className="w-full h-14 rounded-md border-gray-300 gap-2 hover:bg-gray-50 transition-all">
                        <Download size={18}/> {t.download}
                    </Button>
                </div>
            </div>

            <div className="bg-black text-white rounded-[14px] p-8">
                <h3 className="text-xl font-bold mb-3">{t.helpTitle}</h3>
                <p className="text-gray-400 text-sm mb-6 font-medium">
                    {t.helpDesc}
                </p>
                <Link href="/Consultation">
                    <Button className="w-full bg-white text-black h-12 rounded-md font-bold hover:bg-gray-100 transition-all active:scale-95">
                        {t.consult}
                    </Button>
                </Link>
            </div>
        </aside>
    );
};