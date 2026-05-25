"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { NZprogramFilters, FilterState } from "@/app/(pages)/Programs/NZprogram-filters";
import NZProgramCard from "@/app/(pages)/Programs/NZprogram-card";
import { getPrograms } from "@/lib/strapi";
import { ProgramData } from "@/app/(pages)/Programs/[id]/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

interface ExtendedProgramData extends ProgramData {
    country?: string;
    level?: string;
    direction?: string;
    hasScholarship?: boolean;
    popularity?: number;
}

const COUNTRY_MATCHERS: Record<string, string[]> = {
    "new-zealand": ["new zealand", "новая зеландия", "zealand"],
    "australia":   ["australia",   "австралия"],
    "canada":      ["canada",      "канада"],
};

const LEVEL_MATCHERS: Record<string, string[]> = {
    "undergraduate": ["undergraduate", "bachelor", "бакалавр"],
    "postgraduate":  ["postgraduate",  "master",   "магистр", "graduate"],
    "language":      ["language",      "языков"],
};

const DIRECTION_MATCHERS: Record<string, string[]> = {
    "business": ["business", "бизнес"],
    "it":       ["it", "информационн"],
    "design":   ["design",   "дизайн"],
    "medicine": ["medicine", "медицин"],
};

function matchesAny(value: string, matchers: string[]): boolean {
    const v = value.toLowerCase();
    return matchers.some(m => v.includes(m));
}

export default function ProgramsPage() {
    const { lang } = useLanguage();
    const t = dictionaries[lang].programs;

    const [allPrograms, setAllPrograms] = useState<ExtendedProgramData[]>([]);
    const [loading, setLoading] = useState(true);

    const [activeFilters, setActiveFilters] = useState<FilterState>({
        search: "",
        country: "",
        level: "",
        direction: "",
        sort: "",
        scholarshipOnly: false,
    });

    useEffect(() => {
        let isMounted = true;

        async function loadData() {
            setLoading(true);
            try {
                const res = await getPrograms(lang);
                if (isMounted) setAllPrograms(res.data || []);
            } catch (e) {
                console.error("Load error:", e);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadData();
        return () => { isMounted = false; };
    }, [lang]);

    const handleFilterChange = useCallback((newFilters: FilterState) => {
        setActiveFilters(newFilters);
    }, []);

    const filteredPrograms = useMemo(() => {
        let result = [...allPrograms];

        if (activeFilters.search.trim()) {
            const q = activeFilters.search.toLowerCase();
            result = result.filter(p =>
                p.title?.toLowerCase().includes(q) ||
                p.location?.toLowerCase().includes(q)
            );
        }

        if (activeFilters.country) {
            const matchers = COUNTRY_MATCHERS[activeFilters.country] ?? [];
            result = result.filter(p => {
                const country  = p.country  || "";
                const location = p.location || "";
                return matchesAny(country, matchers) || matchesAny(location, matchers);
            });
        }

        if (activeFilters.level) {
            const matchers = LEVEL_MATCHERS[activeFilters.level] ?? [];
            result = result.filter(p => {
                const level = p.level || "";
                const title = p.title || "";
                return matchesAny(level, matchers) || matchesAny(title, matchers);
            });
        }

        if (activeFilters.direction) {
            const matchers = DIRECTION_MATCHERS[activeFilters.direction] ?? [];
            result = result.filter(p => {
                const dir   = p.direction || "";
                const title = p.title     || "";
                return matchesAny(dir, matchers) || matchesAny(title, matchers);
            });
        }

        if (activeFilters.scholarshipOnly) {
            result = result.filter(p => p.hasScholarship === true);
        }

        if (activeFilters.sort === "popularity") {
            result.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        } else if (activeFilters.sort === "price-asc") {
            result.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
        } else if (activeFilters.sort === "price-desc") {
            result.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
        }

        return result;
    }, [allPrograms, activeFilters]);

    if (loading) {
        return <div className="text-center py-40 text-gray-500 font-medium">{t.loading}</div>;
    }

    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4 uppercase">
                        {t.title}
                    </h1>
                    <p className="text-gray-500 text-lg font-medium">
                        {t.description}
                    </p>
                </header>

                <NZprogramFilters onFilterChange={handleFilterChange} />

                <div className="mb-8 flex justify-between items-center">
                    <p className="text-gray-400 text-sm font-semibold uppercase">
                        {t.found}: {filteredPrograms.length}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {filteredPrograms.map((program) => (
                        <NZProgramCard key={program.id} program={program} />
                    ))}
                </div>

                {filteredPrograms.length === 0 && (
                    <div className="text-center py-20 text-gray-400 border-2 border-dashed border-gray-100 rounded-[32px] mt-10">
                        {t.notFound}{" "}
                        {activeFilters.search && (
                            <span className="font-bold text-[#101828]">
                                &quot;{activeFilters.search}&quot;
                            </span>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}