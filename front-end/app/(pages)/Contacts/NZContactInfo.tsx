export const NZContactInfo = () => {
    const sections = [
        { label: "Телефон", values: ["+7 (495) 123-45-67", "+7 (495) 123-45-68"] },
        { label: "Email", values: ["info@studynz.com", "support@studynz.com"] },
        { label: "Адрес", values: ["Москва, ул. Тверская, 10", "Офис 205, 2 этаж"] },
        { label: "Рабочие часы", values: ["Пн - Пт: 9:00 - 18:00", "Сб: 10:00 - 16:00", "Вс: Выходной"] },
    ];

    return (
        <div className="border border-gray-200 rounded-[14px] p-8 space-y-8 bg-white">
            <h3 className="text-lg font-bold text-[#101828]">Контактная информация</h3>
            {sections.map((sec) => (
                <div key={sec.label} className="space-y-3">
                    <p className="font-semibold text-[#101828] tracking-wider">{sec.label}</p>
                    <div className="space-y-1">
                        {sec.values.map(v => <p key={v} className="text-[#7F838D]">{v}</p>)}
                    </div>
                </div>
            ))}
        </div>
    );
};