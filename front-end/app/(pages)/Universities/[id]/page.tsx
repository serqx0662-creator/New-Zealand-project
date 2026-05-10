import { notFound } from "next/navigation";
import UniversityDetail from "../UniversityDetail";
import { University } from "@/app/data/universities";

interface UniversityPageProps {
    params: Promise<{ id: string }>;
}

interface StrapiProgram {
    id: number;
    documentId: string;
    title: string;
    slug?: string;
    type?: "Undergraduate" | "Postgraduate" | "Foundation";
}

async function getUniversity(id: string): Promise<University | null> {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

    try {
        const res = await fetch(
            `${baseUrl}/api/universities/${id}?populate[programs][populate]=*&populate[country][populate]=*&populate[image][populate]=*`,
            { cache: "no-store" }
        );

        if (!res.ok) return null;

        const json = await res.json();
        const item = json.data;

        if (!item) return null;

        return {
            id: item.id,
            documentId: item.documentId,
            name: item.title || "Без названия",
            city: item.city || "",
            country: item.country?.title || "Не указана",
            rating: Number(item.rating) || 0,
            qsRank: item.qsRank || "N/A",
            programsCount: Number(item.programsCount) || 0,
            description: item.description || "Описание скоро будет добавлено.",
            about: item.about || "Информация обновляется.",
            image: item.image?.url
                ? (item.image.url.startsWith('http') ? item.image.url : `${baseUrl}${item.image.url}`)
                : "/image/country.png",
            programs: (item.programs || []).map((p: StrapiProgram) => ({
                id: p.id,
                documentId: p.slug || p.documentId,
                name: p.title || "Программа",
                type: p.type || "Undergraduate",
            })),
        };
    } catch (error) {
        console.error("Fetch failed:", error);
        return null;
    }
}

export default async function UniversityPage({ params }: UniversityPageProps) {
    const { id } = await params;
    const university = await getUniversity(id);

    if (!university) {
        notFound();
    }

    return <UniversityDetail university={university} />;
}