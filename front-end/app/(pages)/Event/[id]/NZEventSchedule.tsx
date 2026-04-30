interface ScheduleItem {
    time: string;
    activity: string;
}

export const NZEventSchedule = ({ schedule }: { schedule: ScheduleItem[] }) => {
    return (
        <div className="p-8 border border-gray-200 rounded-[14px] bg-white">
            <h3 className="text-xl font-bold mb-8">Программа мероприятия</h3>
            <div className="space-y-8">
                {schedule.map((item, idx) => (
                    <div key={idx} className="flex gap-8 items-start group">
                        <div className="flex flex-col items-center shrink-0">
                            <span className="font-bold text-[#101828] text-lg">{item.time}</span>
                        </div>
                        <div className="pt-0.5">
                            <p className="text-gray-500 font-medium text-lg leading-tight">
                                {item.activity}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};