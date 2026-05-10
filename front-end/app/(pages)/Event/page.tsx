"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { NZEventCard } from "@/app/(pages)/Event/NZEventCard";
import { Event, StrapiEvent } from "@/app/data/events";

export default function EventPage() {
    const [query, setQuery] = useState("");
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        async function fetchEvents() {
            const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
            try {
                const res = await fetch(`${baseUrl}/api/events?populate=*`);
                const json = await res.json();

                const formatted = json.data.map((item: StrapiEvent): Event => ({
                    id: item.id,
                    documentId: item.documentId,
                    slug: item.slug,
                    title: item.title,
                    date: item.date,
                    location: item.location,
                    address: item.address,
                    description: item.description,
                    type: item.type || "Офлайн",
                    registered: item.registered || 0,
                    totalSlots: item.totalSlots || 0,
                    image: item.image?.url ? `${baseUrl}${item.image.url}` : "/placeholder.png",
                    schedule: item.schedule || []
                }));
                setEvents(formatted);
            } catch (e) {
                console.error(e);
            }
        }
        fetchEvents();
    }, []);

    const filtered = events.filter(e => e.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <section className="max-w-[1440px] mx-auto px-6 pt-32 md:pt-40 pb-20">
            <div className="mb-8 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Мероприятия</h1>
                <p className="text-gray-500 text-sm md:text-lg">Присоединяйтесь к нашим событиям и узнайте больше о возможностях</p>
            </div>

            <div className="relative mb-12 md:mb-16 group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={20} />
                <input
                    type="text"
                    placeholder="Поиск мероприятия..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-14 py-4 border border-gray-200 rounded-xl bg-white text-base outline-none hover:border-gray-300 focus:border-black transition-all"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map(event => <NZEventCard key={event.id} event={event} />)}
            </div>
        </section>
    );
}