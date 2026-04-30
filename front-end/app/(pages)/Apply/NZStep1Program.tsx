"use client";

import React from 'react';
import { Label } from "@/app/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { ChevronDown, AlertCircle } from "lucide-react";

interface NZStep1Props {
    value: string;
    error?: string;
    onChange: (value: string) => void;
}

export default function NZStep1Program({ value, error, onChange }: NZStep1Props) {
    const programs = [
        "Бакалавриат по Бизнесу",
        "Магистратура IT",
        "Дизайн и медиа",
        "Инженерное дело"
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-[10px]">
                <Label className={`text-sm font-bold transition-colors ${error ? 'text-red-500' : 'text-[#101828]'}`}>
                    Выберите программу
                </Label>

                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full px-4 h-14 rounded-xl border transition-all focus:outline-none
                                ${error ? 'border-red-500 bg-red-50/10' : 'border-gray-200 hover:border-black data-[state=open]:border-black'}
                                ${value ? 'text-[#101828]' : 'text-gray-400'}
                            `}
                        >
                            <span className="text-sm font-medium">
                                {value || "Программа не выбрана"}
                            </span>
                            <ChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${error ? 'text-red-400' : 'text-gray-400'}`}
                            />
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="start"
                        className="w-[--radix-dropdown-menu-trigger-width] rounded-2xl border-gray-100 shadow-2xl p-2 bg-white z-[60]"
                    >
                        {programs.map((program) => (
                            <DropdownMenuItem
                                key={program}
                                onClick={() => onChange(program)}
                                className="rounded-xl cursor-pointer py-3 px-4 text-sm focus:bg-gray-50 mb-1"
                            >
                                {program}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {error && (
                    <div className="flex items-center gap-2 mt-2 animate-in slide-in-from-top-1 duration-300">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
}