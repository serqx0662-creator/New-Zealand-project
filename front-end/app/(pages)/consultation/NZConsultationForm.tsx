"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronDown, Send, AlertCircle, CheckCircle2, X } from 'lucide-react';
import { useLanguage } from "@/app/context/LanguageContext";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Label } from "@/app/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { PatternFormat } from "react-number-format";

export const NZConsultationForm = () => {
    const { lang } = useLanguage();
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const PHONE_COUNTRIES = [
        { name: lang === 'ru' ? "Кыргызстан" : "Kyrgyzstan", code: "+996", flag: "🇰🇬", mask: "+996 (###) ###-###" },
        { name: lang === 'ru' ? "Казахстан" : "Kazakhstan", code: "+7", flag: "🇰🇿", mask: "+7 (###) ###-####" },
        { name: lang === 'ru' ? "Россия" : "Russia", code: "+7", flag: "🇷🇺", mask: "+7 (###) ###-####" },
        { name: lang === 'ru' ? "Узбекистан" : "Uzbekistan", code: "+998", flag: "🇺🇿", mask: "+998 (##) ###-####" },
    ];

    const [selectedPhoneCountry, setSelectedPhoneCountry] = useState(PHONE_COUNTRIES[0]);

    const formSchema = z.object({
        firstName: z.string().min(2, lang === 'ru' ? "Введите имя" : "Enter name"),
        lastName: z.string().min(2, lang === 'ru' ? "Введите фамилию" : "Enter last name"),
        email: z.string().email(lang === 'ru' ? "Некорректный email" : "Invalid email"),
        phone: z.string().refine(val => !val.includes('_') && val.length > 5, {
            message: lang === 'ru' ? "Введите полный номер" : "Enter full number"
        }),
        targetCountry: z.string().min(1, lang === 'ru' ? "Выберите страну" : "Select country"),
        program: z.string().min(1, lang === 'ru' ? "Выберите программу" : "Select program"),
        message: z.string().min(10, lang === 'ru' ? "Опишите подробнее" : "Describe in more detail"),
        privacy: z.boolean().refine((val) => val === true, lang === 'ru' ? "Нужно согласие" : "Consent required"),
    });

    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onSubmit",
        defaultValues: { targetCountry: "", program: "", privacy: false, phone: "" }
    });

    const watchPhone = watch("phone");
    const watchPrivacy = watch("privacy");
    const isPhoneActive = watchPhone.replace(/\D/g, "").length > selectedPhoneCountry.code.replace(/\D/g, "").length;

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Success:", data);
        setIsSuccessModalOpen(true); // Показываем модалку
    };

    const handleCloseModal = () => {
        setIsSuccessModalOpen(false);
        reset(); // Очищаем форму
        setSelectedPhoneCountry(PHONE_COUNTRIES[0]); // Сбрасываем флаг
    };

    const inputStyles = "rounded-xl h-14 border-gray-200 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-all text-base";

    return (
        <div className="lg:col-span-7 border border-gray-200 rounded-[32px] p-6 md:p-10 bg-white shadow-sm relative">

            {/* МОДАЛЬНОЕ ОКНО */}
            {isSuccessModalOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={handleCloseModal}
                    />
                    <div className="relative bg-white rounded-[32px] p-8 md:p-12 max-w-[440px] w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
                        <button onClick={handleCloseModal} className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors">
                            <X size={24} />
                        </button>

                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 size={44} className="text-green-500" />
                        </div>

                        <h3 className="text-2xl font-bold text-[#101828] mb-3">
                            {lang === 'ru' ? 'Заявка отправлена!' : 'Request Sent!'}
                        </h3>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            {lang === 'ru'
                                ? 'Спасибо! Наш специалист свяжется с вами в ближайшее время для консультации.'
                                : 'Thank you! Our specialist will contact you shortly for a consultation.'}
                        </p>

                        <Button
                            onClick={handleCloseModal}
                            className="w-full h-14 bg-black text-white rounded-xl font-bold hover:bg-black/90 transition-all"
                        >
                            {lang === 'ru' ? 'Хорошо' : 'Got it'}
                        </Button>
                    </div>
                </div>
            )}

            <h2 className="text-2xl font-bold text-[#101828] mb-2">{lang === 'ru' ? 'Форма обратной связи' : 'Feedback Form'}</h2>
            <p className="text-gray-400 mb-8 font-medium">{lang === 'ru' ? 'Мы ответим на все ваши вопросы' : 'We will answer all your questions'}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="font-bold text-[#101828]">{lang === 'ru' ? 'Имя *' : 'First Name *'}</Label>
                        <Input {...register("firstName")} className={`${inputStyles} ${errors.firstName ? 'border-red-500' : ''}`} placeholder={lang === 'ru' ? "Имя" : "Name"} />
                        {errors.firstName && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label className="font-bold text-[#101828]">{lang === 'ru' ? 'Фамилия *' : 'Last Name *'}</Label>
                        <Input {...register("lastName")} className={`${inputStyles} ${errors.lastName ? 'border-red-500' : ''}`} placeholder={lang === 'ru' ? "Фамилия" : "Last Name"} />
                        {errors.lastName && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.lastName.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="font-bold text-[#101828]">Email *</Label>
                    <Input {...register("email")} className={`${inputStyles} ${errors.email ? 'border-red-500' : ''}`} placeholder="example@mail.com" />
                    {errors.email && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.email.message}</p>}
                </div>

                {/* ТЕЛЕФОН */}
                <div className="space-y-2">
                    <Label className="font-bold text-[#101828]">{lang === 'ru' ? 'Телефон *' : 'Phone *'}</Label>
                    <div className="flex gap-2">
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button type="button" className={`flex items-center justify-center gap-2 px-3 h-14 rounded-xl border transition-all bg-white min-w-[90px] ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}>
                                    <span className="text-xl">{selectedPhoneCountry.flag}</span>
                                    <ChevronDown size={14} className="text-gray-400" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-[200px] rounded-xl p-1 bg-white z-50 shadow-2xl border-gray-100">
                                {PHONE_COUNTRIES.map((c) => (
                                    <DropdownMenuItem key={c.code + c.name} onClick={() => { setSelectedPhoneCountry(c); setValue("phone", ""); }} className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50">
                                        <span className="text-lg">{c.flag}</span>
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
                                value={watchPhone} // Важно для reset()
                                className={`${inputStyles} ${errors.phone ? 'border-red-500 bg-red-50/10' : ''} ${isPhoneActive ? 'text-[#101828]' : 'text-gray-300'}`}
                                onValueChange={(v) => setValue("phone", v.formattedValue)}
                            />
                        </div>
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.phone.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="font-bold text-[#101828]">{lang === 'ru' ? 'Страна интереса' : 'Country of interest'}</Label>
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button type="button" className={`flex items-center justify-between w-full px-4 h-14 rounded-xl border bg-white text-sm transition-all ${errors.targetCountry ? 'border-red-500' : 'border-gray-200'}`}>
                                    <span className={watch("targetCountry") ? "text-black" : "text-gray-400"}>
                                        { (lang === 'ru' ? "Новая Зеландия, Австралия, Канада" : "New Zealand, Australia, Canada").split(', ').find((_, i) => ["nz", "au", "ca"][i] === watch("targetCountry")) || (lang === 'ru' ? "Выберите страну" : "Select country")}
                                    </span>
                                    <ChevronDown size={16} className="text-gray-400" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[240px] rounded-xl bg-white shadow-xl">
                                {[{id:"nz",n:"Новая Зеландия"},{id:"au",n:"Австралия"},{id:"ca",n:"Канада"}].map((c) => (
                                    <DropdownMenuItem key={c.id} onClick={() => setValue("targetCountry", c.id)} className="py-3 px-4 cursor-pointer">
                                        {lang === 'ru' ? c.n : (c.id === "nz" ? "New Zealand" : c.id === "au" ? "Australia" : "Canada")}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="space-y-2">
                        <Label className="font-bold text-[#101828]">{lang === 'ru' ? 'Программа' : 'Program'}</Label>
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button type="button" className={`flex items-center justify-between w-full px-4 h-14 rounded-xl border bg-white text-sm transition-all ${errors.program ? 'border-red-500' : 'border-gray-200'}`}>
                                    <span className={watch("program") ? "text-black" : "text-gray-400"}>
                                        {["bachelor", "master", "foundation"].includes(watch("program")) ? (lang === 'ru' ? (watch("program") === "bachelor" ? "Бакалавриат" : watch("program") === "master" ? "Магистратура" : "Foundation") : watch("program")) : (lang === 'ru' ? "Выберите программу" : "Select program")}
                                    </span>
                                    <ChevronDown size={16} className="text-gray-400" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[240px] rounded-xl bg-white shadow-xl">
                                {["bachelor", "master", "foundation"].map((p) => (
                                    <DropdownMenuItem key={p} onClick={() => setValue("program", p)} className="py-3 px-4 cursor-pointer capitalize">
                                        {lang === 'ru' ? (p === "bachelor" ? "Бакалавриат" : p === "master" ? "Магистратура" : "Foundation") : p}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="font-bold text-[#101828]">{lang === 'ru' ? 'Ваш вопрос *' : 'Your question *'}</Label>
                    <Textarea {...register("message")} className="rounded-xl min-h-[120px] border-gray-200 focus:border-black resize-none p-4" placeholder={lang === 'ru' ? "Опишите ваш запрос..." : "Describe your request..."} />
                    {errors.message && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.message.message}</p>}
                </div>

                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="privacy"
                            checked={watchPrivacy}
                            onCheckedChange={(checked) => setValue("privacy", checked as boolean)}
                            className="data-[state=checked]:bg-black data-[state=checked]:border-black"
                        />
                        <Label htmlFor="privacy" className="text-sm text-gray-500 font-normal cursor-pointer">
                            {lang === 'ru' ? 'Я согласен с политикой конфиденциальности' : 'I agree to the privacy policy'}
                        </Label>
                    </div>
                    {errors.privacy && <p className="text-red-500 text-xs mt-1">{errors.privacy.message}</p>}
                </div>

                <Button type="submit" className="w-full md:w-auto bg-black text-white px-10 h-14 rounded-xl font-bold hover:bg-black/90 transition-all active:scale-95 flex items-center justify-center gap-2">
                    {lang === 'ru' ? 'Отправить запрос' : 'Send Request'} <Send size={18} />
                </Button>
            </form>
        </div>
    );
};