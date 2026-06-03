import { ScheduleItem } from "@/app/data/events";

interface NZEventScheduleProps {
    schedule: ScheduleItem[]; // или какой там у тебя тип
    title?: string; // Добавь это свойство
}

export const NZEventSchedule = ({ schedule }: NZEventScheduleProps) => {
    return (
        <div className="p-6 md:p-8 border border-gray-200 rounded-xl bg-white">
            <h3 className="text-xl font-bold mb-8">Программа мероприятия</h3>
            <div className="relative space-y-8 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-px before:bg-gray-100">
                {schedule.map((item, idx) => (
                    <div key={idx} className="flex gap-6 md:gap-8 items-start relative">
                        <div className="flex flex-col items-center shrink-0">
                            <div className="w-9 h-9 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-black" />
                            </div>
                        </div>
                        <div className="pt-1.5">
                            <span className="block font-bold text-black text-[16px] md:text-lg mb-1">{item.time}</span>
                            <p className="text-gray-500 text-base md:text-lg leading-snug">
                                {item.activity}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};