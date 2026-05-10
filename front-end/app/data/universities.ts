// 1. Твои основные интерфейсы для приложения (чистые данные)
export interface Program {
    id: number;
    documentId: string;
    slug?: string;
    name: string;
    type: "Undergraduate" | "Postgraduate" | "Foundation";
}

export interface University {
    id: number;
    documentId: string;
    name: string;
    city: string;
    country: string;
    rating: number;
    qsRank: string;
    programsCount: number;
    description: string;
    about: string;
    programs: Program[];
    image: string;
}

export interface StrapiProgram {
    id: number;
    documentId: string;
    title: string;
    type?: Program["type"];
    slug?: string;
}

export interface StrapiUniversity {
    id: number;
    documentId: string;
    title?: string;
    city?: string;
    rating?: number;
    qsRank?: string;
    programsCount?: number;
    description?: string;
    about?: string;
    image?: { url: string };
    country?: { title: string };
    programs?: StrapiProgram[];
}

export interface StrapiCollectionResponse<T> {
    data: T[];
    meta?: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface StrapiSingleResponse<T> {
    data: T;
}

export const TYPE_LABELS: Record<Program["type"], string> = {
    Postgraduate: "Магистратура",
    Undergraduate: "Бакалавриат",
    Foundation: "Подготовительный курс",
};