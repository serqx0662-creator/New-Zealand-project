import { notFound } from "next/navigation";
import { UNIVERSITIES } from "@/app/data/universities";
import UniversityDetail from "../UniversityDetail";

interface UniversityPageProps {
  params: Promise<{ id: string }>;
}

export default async function UniversityPage({ params }: UniversityPageProps) {
  const { id } = await params;
  const university = UNIVERSITIES.find((u) => u.id === Number(id));

  if (!university) notFound();

  return <UniversityDetail university={university} />;
}

export async function generateStaticParams() {
  return UNIVERSITIES.map(({ id }) => ({ id: String(id) }));
}
 