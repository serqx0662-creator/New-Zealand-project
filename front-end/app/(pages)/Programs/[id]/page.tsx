"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import { NZProgramHero } from "./NZProgramHero";
import { NZProgramTabs } from "./NZProgramTabs";
import { NZProgramSidebar } from "./NZProgramSidebar";
import { ProgramData } from "@/app/(pages)/Programs/[id]/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

interface PageProps {
    params: Promise<{ id: string }>;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

export default function Page({ params }: PageProps) {
    const { id: routeId } = React.use(params);
    const { lang } = useLanguage();
    const t = dictionaries[lang].programPage;

    const [program, setProgram] = useState<ProgramData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!routeId) return;

        async function loadProgram() {
            setLoading(true);
            setProgram(null);

            try {

                const isDocumentId = routeId.length >= 20 && !routeId.includes("-");

                const params = new URLSearchParams({
                    locale: lang,
                    "populate[0]": "image",
                    "populate[1]": "faq",
                    "populate[2]": "campus_details",
                    "populate[3]": "campus_details.facilities",
                });

                if (isDocumentId) {
                    params.append("filters[documentId][$eq]", routeId);
                } else {
                    params.append("filters[slug][$eq]", routeId);
                }

                const url = `${STRAPI_URL}/api/programs?${params.toString()}`;
                console.log("📡 Fetching program:", url);

                const res = await fetch(url, { cache: "no-store" });

                if (!res.ok) {
                    console.error(`❌ Strapi error: ${res.status} ${res.statusText}`);
                    setProgram(null);
                    return;
                }

                const json = await res.json();
                console.log("📦 Strapi response:", json);

                if (json.data && json.data.length > 0) {
                    setProgram(json.data[0]);
                } else {

                    console.warn(`⚠️ No ${lang} variant found, trying without locale...`);

                    const fallbackParams = new URLSearchParams({
                        "populate[0]": "image",
                        "populate[1]": "faq",
                        "populate[2]": "campus_details",
                        "populate[3]": "campus_details.facilities",
                    });

                    if (isDocumentId) {
                        fallbackParams.append("filters[documentId][$eq]", routeId);
                    } else {
                        fallbackParams.append("filters[slug][$eq]", routeId);
                    }

                    const fallbackRes = await fetch(
                        `${STRAPI_URL}/api/programs?${fallbackParams.toString()}`,
                        { cache: "no-store" }
                    );

                    if (fallbackRes.ok) {
                        const fallbackJson = await fallbackRes.json();
                        if (fallbackJson.data && fallbackJson.data.length > 0) {
                            console.warn("⚠️ Showing fallback locale content");
                            setProgram(fallbackJson.data[0]);
                        } else {
                            setProgram(null);
                        }
                    } else {
                        setProgram(null);
                    }
                }
            } catch (error) {
                console.error("🚨 Network/parse error:", error);
                setProgram(null);
            } finally {
                setLoading(false);
            }
        }

        loadProgram();
    }, [routeId, lang]);

    if (loading) {
        return <div className="pt-40 text-center text-gray-500">{t.loading}</div>;
    }

    if (!program) {
        return (
            <div className="pt-40 text-center">
                <p className="mb-4 text-gray-500">{t.notFound}</p>
                <Button onClick={() => window.history.back()}>{t.goBack}</Button>
            </div>
        );
    }

    const imageUrl = program.image?.url
        ? (program.image.url.startsWith("http")
            ? program.image.url
            : `${STRAPI_URL}${program.image.url}`)
        : "/placeholder.jpg";

    const requirements = (() => {
        const reqs = program.requirements;
        if (Array.isArray(reqs)) return reqs;
        if (typeof reqs === "string") return reqs.split("\n").filter((l: string) => l.trim() !== "");
        return [];
    })();

    const tabContent = {
        description: program.description || "",
        requirements,
        courses: Array.isArray(program.courses) && program.courses.length > 0
            ? program.courses
            : [t.sections.coursesEmpty],
        yearlyPrice: `$${program.price ? Number(program.price).toLocaleString("en-US") : "0"}`,
        totalPrice:  `$${program.price ? (Number(program.price) * 3).toLocaleString("en-US") : "0"}`,
        campus: program.campus_details?.main_text || "",
        campusFacilities: program.campus_details?.facilities || [],
        howToApply: [...t.sections.applySteps],
        faq: program.faq || [],
    };

    const startDate = lang === "ru" ? "Сентябрь 2026" : "September 2026";

    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-6">
                <button
                    className="inline-flex items-center gap-2 text-sm text-zinc-600 border border-gray-300 rounded-md px-4 py-2 hover:bg-zinc-50 transition-all active:scale-95 mb-8"
                    onClick={() => window.history.back()}
                >
                    <ArrowLeft size={18} /> {t.back}
                </button>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="w-full lg:flex-grow lg:max-w-[65%]">
                        <NZProgramHero
                            src={imageUrl}
                            title={program.title}
                            location={program.location}
                        />
                        <NZProgramTabs content={tabContent} />
                    </div>

                    <NZProgramSidebar
                        duration={program.duration}
                        startDate={startDate}
                        price={`$${program.price ? Number(program.price).toLocaleString("en-US") : "0"}`}
                        rating="4.8 / 5"
                    />
                </div>
            </div>
        </main>
    );
}