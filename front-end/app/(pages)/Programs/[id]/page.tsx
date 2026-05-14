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

const STRAPI_URL = "http://127.0.0.1:1337";

export default function Page({ params }: PageProps) {
    const { id: slug } = React.use(params);
    const { lang } = useLanguage();
    const t = dictionaries[lang].programPage;

    const [program, setProgram] = useState<ProgramData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProgram() {
            if (!slug) return;

            // Важно: не сбрасываем program в null сразу, чтобы не мелькал экран "Не найдено"
            // во время того, как меняется язык. Просто ставим загрузку.
            setLoading(true);

            try {
                const query = new URLSearchParams();
                query.append("filters[slug][$eq]", slug);
                query.append("locale", lang); // Strapi ищет запись именно в этой локали
                query.append("populate[0]", "image");
                query.append("populate[1]", "faq");
                query.append("populate[2]", "campus_details.facilities");

                const url = `${STRAPI_URL}/api/programs?${query.toString()}`;
                const res = await fetch(url);

                if (!res.ok) {
                    setProgram(null);
                    setLoading(false);
                    return;
                }

                const responseData = await res.json();

                // Если программа найдена для текущего языка
                if (responseData.data && responseData.data.length > 0) {
                    setProgram(responseData.data[0]);
                } else {
                    // Если на другом языке программы с таким слагом нет
                    // (Например: в Strapi у русской версии слаг "program-ru", а у англ "program-en")
                    console.warn(`Program with slug ${slug} not found for locale ${lang}`);
                    setProgram(null);
                }
            } catch (error) {
                console.error("Ошибка сети или парсинга");
                setProgram(null);
            } finally {
                setLoading(false);
            }
        }

        loadProgram();
    }, [slug, lang]); // lang обязателен здесь

    if (loading) return <div className="pt-40 text-center text-gray-500">{t.loading}</div>;

    if (!program) {
        return (
            <div className="pt-40 text-center">
                <p className="mb-4 text-gray-500">{t.notFound}</p>
                <Button onClick={() => window.history.back()}>{t.goBack}</Button>
            </div>
        );
    }

    const imageUrl = program.image?.url
        ? (program.image.url.startsWith('http') ? program.image.url : `${STRAPI_URL}${program.image.url}`)
        : "/placeholder.jpg";

    const tabContent = {
        description: program.description || "",
        requirements: (() => {
            const reqs = program.requirements;
            if (Array.isArray(reqs)) return reqs;
            if (typeof reqs === 'string') {
                return (reqs as string).split('\n').filter((l: string) => l.trim() !== "");
            }
            return [];
        })(),

        courses: Array.isArray(program.courses) && program.courses.length > 0
            ? program.courses
            : [t.sections.coursesEmpty || "Information is being updated"],
        yearlyPrice: `$${Number(program.price).toLocaleString('en-US')}`,
        totalPrice: `$${(Number(program.price) * 3).toLocaleString('en-US')}`,
        campus: program.campus_details?.main_text || "",
        campusFacilities: program.campus_details?.facilities || [],
        howToApply: t.sections.applySteps || [
            "1. Заполните онлайн-форму заявки",
            "2. Загрузите необходимые документы",
            "3. Оплатите регистрационный взнос",
            "4. Дождитесь рассмотрения заявки",
            "5. Получите письмо о зачислении"
        ],
        faq: program.faq || []
    };

    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-6">
                <button
                    className="inline-flex items-center gap-2 text-sm text-zinc-600 border border-zinc-200 rounded-xl px-4 py-2 hover:bg-zinc-50 transition-all active:scale-95 mb-8"
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
                        startDate={lang === 'ru' ? "Сентябрь 2026" : "September 2026"}
                        price={`$${Number(program.price).toLocaleString('en-US')}`}
                        rating="4.8 / 5"
                    />
                </div>
            </div>
        </main>
    );
}