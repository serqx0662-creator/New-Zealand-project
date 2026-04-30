import {ProgramData} from "@/app/(pages)/Programs/[id]/data";

export interface CountryStats {
    universities: string;
    programs: string;
    students: string;
}

export interface Advantage {
    id: number;
    title: string;
    description: string;
}

export interface CountryData {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    short_description: string;
    description: string;
    image?: {
        url: string;
    };
    stats?: CountryStats;
    fast_facts?: {
        capital: string;
        academic_year: string;
        currency: string;
    };
    programs?: ProgramData[];
    advantages?: Advantage[];
}