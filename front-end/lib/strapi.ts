export async function getPrograms() {
    const baseUrl = "http://127.0.0.1:1337";

    const res = await fetch(`${baseUrl}/api/programs?populate=*`, {
        next: { revalidate: 60 }
    });

    if (!res.ok) throw new Error("Ошибка при загрузке данных из Strapi");

    return res.json();
}