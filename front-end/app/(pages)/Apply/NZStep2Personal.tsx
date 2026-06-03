"use client";

import React, { useState } from 'react';
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { AlertCircle, ChevronDown } from "lucide-react";
import { PatternFormat } from 'react-number-format';
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";

interface NZStep2Props {
    values: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    };
    errors: Record<string, string>;
    onChange: (fields: Partial<{ firstName: string; lastName: string; email: string; phone: string }>) => void;
}

export default function NZStep2Personal({ values, errors, onChange }: NZStep2Props) {
    const { lang } = useLanguage();
    const t = dictionaries[lang].applyPage;

    const COUNTRIES = [
        { name: lang === 'ru' ? "Кыргызстан" : "Kyrgyzstan", code: "+996", flag: "🇰🇬", mask: "+996 (###) ###-###" },
        { name: lang === 'ru' ? "Казахстан" : "Kazakhstan", code: "+7", flag: "🇰🇿", mask: "+7 (###) ###-####" },
        { name: lang === 'ru' ? "Россия" : "Russia", code: "+7", flag: "🇷🇺", mask: "+7 (###) ###-####" },
        { name: lang === 'ru' ? "Узбекистан" : "Uzbekistan", code: "+998", flag: "🇺🇿", mask: "+998 (##) ###-####" },
        { name: lang === 'ru' ? "Таджикистан" : "Tajikistan", code: "+992", flag: "🇹🇯", mask: "+992 (##) ###-####" },
        { name: lang === 'ru' ? "Новая Зеландия" : "New Zealand", code: "+64", flag: "🇳🇿", mask: "+64 (###) ###-####" },
    ];

    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);

    const inputStyles = "rounded-xl h-14 border-gray-200 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-all placeholder:text-gray-300 text-sm font-medium";
    const errorStyles = "border-red-500 bg-red-50/10 focus:border-red-500";

    const isPhoneActive = values.phone.replace(/\D/g, "").length > selectedCountry.code.replace(/\D/g, "").length;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 animate-in fade-in duration-500">
            {/* Имя */}
            <div className="space-y-2">
                <Label className={`text-sm font-bold ${errors.firstName ? 'text-red-500' : 'text-[#101828]'}`}>
                    {t.placeholders.firstName}
                </Label>
                <Input
                    value={values.firstName}
                    onChange={(e) => onChange({ firstName: e.target.value })}
                    className={`${inputStyles} ${errors.firstName ? errorStyles : ''} ${values.firstName ? 'text-[#101828]' : 'text-gray-400'}`}
                    placeholder={lang === 'ru' ? "Введите имя" : "Enter first name"}
                />
                {errors.firstName && (
                    <div className="flex items-center gap-1.5 mt-1 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{errors.firstName}</p>
                    </div>
                )}
            </div>

            {/* Фамилия */}
            <div className="space-y-2">
                <Label className={`text-sm font-bold ${errors.lastName ? 'text-red-500' : 'text-[#101828]'}`}>
                    {t.placeholders.lastName}
                </Label>
                <Input
                    value={values.lastName}
                    onChange={(e) => onChange({ lastName: e.target.value })}
                    className={`${inputStyles} ${errors.lastName ? errorStyles : ''} ${values.lastName ? 'text-[#101828]' : 'text-gray-400'}`}
                    placeholder={lang === 'ru' ? "Введите фамилию" : "Enter last name"}
                />
                {errors.lastName && (
                    <div className="flex items-center gap-1.5 mt-1 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{errors.lastName}</p>
                    </div>
                )}
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Label className={`text-sm font-bold ${errors.email ? 'text-red-500' : 'text-[#101828]'}`}>
                    Email
                </Label>
                <Input
                    type="email"
                    value={values.email}
                    onChange={(e) => onChange({ email: e.target.value })}
                    className={`${inputStyles} ${errors.email ? errorStyles : ''} ${values.email ? 'text-[#101828]' : 'text-gray-400'}`}
                    placeholder="example@mail.com"
                />
                {errors.email && (
                    <div className="flex items-center gap-1.5 mt-1 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{errors.email}</p>
                    </div>
                )}
            </div>

            {/* Телефон */}
            <div className="space-y-2">
                <Label className={`text-sm font-bold ${errors.phone ? 'text-red-500' : 'text-[#101828]'}`}>
                    {lang === 'ru' ? 'Телефон' : 'Phone number'}
                </Label>

                <div className="flex gap-2">
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <button
                                type="button"
                                className={`flex items-center justify-center gap-2 px-3 h-14 rounded-xl border transition-all focus:outline-none bg-white min-w-[90px] ${errors.phone ? 'border-red-500' : 'border-gray-200 hover:border-black'}`}
                            >
                                <span className="text-xl">{selectedCountry.flag}</span>
                                <ChevronDown size={14} className="text-gray-400" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[220px] rounded-xl p-1 bg-white z-[70] shadow-2xl border-gray-100">
                            {COUNTRIES.map((c) => (
                                <DropdownMenuItem
                                    key={c.name + c.code}
                                    onClick={() => {
                                        setSelectedCountry(c);
                                        onChange({ phone: "" });
                                    }}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
                                >
                                    <span className="text-lg">{c.flag}</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium">{c.name}</span>
                                        <span className="text-[10px] font-bold text-gray-400">{c.code}</span>
                                    </div>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className="flex-1">
                        <PatternFormat
                            format={selectedCountry.mask}
                            mask="_"
                            allowEmptyFormatting
                            customInput={Input}
                            className={`${inputStyles} ${errors.phone ? errorStyles : ''} ${isPhoneActive ? 'text-[#101828]' : 'text-gray-400'}`}
                            value={values.phone}
                            onValueChange={(v) => onChange({ phone: v.formattedValue })}
                        />
                    </div>
                </div>

                {errors.phone && (
                    <div className="flex items-center gap-1.5 mt-1 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{errors.phone}</p>
                    </div>
                )}
            </div>
        </div>
    );
}