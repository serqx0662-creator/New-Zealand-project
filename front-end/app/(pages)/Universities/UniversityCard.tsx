import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { University } from "@/app/data/universities";

interface UniversityCardProps {
  university: University;
}

export default function UniversityCard({ university }: UniversityCardProps) {
  const { id, image, name, city, country, rating, qsRank, programsCount } = university;

  return (
    <Link href={`/Universities/${id}`}>
      <article className="group rounded-2xl border border-zinc-100 overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex flex-col h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 text-sm font-semibold shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-zinc-800">{rating}</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-[15px] font-semibold text-zinc-900 mb-1.5 leading-snug">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 text-zinc-400 text-sm mb-4">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{city}, {country}</span>
          </div>

          <div className="mt-auto space-y-1.5 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Рейтинг</span>
              <span className="font-medium text-zinc-700">{qsRank}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Программ</span>
              <span className="font-bold text-zinc-900">{programsCount}</span>
            </div>
          </div>

          <div className="relative z-20 block w-full py-3 border border-gray-200 rounded-md text-center font-bold hover:bg-gray-100 transition-all active:scale-[0.98] bg-white">
            Посмотреть программу
          </div>
        </div>
      </article>
    </Link>
  );
}
