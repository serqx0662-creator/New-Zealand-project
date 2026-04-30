import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { Event } from "@/app/data/events";

export const NZEventCard = ({ event }: { event: Event }) => {
    return (
        <div className="group relative border border-gray-100 rounded-[14px] overflow-hidden hover:shadow-md transition-shadow bg-white flex flex-col h-full">
            <Link href={`/Event/${event.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">Перейти к {event.title}</span>
            </Link>

            <div className="relative h-[240px] shrink-0 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-semibold z-20">
                    {event.type}
                </span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 line-clamp-1 group-hover:text-black transition-colors">
                    {event.title}
                </h3>

                <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={16} /> <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={16} />
                        <span className="line-clamp-1">{event.location}, {event.address}</span>
                    </div>
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                        {event.description}
                    </p>
                </div>

                <div className="flex items-center justify-between mb-6 pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <Users size={16} className="text-gray-400" />
                        <span>{event.registered}/{event.totalSlots}</span>
                    </div>
                    <span className="text-gray-400 text-sm">Осталось: {event.totalSlots - event.registered}</span>
                </div>

                <Link
                    href="/Apply"
                    className="relative z-20 block w-full py-3 border border-gray-200 rounded-md text-center font-bold hover:bg-gray-100 transition-all active:scale-[0.98] bg-white"
                >
                    Подать заявку
                </Link>
            </div>
        </div>
    );
};