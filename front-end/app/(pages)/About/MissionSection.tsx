import React from "react";

export const MissionSection: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto flex flex-col gap-5">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">О нас</h1>
            <p className="text-gray-500 text-base">
                Мы помогаем студентам осуществить мечту об обучении за рубежом
            </p>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 flex flex-col lg:flex-row gap-8 items-start">
                {/* Text */}
                <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Наша миссия
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Мы стремимся сделать качественное образование доступным
                        для всех. Наша команда профессионалов помогает студентам
                        найти идеальную программу обучения и успешно поступить в
                        лучшие университеты мира.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        За годы работы мы помогли тысячам студентов осуществить
                        свою мечту об обучении за рубежом. Мы гордимся каждым
                        успешным поступлением и продолжаем расширять наши
                        возможности.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-[420px] shrink-0 rounded-xl overflow-hidden h-56 lg:h-64">
                    <img
                        src="/image/country.png"
                        alt="Лондон"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
