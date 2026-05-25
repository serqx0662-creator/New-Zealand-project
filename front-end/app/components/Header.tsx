"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { Globe, Menu, X, BookOpen, GraduationCap, Calendar, Users, Clock } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { dictionaries, Locale } from "@/app/data/dictionaries";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const { lang, setLang } = useLanguage();

    const t = dictionaries[lang].header;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: t.programs, href: '/Programs', icon: <BookOpen size={18} /> },
        { name: t.countries, href: '/Countries', icon: <Globe size={18} /> },
        { name: t.universities, href: '/Universities', icon: <GraduationCap size={18} /> },
        { name: t.events, href: '/Event', icon: <Calendar size={18} /> },
        { name: t.about, href: '/About', icon: <Users size={18} /> },
        { name: t.contacts, href: '/Contacts', icon: <Clock size={18} /> },
    ];

    // Функция теперь добавляет префикс для ВСЕХ языков (и ru, и en)
    const getLocalizedHref = (href: string) => {
        const cleanHref = href === '/' ? '' : href;
        return `/${lang}${cleanHref}`;
    };

    // Проверка активного роута (срезаем префиксы, чтобы корректно подсвечивать пункты)
    const isActive = (href: string) => {
        const cleanPathname = pathname.replace(/^\/(ru|en)/, "") || "/";
        if (href === '/') return cleanPathname === '/';
        return cleanPathname.startsWith(href);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
                isScrolled ? "py-3 shadow-md" : "py-5 shadow-sm"
            }`}>
                <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex items-center justify-between w-full">

                    <div className="flex items-center">
                        <Link href={getLocalizedHref('/')} className="relative flex items-center h-10 md:h-12 w-20 transition-opacity hover:opacity-90">
                            <Image
                                src="/logo/logo-white.svg"
                                alt="GetGrant"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    <nav className="hidden xl:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={getLocalizedHref(link.href)}
                                    className={`text-sm font-medium transition-colors ${
                                        active ? "text-blue-600" : "text-gray-600 hover:text-[#002B5C]"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link
                            href={getLocalizedHref('/Apply')}
                            className={cn(
                                "h-10 rounded-md px-6 bg-black hover:bg-black/80 text-white hidden sm:flex items-center justify-center transition-all active:scale-95 font-medium text-sm"
                            )}
                        >
                            {t.apply}
                        </Link>

                        <div className="flex items-center gap-2">
                            <DropdownMenu modal={false}>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-10 w-10 text-gray-600 bg-gray-100/50 hover:bg-gray-200 transition-colors rounded-md"
                                    >
                                        <Globe className="h-5 w-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setLang('ru')} className="cursor-pointer">Русский</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setLang('en')} className="cursor-pointer">English</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="xl:hidden h-10 w-10 flex items-center justify-center text-gray-600 bg-gray-100/50 hover:bg-gray-200 transition-all rounded-md group"
                            >
                                <Menu className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-active:rotate-90" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isMobileMenuOpen ? "visible" : "invisible"}`}>
                <div
                    className={`absolute inset-0 bg-gray-950/40 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                <div className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-out p-8 flex flex-col ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                    <div className="flex justify-between items-center mb-10">
                        <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{t.menu}</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-all duration-300 active:rotate-180"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-2 flex-grow overflow-y-auto">
                        {navLinks.map((link, idx) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={getLocalizedHref(link.href)}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-all ${
                                        active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                    style={{
                                        transitionDelay: `${idx * 40}ms`,
                                        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                                        opacity: isMobileMenuOpen ? 1 : 0,
                                        transitionProperty: 'all'
                                    }}
                                >
                                    <span className={active ? "text-blue-600" : "text-gray-400"}>{link.icon}</span>
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="mt-auto pt-6 border-t border-gray-100 space-y-3">
                        <Button className="w-full bg-black py-6 text-white text-base font-medium rounded-md transition-transform active:scale-95">
                            {t.apply}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}