import { Search } from "lucide-react";
import {NZEventCard} from "@/app/(pages)/Event/NZEventCard";
import {EVENTS_DATA} from "@/app/data/events";

export default function EventPage() {
    return (
        <section className="max-w-[1440px] mx-auto px-6 pt-40 pb-20">
            <div className="mb-4">
                <h1 className="text-5xl font-bold mb-4">Мероприятия</h1>
                <p className="text-gray-500 text-lg">Присоединяйтесь к нашим событиям и узнайте больше о возможностях</p>
            </div>

            <div className="relative mb-16">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                <input
                    type="text"
                    placeholder="Поиск по названию программы или университета..."
                    className="w-full px-14  py-3 border border-gray-200 rounded-[14px]      bg-white text-lg outline-none focus:ring-2 focus:ring-gray-100 transition-all"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {EVENTS_DATA.map(event => <NZEventCard key={event.id} event={event} />)}
            </div>
        </section>
    );
}