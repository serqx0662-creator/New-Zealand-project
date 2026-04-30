"use client";

import React, { useState, useEffect } from 'react';
import { NZprogramFilters } from "@/app/(pages)/Programs/NZprogram-filters";
import NZProgramCard from "@/app/(pages)/Programs/NZprogram-card";
import { getPrograms } from "@/lib/strapi";
import { ProgramData } from "@/app/(pages)/Programs/[id]/data";

export default function ProgramsPage() {
    const [allPrograms, setAllPrograms] = useState<ProgramData[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const res = await getPrograms();
                setAllPrograms(res.data || []);
            } catch (e) {
                console.error("Ошибка загрузки:", e);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    const filteredPrograms = allPrograms.filter((prog) => {
        const title = prog.title?.toLowerCase() || "";
        const location = prog.location?.toLowerCase() || "";
        const query = searchQuery.toLowerCase();

        return title.includes(query) || location.includes(query);
    });

    if (loading) return <div className="text-center py-40 text-gray-500 font-medium">Загрузка программ...</div>;

    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4 uppercase">
                        Программы обучения
                    </h1>
                    <p className="text-gray-500 text-lg font-medium">
                        Найдите подходящую программу для вашего будущего в Новой Зеландии
                    </p>
                </header>

                <NZprogramFilters onSearch={setSearchQuery}/>

                <div className="mb-8 flex justify-between items-center">
                    <p className="text-gray-400 text-sm font-semibold">
                        НАЙДЕНО ПРОГРАММ: {filteredPrograms.length}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {filteredPrograms.map((program) => (
                        <NZProgramCard key={program.id} program={program} />
                    ))}
                </div>

                {filteredPrograms.length === 0 && (
                    <div className="text-center py-20 text-gray-400 border-2 border-dashed border-gray-100 rounded-[32px] mt-10">
                        По вашему запросу <span className="font-bold text-[#101828]">&quot;{searchQuery}&quot;</span> ничего не найдено
                    </div>
                )}
            </div>
        </main>
    );
}