import { notFound } from "next/navigation";
import UniversityDetail from "../UniversityDetail";

interface UniversityPageProps {
    params: Promise<{ id: string }>;
}

export default async function UniversityPage({ params }: UniversityPageProps) {
    const { id } = await params;

    if (!id) {
        notFound();
    }

    return <UniversityDetail documentId={id} />;
}