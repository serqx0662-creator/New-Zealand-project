"use client";
import React, { useState, useEffect } from "react";
import { CountryCard } from "./CountryCard";
import { CountryData } from "@/app/(pages)/Countries/data";

const STRAPI_URL = "http://127.0.0.1:1337";

// Интерфейс для сырых данных из Strapi, чтобы уйти от any
interface StrapiEntry {
    id: number;
    attributes?: any;
    [key: string]: any;
}

export default function CountriesPage() {
    const [countries, setCountries] = useState<CountryData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCountries() {
            try {
                const res = await fetch(`${STRAPI_URL}/api/countries?populate[0]=image&populate[1]=stats`);

                if (!res.ok) {
                    throw new Error(`Ошибка сервера: ${res.status}`);
                }

                const responseData = await res.json();

                if (!responseData.data) {
                    setCountries([]);
                    return;
                }

                // Нормализация данных без использования any в итоговом массиве
                const normalizedData: CountryData[] = responseData.data.map((item: StrapiEntry) => {
                    const data = item.attributes ? item.attributes : item;
                    return {
                        id: item.id,
                        documentId: data.documentId || "",
                        title: data.title || "",
                        slug: data.slug || "",
                        short_description: data.short_description || "",
                        description: data.description || "",
                        image: data.image ? { url: data.image.url } : undefined,
                        stats: data.stats ? {
                            universities: data.stats.universities,
                            programs: data.stats.programs,
                            students: data.stats.students,
                        } : undefined,
                        fast_facts: data.fast_facts
                    };
                });

                setCountries(normalizedData);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchCountries();
    }, []);

    if (loading) return <div className="pt-40 text-center">Загрузка стран...</div>;
    if (countries.length === 0) return <div className="pt-40 text-center">Страны не найдены. Проверьте права доступа в Strapi.</div>;

    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 flex flex-col gap-15 pt-40 pb-20">
            <div className="mb-2">
                <h1 className="text-[48px] font-bold text-gray-900 mb-2">Страны для обучения</h1>
                <p className="text-gray-500 text-base">Выберите страну для обучения за рубежом</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {countries.map((country) => (
                    <CountryCard
                        key={country.id}
                        country={country}
                        STRAPI_URL={STRAPI_URL}
                    />
                ))}
            </div>
        </section>
    );
}