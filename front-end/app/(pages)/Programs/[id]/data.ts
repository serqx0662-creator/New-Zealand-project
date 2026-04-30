export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export interface Facility {
    id: number;
    title: string;
    subtext: string;
}

export interface ProgramData {
    id: number;
    documentId: string;
    title: string;
    location: string;
    duration: string;
    price: number;
    slug: string;
    image?: {
        url: string;
        alternativeText?: string;
    };
    description?: string;
    requirements?: string | string[];
    courses?: string[];
    campus_details?: {
        main_text: string;
        facilities: Facility[];
    };
    faq?: FAQItem[];
}