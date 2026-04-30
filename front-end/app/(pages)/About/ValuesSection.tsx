import React from "react";
import { Target, Heart, Clock } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="flex-1 min-w-[220px] rounded-2xl border border-gray-100 bg-white p-6">
    <div className="mb-4 text-gray-400">{icon}</div>
    <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const values: ValueCardProps[] = [
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: "Целеустремленность",
    description: "Мы помогаем студентам достигать их образовательных целей",
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    title: "Забота",
    description:
      "Каждый студент важен для нас, мы обеспечиваем индивидуальный подход",
  },
  {
    icon: <Clock size={22} strokeWidth={1.5} />,
    title: "Надежность",
    description:
      "Мы гарантируем качественный сервис и поддержку на всех этапах",
  },
];

export const ValuesSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Наши ценности</h2>

      {/* Value cards */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {values.map((v) => (
          <ValueCard key={v.title} {...v} />
        ))}
      </div>

      {/* Stats row */}
      <div className="rounded-2xl border border-gray-100 bg-white px-8 py-6 flex flex-wrap justify-around gap-6">
        {[
          { value: "10,000+", label: "Успешных поступлений" },
          { value: "500+", label: "Университетов-партнёров" },
          { value: "50+", label: "Стран" },
          { value: "15", label: "Лет опыта" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
