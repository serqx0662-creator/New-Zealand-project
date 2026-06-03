"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, X, AlertCircle, ChevronDown } from 'lucide-react';
import { PatternFormat } from "react-number-format";
import { useLanguage } from "@/app/context/LanguageContext";
import { dictionaries } from "@/app/data/dictionaries";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Label } from "@/app/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";

export const NZContactForm = () => {
    const { lang } = useLanguage();
    const t = dictionaries[lang].contactsPage.form;

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    // Список стран (как в форме консультации)
    const PHONE_COUNTRIES = [
        { name: lang === 'ru' ? "Кыргызстан" : "Kyrgyzstan", code: "+996", flag: "🇰🇬", mask: "+996 (###) ###-###" },
        { name: lang === 'ru' ? "Казахстан" : "Kazakhstan", code: "+7", flag: "🇰🇿", mask: "+7 (###) ###-####" },
        { name: lang === 'ru' ? "Россия" : "Russia", code: "+7", flag: "🇷🇺", mask: "+7 (###) ###-####" },
        { name: lang === 'ru' ? "Узбекистан" : "Uzbekistan", code: "+998", flag: "🇺🇿", mask: "+998 (##) ###-####" },
    ];

    const [selectedPhoneCountry, setSelectedPhoneCountry] = useState(PHONE_COUNTRIES[0]);

    const formSchema = z.object({
        name: z.string().min(2, t.errors.name),
        email: z.string().email(t.errors.email),
        subject: z.string().min(2, t.errors.subject),
        phone: z.string().refine(val => !val.includes('_') && val.length > 5, {
            message: t.errors.phone
        }),
        message: z.string().min(10, t.errors.message),
        privacy: z.boolean().refine((val) => val === true, t.errors.privacy),
    });

    type ContactFormValues = z.infer<typeof formSchema>;

    const { register, handleSubmit, setValue, watch, reset, formState } = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        mode: "onSubmit",
        defaultValues: { name: "", email: "", subject: "", phone: "", message: "", privacy: false }
    });

    const { errors } = formState;
    const watchPhone = watch("phone");
    const watchPrivacy = watch("privacy");

    // Проверка активности номера для цвета текста
    const isPhoneActive = watchPhone.replace(/\D/g, "").length > selectedPhoneCountry.code.replace(/\D/g, "").length;

    const onSubmit = (data: ContactFormValues) => {
        console.log("Contact Data:", data);
        setIsSuccessModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsSuccessModalOpen(false);
        reset();
        setSelectedPhoneCountry(PHONE_COUNTRIES[0]);
    };

    const inputStyles = "rounded-md h-12 border-gray-200 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors text-base";

    return (
        <div className="lg:col-span-7 border border-gray-200 rounded-[14px] p-6 md:p-10 relative">

            {/* МОДАЛКА */}
            {isSuccessModalOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in" onClick={handleCloseModal} />
                    <div className="relative bg-white rounded-[24px] p-8 md:p-10 max-w-[400px] w-full text-center shadow-2xl animate-in zoom-in-95">
                        <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-black"><X size={20} /></button>
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 size={32} className="text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-[#101828] mb-2">{lang === 'ru' ? 'Сообщение отправлено!' : 'Message Sent!'}</h3>
                        <p className="text-gray-500 mb-6 text-sm">{lang === 'ru' ? 'Мы ответим вам в ближайшее время.' : 'We will get back to you shortly.'}</p>
                        <Button onClick={handleCloseModal} className="w-full h-12 bg-black text-white rounded-md font-bold">OK</Button>
                    </div>
                </div>
            )}

            <h2 className="text-xl font-bold text-[#101828] mb-2">{t.title}</h2>
            <p className="text-[#7F838D] mb-8 text-sm">{t.description}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="font-bold text-[#101828]">{t.labels.name} *</Label>
                        <Input {...register("name")} className={`${inputStyles} ${errors.name ? 'border-red-500' : ''}`} placeholder={t.placeholders.name} />
                        {errors.name && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label className="font-bold text-[#101828]">{t.labels.email} *</Label>
                        <Input {...register("email")} className={`${inputStyles} ${errors.email ? 'border-red-500' : ''}`} placeholder="example@mail.com" />
                        {errors.email && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.email.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="font-bold text-[#101828]">{t.labels.subject} *</Label>
                    <Input {...register("subject")} className={`${inputStyles} ${errors.subject ? 'border-red-500' : ''}`} placeholder={t.placeholders.subject} />
                    {errors.subject && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.subject.message}</p>}
                </div>

                {/* ТЕЛЕФОН С ВЫБОРОМ СТРАНЫ */}
                <div className="space-y-2">
                    <Label className="font-bold text-[#101828]">{t.labels.phone} *</Label>
                    <div className="flex gap-2">
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button type="button" className={`flex items-center justify-center gap-2 px-3 h-12 rounded-md border transition-all bg-white min-w-[80px] ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}>
                                    <span className="text-xl">{selectedPhoneCountry.flag}</span>
                                    <ChevronDown size={14} className="text-gray-400" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-[180px] rounded-xl bg-white shadow-xl border-gray-100 z-50">
                                {PHONE_COUNTRIES.map((c) => (
                                    <DropdownMenuItem key={c.name} onClick={() => { setSelectedPhoneCountry(c); setValue("phone", ""); }} className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50">
                                        <span>{c.flag}</span>
                                        <span className="text-sm font-medium">{c.name}</span>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <div className="flex-1">
                            <PatternFormat
                                key={selectedPhoneCountry.code}
                                format={selectedPhoneCountry.mask}
                                mask="_"
                                allowEmptyFormatting
                                customInput={Input}
                                value={watchPhone}
                                className={`${inputStyles} ${errors.phone ? 'border-red-500 bg-red-50/5' : ''} ${isPhoneActive ? 'text-black' : 'text-gray-300'}`}
                                onValueChange={(v) => setValue("phone", v.formattedValue)}
                            />
                        </div>
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label className="font-bold text-[#101828]">{t.labels.message} *</Label>
                    <Textarea {...register("message")} className={`${inputStyles} min-h-[140px] resize-none ${errors.message ? 'border-red-500' : ''}`} placeholder={t.placeholders.message} />
                    {errors.message && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.message.message}</p>}
                </div>

                <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                        <Checkbox id="privacy" checked={watchPrivacy} onCheckedChange={(c) => setValue("privacy", c as boolean)} />
                        <Label htmlFor="privacy" className="text-sm text-[#7F838D] font-normal leading-tight cursor-pointer">
                            {t.labels.privacy}
                        </Label>
                    </div>
                    {errors.privacy && <p className="text-red-500 text-xs mt-1">{errors.privacy.message}</p>}
                </div>

                <Button type="submit" className="bg-black text-white px-8 py-6 rounded-md font-bold hover:bg-zinc-800 transition-all active:scale-95">
                    {t.button} <Send className="ml-2 h-5 w-5" />
                </Button>
            </form>
        </div>
    );
};