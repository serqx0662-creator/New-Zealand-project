"use client";

import React from 'react';
import { Label } from "@/app/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { ChevronDown, AlertCircle } from "lucide-react";

interface NZStep3Props {
    values: {
        educationLevel: string;
        language: string;
    };
    errors: Record<string, string>;
    onChange: (fields: Partial<{ educationLevel: string; language: string }>) => void;
}

export default function NZStep3Education({ values, errors, onChange }: NZStep3Props) {
    const educationOptions = ["Среднее образование", "Высшее образование", "Магистратура"];
    const languageOptions = ["IELTS", "TOEFL", "PTE", "Duolingo"];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-[10px]">
                <Label className={`text-sm font-bold transition-colors ${errors.educationLevel ? 'text-red-500' : 'text-[#101828]'}`}>
                    Образование
                </Label>
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild className="group">
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full px-4 h-14 rounded-xl border transition-all focus:outline-none
                                ${errors.educationLevel ? 'border-red-500 bg-red-50/10' : 'border-gray-200 hover:border-black data-[state=open]:border-black'}
                                ${values.educationLevel ? 'text-[#101828]' : 'text-gray-400'}
                            `}
                        >
                            <span className="text-sm font-medium">{values.educationLevel || "Выберите уровень образования"}</span>
                            <ChevronDown size={20} className={`transition-transform duration-300 group-data-[state=open]:rotate-180 ${errors.educationLevel ? 'text-red-400' : 'text-gray-400'}`} />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[--radix-dropdown-menu-trigger-width] rounded-2xl border-gray-100 shadow-2xl p-2 bg-white z-[60]">
                        {educationOptions.map((opt) => (
                            <DropdownMenuItem
                                key={opt}
                                onClick={() => onChange({ educationLevel: opt })}
                                className="rounded-xl cursor-pointer py-3 px-4 text-sm focus:bg-gray-50 mb-1 last:mb-0"
                            >
                                {opt}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                {errors.educationLevel && (
                    <div className="flex items-center gap-1.5 mt-2 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{errors.educationLevel}</p>
                    </div>
                )}
            </div>

            <div className="space-y-[10px]">
                <Label className={`text-sm font-bold transition-colors ${errors.language ? 'text-red-500' : 'text-[#101828]'}`}>
                    Языковой тест
                </Label>
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild className="group">
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full px-4 h-14 rounded-xl border transition-all focus:outline-none
                                ${errors.language ? 'border-red-500 bg-red-50/10' : 'border-gray-200 hover:border-black data-[state=open]:border-black'}
                                ${values.language ? 'text-[#101828]' : 'text-gray-400'}
                            `}
                        >
                            <span className="text-sm font-medium">{values.language || "Выберите язык"}</span>
                            <ChevronDown size={20} className={`transition-transform duration-300 group-data-[state=open]:rotate-180 ${errors.language ? 'text-red-400' : 'text-gray-400'}`} />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[--radix-dropdown-menu-trigger-width] rounded-2xl border-gray-100 shadow-2xl p-2 bg-white z-[60]">
                        {languageOptions.map((lang) => (
                            <DropdownMenuItem
                                key={lang}
                                onClick={() => onChange({ language: lang })}
                                className="rounded-xl cursor-pointer py-3 px-4 text-sm focus:bg-gray-50 mb-1 last:mb-0"
                            >
                                {lang}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                {errors.language && (
                    <div className="flex items-center gap-1.5 mt-2 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{errors.language}</p>
                    </div>
                )}
            </div>
        </div>
    );
}