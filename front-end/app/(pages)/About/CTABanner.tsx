import React from "react";

export const CTABanner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-10">
      <div className="rounded-2xl bg-gray-900 px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Готовы начать своё путешествие?
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Свяжитесь с нами сегодня и получите бесплатную консультацию
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button className="bg-white text-gray-900 text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
            Запросить консультацию
          </button>
          <button className="border border-white text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
            Посмотреть программы
          </button>
        </div>
      </div>
    </section>
  );
};
