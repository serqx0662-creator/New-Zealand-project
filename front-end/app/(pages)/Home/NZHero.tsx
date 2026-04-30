import React from 'react';
import {Button} from "@/app/components/ui/button";
import {Globe} from "lucide-react";
import Link from "next/link";

export default function NZHero() {
    const stats = [
        { label: "Успешных поступлений", value: "10,000+" },
        { label: "Университетов-партнеров", value: "500+" },
        { label: "Стран", value: "50+" },
        { label: "Успешность поступления", value: "98%" },
    ];

    return (
        <section className="relative min-h-[calc(100vh-80px)] mt-[56px] w-full flex flex-col overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/image/hero-image.png')",
                }}
            >
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-20">
                <div className="container mx-auto px-6 text-center text-white">
                    <div className="inline-flex items-center bg-white border border-white/20 px-3 py-2 rounded-full mb-8">
                        <span className="text-[10px] md:text-xs flex items-center gap-2  tracking-widest text-black ">
                            <Globe className="h-3.5 w-3.5 md:h-4 md:w-4" />
                            Образование мирового уровня
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-[1.1]">
                        Найдите идеальную программу обучения за рубежом
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Помогаем студентам поступить в лучшие университеты мира. <br className="hidden md:block" />
                        Более 10,000 успешных поступлений.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
                        <Link href="/Apply" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-10 rounded-md h-14 text-base bg-blue-600 hover:bg-blue-700">
                                Подать заявку
                            </Button>
                        </Link>

                        <Link href="/Consultation" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full rounded-md px-10 h-14 text-base bg-white text-black hover:bg-gray-100 border-none">
                                Запросить консультацию
                            </Button>
                        </Link>
                    </div>

                    <div className="w-full">
                        <div className="flex flex-wrap justify-center items-start gap-x-6 lg:gap-x-8 gap-y-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <span className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] md:text-xs  tracking-[0.15em] leading-tight">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}