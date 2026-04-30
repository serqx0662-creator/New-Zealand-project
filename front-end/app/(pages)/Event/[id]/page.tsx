import { Calendar, MapPin, Users } from "lucide-react";
import { EVENTS_DATA } from "@/app/data/events";
import { notFound } from "next/navigation";
import { NZEventSchedule } from "./NZEventSchedule";
import { NZRegistrationForm } from "./NZRegistrationForm";

export default async function EventSinglePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const event = EVENTS_DATA.find((e) => e.slug === id);

    if (!event) return notFound();

    return (
        <div className="max-w-[1440px] mx-auto px-6 pt-40 pb-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8">
                <div className="lg:w-1/2">
                    <div className="rounded-[14px] overflow-hidden h-[200px] lg:h-[350px]">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-3">{event.title}</h1>

                    <div className="flex items-center gap-3 text-gray-400 text-xl mb-3">
                        <Calendar size={24} />
                        <span>{event.date}</span>
                    </div>

                    <p className="text-gray-500 leading-relaxed mb-3">
                        {event.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <InfoCard
                            icon={<MapPin className="text-gray-900" />}
                            label="Место"
                            title={event.location}
                            subTitle={event.address}
                        />
                        <InfoCard
                            icon={<Users className="text-gray-900" />}
                            label="Места"
                            title={`Осталось: ${event.totalSlots - event.registered}`}
                            subTitle={`Зарегистрировано: ${event.registered}/${event.totalSlots}`}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                    <NZEventSchedule schedule={event.schedule} />
                </div>

                <aside className="lg:w-1/3">
                    <div className="sticky top-10">
                        <NZRegistrationForm />
                    </div>
                </aside>
            </div>
        </div>
    );
}

const InfoCard = ({ icon, label, title, subTitle }: any) => (
    <div className="p-4 border border-gray-200 rounded-[14px] bg-white">
        <div className="text-gray-400 mb-4 flex items-center gap-2">
            {icon}
            <span className="text-lg tracking-widest">{label}</span>
        </div>
        <div className="text-lg font-bold mb-1">{title}</div>
        <div className="text-gray-400">{subTitle}</div>
    </div>
);