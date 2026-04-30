import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
    BookOpen,
    CheckCircle,
    DollarSign,
    HelpCircle,
    ClipboardList
} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface TabsProps {
    content?: {
        description: string;
        requirements: string[];
        courses: string[];
        yearlyPrice: string;
        totalPrice: string;
        campus: string;
        campusFacilities: { title: string; subtext: string }[];
        howToApply: string[];
        faq: { question: string; answer: string }[];
    };
}
export const NZProgramTabs = ({ content }: TabsProps) => {
    if (!content) {
        return <div className="p-10 border border-gray-100 rounded-[32px] text-gray-400">Загрузка данных...</div>;
    }

    return (
        <Tabs defaultValue="overview" className="w-full mt-10">
            <TabsList className="
                bg-gray-100/50
                px-2 py-6
                rounded-[10px]
                flex
                w-full
                overflow-x-auto
                overflow-y-hidden
                scrollbar-hide
                justify-start
                lg:inline-flex
                lg:w-auto
                h-auto
                gap-1
            ">
                <TabsTrigger
                    value="overview"
                    className="rounded-[10px] px-6 py-4 whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                    Обзор
                </TabsTrigger>
                <TabsTrigger
                    value="requirements"
                    className="rounded-[10px] px-6 py-4 whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                    Требования
                </TabsTrigger>
                <TabsTrigger
                    value="courses"
                    className="rounded-[10px] px-6 py-4 whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                    Курсы
                </TabsTrigger>
                <TabsTrigger
                    value="price"
                    className="rounded-[10px] px-6 py-4 whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                    Стоимость
                </TabsTrigger>
                <TabsTrigger
                    value="apply"
                    className="rounded-[10px] px-6 py-4 whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                    Как подать
                </TabsTrigger>
                <TabsTrigger
                    value="campus"
                    className="rounded-[10px] px-6 py-4 whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                    Кампус
                </TabsTrigger>
                <TabsTrigger
                    value="faq"
                    className="rounded-[10px] px-6 py-4 whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                    FAQ
                </TabsTrigger>
            </TabsList>

            <div className="mt-6 border border-gray-300 rounded-[14px] p-8 min-h-[300px]">
                <TabsContent value="overview" className="mt-0 outline-none">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#101828]">
                        Описание программы
                    </h3>
                    <p className="text-gray-500 leading-relaxed whitespace-pre-line">
                        {content.description}
                    </p>
                </TabsContent>

                <TabsContent value="requirements" className="mt-0 outline-none">
                    <h3 className="text-xl font-bold mb-6 text-[#101828]">Требования для поступления</h3>
                    <div className="space-y-4">
                        {content.requirements?.map((req, index) => (
                            <div key={index} className="flex items-center gap-3 text-black font-medium">
                                <CheckCircle size={18} className="text-black" />
                                {req}
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="courses" className="mt-0 outline-none">
                    <h3 className="text-xl font-bold mb-6 text-black">Основные курсы</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {content.courses?.map((course, index) => (
                            <div key={index} className="p-4 border border-gray-300 rounded-[10px] flex items-center gap-3 text-black font-medium">
                                <BookOpen size={18} className="text-black" />
                                {course}
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="price" className="mt-0 outline-none">
                    <h3 className="text-xl font-bold mb-6 text-[#101828]">Стоимость обучения</h3>
                    <div className="space-y-3">
                        <div className="p-4 border border-gray-300 rounded-[10px] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                            <span className="text-black font-medium flex items-center gap-2">
                                <DollarSign size={18} className="text-gray-900" />
                                Стоимость за год
                            </span>
                            <span className="font-bold text-black text-lg sm:text-base">
                                {content.yearlyPrice}
                            </span>
                        </div>

                        <div className="p-4 border border-gray-300 rounded-[10px] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                            <span className="text-black font-medium flex items-center gap-2">
                                <DollarSign size={18} className="text-gray-900" />
                                Общая стоимость
                            </span>
                            <span className="font-bold text-black text-lg sm:text-base">
                                {content.totalPrice}
                            </span>
                        </div>

                        <div className="p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-[10px] flex items-start sm:items-center gap-2">
                            <CheckCircle
                                size={18}
                                className="text-[#166534] mt-0.5 sm:mt-0 flex-shrink-0"
                            />
                            <span className="text-[#166534] font-medium text-sm leading-tight">
                                Стипендии доступны для квалифицированных студентов
                            </span>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="apply" className="mt-0 outline-none">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#101828]">
                        <ClipboardList size={20} className="text-black" /> Процесс подачи заявки
                    </h3>
                    <div className="space-y-4 mb-8">
                        {content.howToApply?.map((step, index) => (
                            <div key={index} className="flex gap-3 ml-2">
                                <p className="text-black font-medium leading-relaxed">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Link href="/Apply" className={cn("bg-black text-white px-4 py-2.5 h-12 rounded-md font-bold hover:bg-black/90 transition-all active:scale-95")}>
                        Подать заявку сейчас
                    </Link>
                </TabsContent>

                <TabsContent value="campus" className="mt-0 outline-none">
                    <h3 className="text-xl font-bold mb-4 text-[#101828]">Кампус и удобства</h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                        {content.campus}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {content.campusFacilities?.length > 0 ? (
                            content.campusFacilities.map((item, index) => (
                                <div key={index} className="p-6 border border-gray-300 rounded-2xl">
                                    <BookOpen className="mb-3 text-black" />
                                    <h4 className="font-bold mb-1 text-[#101828]">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.subtext}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm">Информация об удобствах дополняется...</p>
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="faq" className="mt-0 outline-none">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#101828]">
                        <HelpCircle size={20} className="text-gray-400" /> Часто задаваемые вопросы
                    </h3>
                    <div className="space-y-6">
                        {content.faq?.map((item, index) => (
                            <div key={index} className="pb-6 last:border-0">
                                <h4 className="font-bold text-[#101828] mb-2">{item.question}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </div>
        </Tabs>
    );
};