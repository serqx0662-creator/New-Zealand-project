"use client";

import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, X } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu";

const inputStyles = "rounded-xl h-11 border-gray-200 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors bg-white text-xs";

export interface FilterState {
    search: string;
    country: string;
    level: string;
    direction: string;
    sort: string;
    scholarshipOnly: boolean;
}


const COUNTRY_OPTIONS = [
    { key: "new-zealand", ru: "Новая Зеландия",  en: "New Zealand" },
    { key: "australia",   ru: "Австралия",        en: "Australia" },
    { key: "canada",      ru: "Канада",           en: "Canada" },
];

const LEVEL_OPTIONS = [
    { key: "undergraduate", ru: "Бакалавриат",      en: "Bachelor's" },
    { key: "postgraduate",  ru: "Магистратура",     en: "Master's" },
    { key: "language",      ru: "Языковые курсы",   en: "Language Courses" },
];

const DIRECTION_OPTIONS = [
    { key: "business", ru: "Бизнес",   en: "Business" },
    { key: "it",       ru: "IT",       en: "IT" },
    { key: "design",   ru: "Дизайн",  en: "Design" },
    { key: "medicine", ru: "Медицина", en: "Medicine" },
];

const SORT_OPTIONS = [
    { key: "popularity", ru: "По популярности",          en: "By popularity" },
    { key: "price-asc",  ru: "Цена: по возрастанию",     en: "Price: low to high" },
    { key: "price-desc", ru: "Цена: по убыванию",        en: "Price: high to low" },
];


interface NZprogramFiltersProps {
    onFilterChange: (filters: FilterState) => void;
}

export function NZprogramFilters({ onFilterChange }: NZprogramFiltersProps) {
    const { lang } = useLanguage();
    const t = dictionaries[lang].filters;

    const [searchTerm, setSearchTerm]       = useState("");
    const [country, setCountry]             = useState("");
    const [level, setLevel]                 = useState("");
    const [direction, setDirection]         = useState("");
    const [sort, setSort]                   = useState("");
    const [scholarshipOnly, setScholarship] = useState(false);

    useEffect(() => {
        onFilterChange({ search: searchTerm, country, level, direction, sort, scholarshipOnly });
    }, [searchTerm, country, level, direction, sort, scholarshipOnly, onFilterChange]);


    const getLabel = (
        options: typeof COUNTRY_OPTIONS,
        key: string,
        placeholder: string
    ) => {
        if (!key) return placeholder;
        const opt = options.find(o => o.key === key);
        return opt ? opt[lang] : placeholder;
    };

    return (
        <div className="border border-[#DDE0E7] rounded-[12px] p-6 mb-8 shadow-xs bg-white">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-1.5 bg-gray-50 rounded-lg">
                    <Search size={18} className="text-gray-600" />
                </div>
                <span className="font-bold text-[#101828]">{t.title}</span>
            </div>

            <div className="space-y-6">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`${inputStyles} pl-11 h-12 text-sm placeholder:text-gray-400 pr-10`}
                        placeholder={t.searchPlaceholder}
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <FilterDropdown
                        label={t.labels.country}
                        displayValue={getLabel(COUNTRY_OPTIONS, country, t.placeholders.allCountries)}
                        hasValue={!!country}
                        onClear={() => setCountry("")}
                    >
                        <DropdownMenuItem
                            onClick={() => setCountry("")}
                            className="rounded-lg cursor-pointer py-2.5 px-3 text-xs focus:bg-gray-50 text-gray-500"
                        >
                            {t.placeholders.allCountries}
                        </DropdownMenuItem>
                        {COUNTRY_OPTIONS.map(opt => (
                            <DropdownMenuItem
                                key={opt.key}
                                onClick={() => setCountry(opt.key)}
                                className="rounded-lg cursor-pointer py-2.5 px-3 text-xs focus:bg-gray-50 focus:text-black outline-none"
                            >
                                {opt[lang]}
                            </DropdownMenuItem>
                        ))}
                    </FilterDropdown>

                    <FilterDropdown
                        label={t.labels.level}
                        displayValue={getLabel(LEVEL_OPTIONS, level, t.placeholders.allLevels)}
                        hasValue={!!level}
                        onClear={() => setLevel("")}
                    >
                        <DropdownMenuItem
                            onClick={() => setLevel("")}
                            className="rounded-lg cursor-pointer py-2.5 px-3 text-xs focus:bg-gray-50 text-gray-500"
                        >
                            {t.placeholders.allLevels}
                        </DropdownMenuItem>
                        {LEVEL_OPTIONS.map(opt => (
                            <DropdownMenuItem
                                key={opt.key}
                                onClick={() => setLevel(opt.key)}
                                className="rounded-lg cursor-pointer py-2.5 px-3 text-xs focus:bg-gray-50 focus:text-black outline-none"
                            >
                                {opt[lang]}
                            </DropdownMenuItem>
                        ))}
                    </FilterDropdown>

                    <FilterDropdown
                        label={t.labels.direction}
                        displayValue={getLabel(DIRECTION_OPTIONS, direction, t.placeholders.allDirections)}
                        hasValue={!!direction}
                        onClear={() => setDirection("")}
                    >
                        <DropdownMenuItem
                            onClick={() => setDirection("")}
                            className="rounded-lg cursor-pointer py-2.5 px-3 text-xs focus:bg-gray-50 text-gray-500"
                        >
                            {t.placeholders.allDirections}
                        </DropdownMenuItem>
                        {DIRECTION_OPTIONS.map(opt => (
                            <DropdownMenuItem
                                key={opt.key}
                                onClick={() => setDirection(opt.key)}
                                className="rounded-lg cursor-pointer py-2.5 px-3 text-xs focus:bg-gray-50 focus:text-black outline-none"
                            >
                                {opt[lang]}
                            </DropdownMenuItem>
                        ))}
                    </FilterDropdown>

                    <FilterDropdown
                        label={t.labels.sort}
                        displayValue={getLabel(SORT_OPTIONS, sort, t.placeholders.popularity)}
                        hasValue={!!sort}
                        onClear={() => setSort("")}
                    >
                        <DropdownMenuItem
                            onClick={() => setSort("")}
                            className="rounded-lg cursor-pointer py-2.5 px-3 text-xs focus:bg-gray-50 text-gray-500"
                        >
                            {t.placeholders.popularity}
                        </DropdownMenuItem>
                        {SORT_OPTIONS.map(opt => (
                            <DropdownMenuItem
                                key={opt.key}
                                onClick={() => setSort(opt.key)}
                                className="rounded-lg cursor-pointer py-2.5 px-3 text-xs focus:bg-gray-50 focus:text-black outline-none"
                            >
                                {opt[lang]}
                            </DropdownMenuItem>
                        ))}
                    </FilterDropdown>
                </div>

                <div className="flex items-center space-x-3 pt-2">
                    <Checkbox
                        id="scholarship"
                        checked={scholarshipOnly}
                        onCheckedChange={(checked) => setScholarship(!!checked)}
                        className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black"
                    />
                    <Label htmlFor="scholarship" className="text-sm text-gray-500 font-medium cursor-pointer select-none">
                        {t.scholarshipOnly}
                    </Label>
                </div>
            </div>
        </div>
    );
}


interface FilterDropdownProps {
    label: string;
    displayValue: string;
    hasValue: boolean;
    onClear: () => void;
    children: React.ReactNode;
}

function FilterDropdown({ label, displayValue, hasValue, onClear, children }: FilterDropdownProps) {
    return (
        <div className="space-y-2">
            <Label className="text-[12px] font-bold text-[#101828] ml-1">{label}</Label>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild className="group">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full px-4 h-12 rounded-xl border border-gray-200 bg-white text-xs text-gray-500 hover:border-black focus:outline-none transition-all data-[state=open]:border-black"
                    >
                        <span className={hasValue ? "text-[#101828] font-medium truncate" : "truncate"}>
                            {displayValue}
                        </span>
                        <ChevronDown
                            size={16}
                            className="text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0 ml-2"
                        />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="start"
                    className="min-w-[200px] w-[--radix-dropdown-menu-trigger-width] rounded-xl border-gray-100 shadow-xl p-1 bg-white z-50"
                >
                    {children}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}