"use client";
 
import { useState } from "react";
import { Search } from "lucide-react";
import { UNIVERSITIES } from "@/app/data/universities";
import UniversityCard from "./UniversityCard";
 
export default function UniversitiesPage() {
  const [query, setQuery] = useState("");
 
  const filtered = UNIVERSITIES.filter(({ name, city }) =>
    name.toLowerCase().includes(query.toLowerCase()) ||
    city.toLowerCase().includes(query.toLowerCase())
  );
 
  return (
    <div className="min-h-screen bg-white py-10 max-w-7xl pt-40 pb-20 mx-auto px-4 md:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[48px] font-bold text-zinc-900 tracking-tight mb-2">
          Университеты-партнёры
        </h1>
        <p className="text-zinc-400 text-base">Лучшие университеты со всего мира</p>
      </div>
 
      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Поиск университета"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
        />
      </div>
 
      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((university) => (
            <UniversityCard key={university.id} university={university} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-zinc-400">
          Университеты не найдены
        </div>
      )}
    </div>
  );
}