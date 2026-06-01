export interface ProgramContent {
    description: string;
    requirements: string[];
    courses: string[];
    yearlyPrice: string;
    totalPrice: string;
    campus: string;
    howToApply: string[];
    faq: { question: string; answer: string }[]; // <--- добавить
}

export interface Program {
    id: number;
    title: string;
    university: string;
    duration: string;
    price: string;
    image: string;
    slug: string;
    content: ProgramContent;
}

