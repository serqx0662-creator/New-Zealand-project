"use client";
import React from 'react';
import Link from 'next/link';
import { FOOTER_LINKS } from "@/app/data/footer";

const SOCIAL_LINKS = [
    {
        name: 'Facebook',
        href: '#',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        name: 'Instagram',
        href: '#',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7616 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8V8.00001C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37V11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        name: 'Twitter',
        href: '#',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 pt-11 pb-8">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8">
                    <div className="lg:col-span-5 space-y-[25px]">
                        <Link href="/" className="text-2xl font-bold text-[#101828] block">
                            Study NZ
                        </Link>
                        <p className="text-gray-500 text-sm max-w-sm">
                            Помогаем студентам найти идеальную программу обучения за рубежом.
                        </p>

                        <div className="space-y-[25px]">
                            <h4 className="text-sm font-bold text-[#101828]">
                                Подписка на новости
                            </h4>
                            <div className="space-y-4">
                                <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Ваш Email"
                                        className="w-full sm:flex-grow px-4 py-2.5 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:border-black transition-colors"
                                    />
                                    <button className="w-full sm:w-auto bg-black text-white px-6 py-2.5 rounded-md cursor-pointer text-sm font-semibold hover:bg-black/90 transition-all active:scale-95 whitespace-nowrap">
                                        Подписаться
                                    </button>
                                </form>
                                <p className="text-xs text-gray-400">
                                    Подписываясь, вы соглашаетесь с нашей{' '}
                                    <Link href="/privacy" className="underline hover:text-gray-600">
                                        политикой конфиденциальности
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h4 className="font-bold text-[#101828]">Программы</h4>
                            <ul className="space-y-2">
                                {FOOTER_LINKS.programs.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-[#101828]">Страны</h4>
                            <ul className="space-y-2">
                                {FOOTER_LINKS.countries.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-[#101828]">Компания</h4>
                                <ul className="space-y-2">
                                    {FOOTER_LINKS.company.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-[#101828]">Правовая информация</h4>
                                <ul className="space-y-2">
                                    {FOOTER_LINKS.legal.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-6">
                        {SOCIAL_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-black transition-colors"
                                aria-label={link.name} // Для доступности
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400">
                        © {currentYear} Study NZ. Все права защищены.
                    </p>
                </div>

            </div>
        </footer>
    );
}