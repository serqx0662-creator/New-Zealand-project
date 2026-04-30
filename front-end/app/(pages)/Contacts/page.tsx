import {NZContactForm} from "@/app/(pages)/Contacts/NZContactForm";
import {NZContactInfo} from "@/app/(pages)/Contacts/NZContactInfo";
import {NZSocialLinks} from "@/app/(pages)/Contacts/NZSocialLinks";


export default function ContactsPage() {
    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#101828] mb-4">Контакты</h1>
                    <p className="text-[#7F838D] text-lg">Свяжитесь с нами любым удобным способом</p>
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