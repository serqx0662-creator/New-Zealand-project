"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { Calendar, MapPin, Users } from "lucide-react";
import { NZEventSchedule } from "./nz-event-schedule";
import { NZRegistrationForm } from "./NZRegistrationForm";
import { Event, StrapiEvent } from "@/app/data/events";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

interface InfoCardProps {
    icon: React.ReactNode;
    label: string;
    title: string;
    subTitle: string;
}

const InfoCard = ({ icon, label, title, subTitle }: InfoCardProps) => (
    <div className="p-4 border border-gray-200 rounded-xl bg-white hover:border-zinc-300 transition-colors">
        <div className="text-zinc-400 mb-4 flex items-center gap-2">
            {icon}
            <span className="text-xs font-bold uppercase tracking-[0.1em]">{label}</span>
        </div>
        <div className="text-lg font-bold text-zinc-900 mb-1">{title}</div>
        <div className="text-sm text-zinc-500">{subTitle}</div>
    </div>
);

export default function EventSinglePage() {
    const params = useParams();
    const id = params?.id as string;

    // Подключаем наш контекст
    const { lang } = useLanguage();
    const t = dictionaries[lang].events;

    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);

    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

    useEffect(() => {
        let isMounted = true;

        const fetchEvent = async () => {
            try {
                // Добавляем параметр locale=${lang}
                const res = await fetch(`${baseUrl}/api/events?filters[slug][$eq]=${id}&locale=${lang}&populate=*`);
                const json = await res.json();

                if (isMounted && json.data && json.data.length > 0) {
                    const raw: StrapiEvent = json.data[0];

                    // Определяем ключ типа
                    const rawTypeKey = raw.type?.toLowerCase() === "online" ? "online" : "offline";

                    setEvent({
                        id: raw.id,
                        documentId: raw.documentId,
                        slug: raw.slug,
                        title: raw.title,
                        date: raw.date,
                        location: raw.location,
                        address: raw.address,
                        description: raw.description,
                        // Используем перевод типа из словаря
                        type: (t.types[rawTypeKey as keyof typeof t.types] || raw.type) as "Офлайн" | "Онлайн",
                        registered: raw.registered || 0,
                        totalSlots: raw.totalSlots || 0,
                        image: raw.image?.url ? `${baseUrl}${raw.image.url}` : "/placeholder.png",
                        schedule: raw.schedule || []
                    });
                }
            } catch (e) {
                console.error("Fetch error:", e);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        if (id) {
            fetchEvent();
        }

        return () => {
            isMounted = false;
        };
    }, [id, baseUrl, lang, t.types]);


    if (loading) return <div className="pt-40 text-center text-zinc-500">{t.loading}</div>;
    if (!event) return notFound();

    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-32 md:pt-40 pb-12 text-zinc-900">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
                <div className="lg:w-1/2">
                    <div className="rounded-2xl overflow-hidden h-[250px] md:h-[400px] shadow-sm">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{event.title}</h1>
                    <div className="flex items-center gap-3 text-zinc-500 text-lg md:text-xl mb-6">
                        <Calendar size={22} className="text-zinc-400" />
                        <span>{event.date}</span>
                    </div>
                    <p className="text-zinc-500 leading-relaxed mb-8 text-base md:text-lg">{event.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InfoCard
                            icon={<MapPin size={18} />}
                            label={t.info.location} // "Место" / "Location"
                            title={event.location}
                            subTitle={event.address}
                        />
                        <InfoCard
                            icon={<Users size={18} />}
                            label={t.info.slots} // "Места" / "Availability"
                            title={`${t.info.free}: ${event.totalSlots - event.registered}`} // "Свободно" / "Free"
                            subTitle={`${t.info.registered}: ${event.registered}/${event.totalSlots}`} // "Зарегистрировано" / "Registered"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                    {/* Передаем заголовок расписания из словаря внутрь компонента (или импортируем там) */}
                    <NZEventSchedule schedule={event.schedule} title={t.programTitle} />
                </div>
                <aside className="lg:w-1/3">
                    <div className="sticky top-28">
                        <NZRegistrationForm
                            documentId={event.documentId}
                            currentRegistered={event.registered}
                            onRegisterSuccess={(newCount) => setEvent({ ...event, registered: newCount })}
                        />
                    </div>
                </aside>
            </div>
        </div>
    );
}