"use client";

import React, { useState, useEffect } from 'react';
import { Search } from "lucide-react";
import { NZEventCard } from "@/app/(pages)/Event/NZEventCard";
import { Event, StrapiEvent } from "@/app/data/events";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

export default function EventPage() {
    // Вытаскиваем lang из контекста и берем нужный кусок словаря
    const { lang } = useLanguage();
    const t = dictionaries[lang].events;

    const [events, setEvents] = useState<Event[]>([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        async function fetchEvents() {
            setLoading(true);
            const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
            try {
                // Передаем текущий lang в запрос к Strapi
                const res = await fetch(`${baseUrl}/api/events?locale=${lang}&populate=*`);
                const json = await res.json();

                if (isMounted) {
                    const formatted = (json.data || []).map((item: StrapiEvent): Event => {
                        // 1. Определяем ключ и приводим к типу ключей нашего словаря
                        const rawType = (item.type?.toLowerCase() === "online" ? "online" : "offline") as keyof typeof t.types;

                        return {
                            id: item.id,
                            documentId: item.documentId,
                            slug: item.slug,
                            title: item.title,
                            date: item.date,
                            location: item.location,
                            address: item.address,
                            description: item.description,
                            type: (t.types[rawType] || item.type) as "Офлайн" | "Онлайн",
                            registered: item.registered || 0,
                            totalSlots: item.totalSlots || 0,
                            image: item.image?.url
                                ? (item.image.url.startsWith("http") ? item.image.url : `${baseUrl}${item.image.url}`)
                                : "/placeholder.png",
                            schedule: item.schedule || []
                        };
                    });
                    setEvents(formatted);
                }
            } catch (e) {
                console.error("Ошибка загрузки мероприятий:", e);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchEvents();

        return () => { isMounted = false; };
    }, [lang, t.types]);

    const filtered = events.filter(e =>
        e.title.toLowerCase().includes(query.toLowerCase())
    );

    if (loading) return <div className="text-center py-40 text-gray-500 font-medium">{t.loading}</div>;

    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <header className="mb-10 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4 uppercase">
                        {t.title}
                    </h1>
                    <p className="text-gray-500 text-lg font-medium">
                        {t.description}
                    </p>
                </header>

                <div className="relative mb-12 md:mb-16 group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder={t.searchPlaceholder}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full px-14 py-4 border border-gray-200 rounded-xl bg-white text-base outline-none hover:border-gray-300 focus:border-black transition-all"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {filtered.map(event => (
                        <NZEventCard key={event.id} event={event} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-gray-400 border-2 border-dashed border-gray-100 rounded-[32px] mt-10">
                        {t.notFound} <span className="font-bold text-[#101828]">&quot;{query}&quot;</span>
                    </div>
                )}
            </div>
        </main>
    );
}