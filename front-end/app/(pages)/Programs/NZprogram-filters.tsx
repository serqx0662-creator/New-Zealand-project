"use client";

import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, X } from "lucide-react"; // Добавил X для очистки
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu";

const inputStyles = "rounded-xl h-11 border-gray-200 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors bg-white text-xs";

export function NZprogramFilters({ onSearch }: { onSearch?: (value: string) => void }) {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (onSearch) {
            onSearch(searchTerm);
        }
    }, [searchTerm, onSearch]);

    return (
        <div className="border border-[#DDE0E7] rounded-[12px] p-6 mb-8 shadow-xs bg-white">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-1.5 bg-gray-50 rounded-lg">
                    <Search size={18} className="text-gray-600" />
                </div>
                <span className="font-bold text-[#101828]">Фильтры и поиск</span>
            </div>

            <div className="space-y-6">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`${inputStyles} pl-11 h-12 text-sm placeholder:text-gray-400 pr-10`}
                        placeholder="Поиск по названию программы или университета..."
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
                    <FilterDropdown label="Страна" placeholder="Все страны" options={["Новая Зеландия", "Австралия", "Канада"]} />
                    <FilterDropdown label="Уровень" placeholder="Все уровни" options={["Бакалавриат", "Магистратура", "Языковые курсы"]} />
                    <FilterDropdown label="Направление" placeholder="Все направления" options={["Бизнес", "IT", "Дизайн", "Медицина"]} />
                    <FilterDropdown label="Сортировка" placeholder="По популярности" options={["Сначала новые", "Цена: по возрастанию", "Цена: по убыванию"]} />
                </div>

                <div className="flex items-center space-x-3 pt-2">
                    <Checkbox id="scholarship" className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black" />
                    <Label htmlFor="scholarship" className="text-sm text-gray-500 font-medium cursor-pointer select-none">
                        Только программы со стипендией
                    </Label>
                </div>
            </div>
        </div>
    );
}

function FilterDropdown({ label, placeholder, options }: { label: string; placeholder: string, options: string[] }) {
    const [selected, setSelected] = useState("");

    return (
        <div className="space-y-2">
            <Label className="text-[12px] font-bold text-[#101828] ml-1">{label}</Label>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild className="group">
                    <button type="button" className="flex items-center justify-between w-full px-4 h-12 rounded-xl border border-gray-200 bg-white text-xs text-gray-500 hover:border-black focus:outline-none transition-all data-[state=open]:border-black">
                        <span className={selected ? "text-[#101828] font-medium" : ""}>
                            {selected || placeholder}
                        </span>
                        <ChevronDown
                            size={16}
                            className="text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180"
                        />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="start"
                    className="min-w-[200px] w-[--radix-dropdown-menu-trigger-width] rounded-xl border-gray-100 shadow-xl p-1 bg-white z-50"
                >
                    <DropdownMenuItem
                        onClick={() => setSelected("")}
                        className="rounded-lg cursor-pointer py-2.5 px-3 text-xs focus:bg-gray-50 text-gray-500"
                    >
                        {placeholder}
                    </DropdownMenuItem>
                    {options.map((option) => (
                        <DropdownMenuItem
                            key={option}
                            onClick={() => setSelected(option)}
                            className="rounded-lg cursor-pointer py-2.5 px-3 text-xs focus:bg-gray-50 focus:text-black outline-none"
                        >
                            {option}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}