"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { PROGRAMS_DATA } from "@/app/data/programs";

export default function PopularPrograms() {
    return (
        <section className="py-12 md:py-16 bg-[#FCFCFC]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-[#101828] mb-2">
                            Популярные программы
                        </h2>
                        <p className="text-gray-500 font-medium">
                            Самые востребованные программы обучения
                        </p>
                    </div>
                    <Link
                        href="/Programs"
                        className="bg-black text-white hover:bg-black/90 px-6 py-3 rounded-md font-medium transition-colors text-center"
                    >
                        Все программы
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROGRAMS_DATA.map((program) => (
                        <div
                            key={program.id}
                            className="group flex flex-col bg-white border border-gray-100 rounded-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1"
                        >
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-[#101828] mb-5">
                                    {program.title}
                                </h3>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-3 text-sm text-gray-400">
                                        <MapPin size={18} className="shrink-0" />
                                        <span>{program.university}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-400">
                                        <Calendar size={18} className="shrink-0" />
                                        <span>Длительность: {program.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base text-[#101828] font-bold">
                                        <DollarSign size={18} className="text-gray-400 shrink-0" />
                                        <span>{program.price}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    <Link
                                        href={`/Programs/${program.slug}`}
                                        className="flex items-center justify-center border border-gray-200 text-gray-700 font-semibold py-3 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                        Подробнее
                                    </Link>
                                    <Link
                                        href="/Apply"
                                        className="flex items-center justify-center bg-black text-white font-semibold py-3 rounded-md hover:bg-black/80 transition-all"
                                    >
                                        Подать заявку
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}