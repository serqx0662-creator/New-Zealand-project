"use client";
import { NZContactForm } from "@/app/(pages)/Contacts/NZContactForm";
import { NZContactInfo } from "@/app/(pages)/Contacts/NZContactInfo";
import { NZSocialLinks } from "@/app/(pages)/Contacts/NZSocialLinks";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

export default function ContactsPage() {
    const { lang } = useLanguage();
    const t = dictionaries[lang].contactsPage;

    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#101828] mb-4">{t.title}</h1>
                    <p className="text-[#7F838D] text-lg">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <NZContactForm />
                    <div className="lg:col-span-5 space-y-6">
                        <NZContactInfo />
                        <NZSocialLinks />
                    </div>
                </div>
            </div>
        </main>
    );
}