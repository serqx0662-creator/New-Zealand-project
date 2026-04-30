"use client";

import React from 'react';
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function NZSuccessScreen() {
    return (
        <div className="border border-gray-100 rounded-[24px] md:rounded-[32px] p-6 md:p-12 bg-white shadow-sm flex flex-col items-center justify-center text-center min-h-[450px] md:min-h-[500px] animate-in fade-in zoom-in-95 duration-500">
            <div className="w-full mb-6 md:mb-8 text-left">
                <h2 className="text-xl md:text-2xl font-bold text-[#101828] mb-2 leading-tight">
                    Ваша заявка была успешно принята
                </h2>
                <p className="text-gray-400 text-sm">Все шаги были выполнены</p>
            </div>

            <div className="w-full bg-gray-50/50 rounded-[24px] border border-gray-100 border-dashed py-12 md:py-20 flex flex-col items-center gap-4 mb-8 md:mb-10 px-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} className="text-black" />
                </div>
                <p className="text-sm font-medium text-[#101828] max-w-[200px] md:max-w-none">
                    Ожидайте подтверждения вашей заявки
                </p>
            </div>

            <Button
                onClick={() => window.location.href = '/'}
                className="w-full md:w-auto bg-black text-white hover:bg-black/90 px-8 h-14 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
            >
                Вернуться на главную <ChevronRight size={18} />
            </Button>
        </div>
    );
}