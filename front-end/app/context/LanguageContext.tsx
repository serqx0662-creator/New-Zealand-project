"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Locale } from '@/app/data/dictionaries';
import { useRouter } from 'next/navigation';

interface LanguageContextType {
    lang: Locale;
    setLang: (lang: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLangState] = useState<Locale>('ru');
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const firstPathSegment = window.location.pathname.split('/')[1];
            if (firstPathSegment === 'en' || firstPathSegment === 'ru') {
                setTimeout(() => {
                    setLangState(firstPathSegment as Locale);
                }, 0);
            }
        }

        const handlePopState = () => {
            const firstPathSegment = window.location.pathname.split('/')[1];
            if (firstPathSegment === 'en' || firstPathSegment === 'ru') {
                setLangState(firstPathSegment as Locale);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    useEffect(() => {
        const handleGlobalClicks = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');

            if (target && target.href && target.href.startsWith(window.location.origin)) {
                const targetPath = target.getAttribute('href');

                if (!targetPath || targetPath.startsWith('http') || targetPath.startsWith(`/${lang}`)) return;

                e.preventDefault();

                const cleanPath = targetPath.replace(/^\/(ru|en)/, "") || "/";
                const newPath = `/${lang}${cleanPath === '/' ? '' : cleanPath}`;

                router.push(newPath);
            }
        };

        document.addEventListener('click', handleGlobalClicks);
        return () => document.removeEventListener('click', handleGlobalClicks);
    }, [lang, router]);

    const handleLangChange = (newLang: Locale) => {
        setLangState(newLang);

        if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname.replace(/^\/(ru|en)/, "");
            const newPath = `/${newLang}${currentPath === '' ? '/Home' : currentPath}${window.location.search}`;
            window.history.pushState({}, "", newPath);
        }
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang: handleLangChange }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within LanguageProvider");
    return context;
};