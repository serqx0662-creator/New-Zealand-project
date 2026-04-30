import { Calendar, Clock, DollarSign, Star, MessageCircle, Download } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import { NZInfoItem } from "./NZInfoItem";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface SidebarProps {
    duration: string;
    startDate: string;
    price: string;
    rating: string;
}

export const NZProgramSidebar = ({ duration, startDate, price, rating }: SidebarProps) => (
    <aside className="lg:w-[35%] space-y-6 shrink-0">
        <div className="bg-white border border-gray-300 rounded-[14px] p-8">
            <h3 className="text-xl font-bold mb-8 text-[#101828]">Краткая информация</h3>
            <div className="space-y-6 mb-10">
                <NZInfoItem icon={<Calendar />} label="Длительность" value={duration} />
                <NZInfoItem icon={<Clock />} label="Начало обучения" value={startDate} />
                <NZInfoItem icon={<DollarSign />} label="Стоимость" value={price} />
                <NZInfoItem icon={<Star />} label="Рейтинг" value={rating} />
            </div>

            <div className="flex flex-col gap-3">
                <Link href="/Apply" className={cn("w-full h-14 rounded-md px-6 bg-black hover:bg-black/80 text-white flex items-center justify-center transition-all active:scale-95 font-medium text-sm")}>
                    Подать заявку
                </Link>
                <Button variant="outline" className="w-full h-14 rounded-md border-gray-300 gap-2 hover:bg-gray-50 transition-all">
                    <MessageCircle size={18}/> Задать вопрос
                </Button>
                <Button variant="ghost" className="w-full h-14 rounded-md border-gray-300 gap-2 hover:bg-gray-50 transition-all">
                    <Download size={18}/> Скачать брошюру
                </Button>
            </div>
        </div>

        <div className="bg-black text-white rounded-[14px] p-8">
            <h3 className="text-xl font-bold mb-3">Нужна помощь?</h3>
            <p className="text-gray-400 text-sm mb-6 font-medium">Наши консультанты помогут вам выбрать подходящую программу</p>
            <Link href="/Consultation">
                <Button className="w-full bg-white text-black h-12 rounded-md font-bold hover:bg-gray-100 transition-all active:scale-95">
                    Запросить консультацию
                </Button>
            </Link>
        </div>
    </aside>
);