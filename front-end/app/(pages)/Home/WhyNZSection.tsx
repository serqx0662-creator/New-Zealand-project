import React from 'react';

export default function WhyNZSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        Почему Новая Зеландия?
                    </h2>
                    <p className="text-black text-base font-normal md:min-w-[891px] mx-auto leading-relaxed overflow-hidden ">
                        Современное образование, безопасность и уникальная природа делают Новую Зеландию идеальным выбором.
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
                    style={{ gridTemplateRows: "auto" }}
                >
                    <div className="lg:col-span-2 border border-gray-100 rounded-3xl p-8 bg-white transition-all duration-500 hover:bg-[#F8F9FB] hover:border-gray-200 hover:shadow-sm group">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-500">
                            Безопасная и спокойная среда
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Новая Зеландия постоянно входит в число самых безопасных стран мира,
                            предлагая стабильное общество и дружелюбную атмосферу для жизни и учёбы.
                        </p>
                    </div>

                    <div className="lg:col-span-3 border border-gray-100 rounded-3xl p-8 bg-white transition-all duration-500 hover:bg-[#F8F9FB] hover:border-gray-200 hover:shadow-sm group">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-500">
                            Образование мирового класса
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Университеты Новой Зеландии признаны во всём мире за инновационные методы
                            преподавания, практическое обучение и тесные связи с индустрией.
                        </p>
                    </div>

                    <div className="md:row-span-2 lg:col-span-2 lg:row-span-2 border border-transparent bg-[#F2F4F7] rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[360px] transition-all duration-500 hover:bg-[#EBEDF0] group">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-500">
                                Карьерные и миграционные возможности
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Страна нуждается в квалифицированных и образованных людях — международные
                                выпускники поощряются оставаться и строить долгосрочную карьеру.
                            </p>
                        </div>
                        <div className="mx-0 -mb-8 mt-6 overflow-hidden">
                            <img
                                src="/image/why-nz-people.webp"
                                alt="Студенты"
                                className="w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-1 border border-transparent bg-[#F2F4F7] rounded-3xl flex items-center justify-center p-6 min-h-[180px] transition-all duration-500 hover:bg-[#EBEDF0] group">
                        <img
                            src="/image/why-nz-map.webp"
                            alt="Карта мира"
                            className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                        />
                    </div>

                    <div className="lg:col-span-2 border border-gray-100 rounded-3xl p-8 bg-white transition-all duration-500 hover:bg-[#F8F9FB] hover:border-gray-200 hover:shadow-sm group">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-500">
                            Открытая и дружелюбная культура
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Киви известны своей добротой, инклюзивностью и уважением к разнообразию.
                            Студенты чувствуют себя искренне принятыми и быстро становятся частью сообщества.
                        </p>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3 border border-gray-100 rounded-3xl p-8 bg-white transition-all duration-500 hover:bg-[#F8F9FB] hover:border-gray-200 hover:shadow-sm group">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-500">
                            Качество жизни
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Чистая природа, свежий воздух, сбалансированный образ жизни и отличное
                            здравоохранение делают Новую Зеландию одним из лучших мест в мире.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}