import Link from "next/link";
import { MapPin, ArrowLeft, Calendar, Award } from "lucide-react";
import { University, TYPE_LABELS, TYPE_COLORS } from "@/app/data/universities";

interface UniversityDetailProps {
    university: University;
}

export default function UniversityDetail({
    university,
}: UniversityDetailProps) {
    const {
        image,
        name,
        country,
        qsRank,
        rating,
        description,
        about,
        programs,
    } = university;

    return (
        <div className="min-h-screen bg-white max-w-5xl mx-auto px-6 py-8 pt-40 pb-20">
            {/* Back button */}
            <Link
                href="/Universities"
                className="inline-flex items-center gap-2 text-sm text-zinc-600 border border-zinc-200 rounded-xl px-4 py-2 hover:bg-zinc-50 transition-colors mb-6"
            >
                <ArrowLeft className="w-4 h-4" />
                Назад к программам
            </Link>

            {/* Hero */}
            <div className="relative rounded-2xl overflow-hidden h-64 mb-7">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* QS badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm flex items-center gap-2">
                    <span>{qsRank}</span>
                    <span className="text-amber-400">★</span>
                    <span>{rating}</span>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-5 left-6 text-white">
                    <h1 className="text-2xl font-bold leading-tight mb-1">
                        {name}
                    </h1>
                    <div className="flex items-center gap-1.5 text-white/80 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>
                            {name}, {country}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left column */}
                <div className="lg:col-span-2 space-y-5">
                    {/* About */}
                    <section className="border border-zinc-100 rounded-2xl p-6">
                        <h2 className="text-base font-semibold text-zinc-900 mb-3">
                            О университете
                        </h2>
                        <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                            {description}
                        </p>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            {about}
                        </p>
                    </section>

                    {/* Programs */}
                    <section className="border border-zinc-100 rounded-2xl p-6">
                        <h2 className="text-base font-semibold text-zinc-900 mb-4">
                            Программы обучения
                        </h2>
                        <div className="space-y-3">
                            {programs.map(({ id, name: programName, type }) => (
                                <div
                                    key={id}
                                    className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:border-zinc-200  transition-all"
                                >
                                    <div>
                                        <p className="text-sm font-medium text-zinc-800">
                                            {programName}
                                        </p>
                                        <span
                                            className={`inline-block mt-1 text-xs py-0.5 font-medium text-[#7F838D]`}
                                        >
                                            {TYPE_LABELS[type]}
                                        </span>
                                    </div>
                                    <button className="border border-gray-200 rounded-lg px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                                        Подробнее
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right column — Quick info */}
                <aside>
                    <div className="border border-zinc-100 rounded-2xl p-6 sticky top-6">
                        <h2 className="text-base font-semibold text-zinc-900 mb-5">
                            Быстрая информация
                        </h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
                                    <Calendar className="w-4 h-4 text-zinc-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-400">
                                        Программ
                                    </p>
                                    <p className="text-sm font-semibold text-zinc-800">
                                        {programs.length}+
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
                                    <Award className="w-4 h-4 text-zinc-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-400">
                                        Рейтинг
                                    </p>
                                    <p className="text-sm font-semibold text-zinc-800">
                                        {rating}/5
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-zinc-900 text-white rounded-xl py-3 text-sm font-medium hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200">
                            Подать заявку
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
