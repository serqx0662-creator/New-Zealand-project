export async function getPrograms(lang: string = 'ru') {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

    const url = `${baseUrl}/api/programs?locale=${lang}&populate=*`;

    const res = await fetch(url, {
        next: { revalidate: 60 }
    });

    if (!res.ok) {
        console.error(`Strapi error: ${res.status} ${res.statusText}`);
        throw new Error("Ошибка при загрузке данных из Strapi");
    }

    return res.json();
}