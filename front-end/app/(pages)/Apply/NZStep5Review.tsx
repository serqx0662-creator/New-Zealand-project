"use client";

import React from 'react';
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import { FileText, AlertCircle } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

interface NZStep5Props {
    values: {
        program: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        educationLevel: string;
        language: string;
        files: File[];
    };
    accepted: boolean;
    error?: string;
    onAcceptChange: (checked: boolean) => void;
}

export default function NZStep5Review({ values, accepted, error, onAcceptChange }: NZStep5Props) {
    const { lang } = useLanguage();
    const t = dictionaries[lang].applyPage;

    // Локализованные метки для строк данных
    const infoRows = [
        {
            label: lang === 'ru' ? "Программа" : "Program",
            value: values.program
        },
        {
            label: lang === 'ru' ? "Фамилия" : "Last Name",
            value: values.lastName
        },
        {
            label: lang === 'ru' ? "Имя" : "First Name",
            value: values.firstName
        },
        {
            label: "Email",
            value: values.email
        },
        {
            label: lang === 'ru' ? "Телефон" : "Phone",
            value: values.phone
        },
        {
            label: lang === 'ru' ? "Образование" : "Education",
            value: values.educationLevel
        },
        {
            label: lang === 'ru' ? "Языковой тест" : "Language Test",
            value: values.language
        },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-gray-50/50 rounded-[24px] border border-gray-100 p-8 space-y-4">
                <h3 className="text-lg font-bold text-[#101828] mb-6">
                    {lang === 'ru' ? 'Подтверждение заявки' : 'Application Review'}
                </h3>

                <div className="space-y-3">
                    {infoRows.map((row) => (
                        <div key={row.label} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100 last:border-0">
                            <span className="text-sm font-medium text-gray-400">{row.label}:</span>
                            <span className="text-sm font-bold text-[#101828]">{row.value || "—"}</span>
                        </div>
                    ))}
                </div>

                {values.files.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <span className="text-sm font-medium text-gray-400 block mb-3">
                            {lang === 'ru' ? 'Прикрепленные документы:' : 'Attached documents:'}
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {values.files.map((file, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 text-[10px] font-bold text-[#101828]">
                                    <FileText size={12} />
                                    {file.name}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-3 group cursor-pointer" onClick={() => onAcceptChange(!accepted)}>
                    <Checkbox
                        id="terms"
                        checked={accepted}
                        onCheckedChange={(checked) => onAcceptChange(checked as boolean)}
                        className="mt-1 border-gray-200 data-[state=checked]:bg-black data-[state=checked]:border-black"
                    />
                    <Label
                        htmlFor="terms"
                        className="text-sm font-medium text-gray-500 cursor-pointer leading-relaxed group-hover:text-black transition-colors"
                    >
                        {lang === 'ru'
                            ? 'Я согласен с условиями обработки персональных данных'
                            : 'I agree to the terms of personal data processing'
                        }
                    </Label>
                </div>

                {error && (
                    <div className="flex items-center gap-1.5 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
}