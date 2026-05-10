export interface ScheduleItem {
    time: string;
    activity: string;
}

export interface Event {
    id: number;
    documentId: string;
    slug: string;
    title: string;
    date: string;
    location: string;
    address: string;
    description: string;
    image: string;
    type: "Офлайн" | "Онлайн";
    registered: number;
    totalSlots: number;
    schedule: ScheduleItem[];
}

export interface StrapiEvent {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    date: string;
    location: string;
    address: string;
    description: string;
    type: Event["type"];
    registered: number;
    totalSlots: number;
    image?: {
        url: string;
    };
    schedule: ScheduleItem[];
}

export const EVENTS_DATA: Event[] = [];