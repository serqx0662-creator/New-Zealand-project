"use client";

import React from 'react';
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { AlertCircle } from "lucide-react";
import { PatternFormat } from 'react-number-format';

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
    const inputStyles = "rounded-xl h-14 border-gray-200 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-all placeholder:text-gray-300 text-sm font-medium";
    const errorStyles = "border-red-500 bg-red-50/10 focus:border-red-500";

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 animate-in fade-in duration-500">
            <div className="space-y-2">
                <Label className={`text-sm font-bold ${errors.firstName ? 'text-red-500' : 'text-[#101828]'}`}>
                    Имя
                </Label>
                <Input
                    value={values.firstName}
                    onChange={(e) => onChange({ firstName: e.target.value })}
                    className={`${inputStyles} ${errors.firstName ? errorStyles : ''}`}
                    placeholder="Введите имя"
                />
                {errors.firstName && (
                    <div className="flex items-center gap-1.5 mt-1 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{errors.firstName}</p>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <Label className={`text-sm font-bold ${errors.lastName ? 'text-red-500' : 'text-[#101828]'}`}>
                    Фамилия
                </Label>
                <Input
                    value={values.lastName}
                    onChange={(e) => onChange({ lastName: e.target.value })}
                    className={`${inputStyles} ${errors.lastName ? errorStyles : ''}`}
                    placeholder="Введите фамилию"
                />
                {errors.lastName && (
                    <div className="flex items-center gap-1.5 mt-1 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{errors.lastName}</p>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <Label className={`text-sm font-bold ${errors.email ? 'text-red-500' : 'text-[#101828]'}`}>
                    Email
                </Label>
                <Input
                    type="email"
                    value={values.email}
                    onChange={(e) => onChange({ email: e.target.value })}
                    className={`${inputStyles} ${errors.email ? errorStyles : ''}`}
                    placeholder="example@mail.com"
                />
                {errors.email && (
                    <div className="flex items-center gap-1.5 mt-1 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{errors.email}</p>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <Label className={`text-sm font-bold ${errors.phone ? 'text-red-500' : 'text-[#101828]'}`}>
                    Телефон
                </Label>
                <PatternFormat
                    format="+7 (###) ###-##-##"
                    mask="_"
                    customInput={Input}
                    className={`${inputStyles} ${errors.phone ? errorStyles : ''}`}
                    placeholder="+7 (___) ___-__-__"
                    value={values.phone}
                    onValueChange={(v) => {
                        onChange({ phone: v.value });
                    }}
                />
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