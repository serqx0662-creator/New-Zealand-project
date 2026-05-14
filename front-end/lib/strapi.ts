export async function getPrograms(lang: string = 'ru') {
    const baseUrl = "http://127.0.0.1:1337";

    // Добавляем параметр locale в запрос
    // Strapi i18n использует формат ?locale=ru или ?locale=en
    const url = `${baseUrl}/api/programs?locale=${lang}&populate=*`;

    const res = await fetch(url, {
        // revalidate: 60 хорош для продакшена,
        // но при разработке i18n можно поставить 0, чтобы сразу видеть изменения
        next: { revalidate: 60 }
    });

    if (!res.ok) {
        console.error(`Strapi error: ${res.status} ${res.statusText}`);
        throw new Error("Ошибка при загрузке данных из Strapi");
    }

    return res.json();
}