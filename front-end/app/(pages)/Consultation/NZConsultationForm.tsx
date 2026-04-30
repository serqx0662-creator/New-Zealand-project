"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronDown, Send } from 'lucide-react';

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Label } from "@/app/components/ui/label";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu";
import { PatternFormat } from "react-number-format";

const formSchema = z.object({
    firstName: z.string().min(2, "Введите имя"),
    lastName: z.string().min(2, "Введите фамилию"),
    email: z.string().email("Некорректный email"),
    phone: z.string().min(10, "Введите корректный номер"),
    country: z.string().min(1, "Выберите страну"),
    program: z.string().min(1, "Выберите программу"),
    message: z.string().min(10, "Опишите подробнее"),
    privacy: z.boolean().refine((val) => val === true, "Нужно согласие"),
});

const countries = [
    { id: "nz", name: "Новая Зеландия" },
    { id: "au", name: "Австралия" },
    { id: "ca", name: "Канада" },
];

const programs = [
    { id: "bachelor", name: "Бакалавриат" },
    { id: "master", name: "Магистратура" },
    { id: "foundation", name: "Foundation" },
];

export const NZConsultationForm = () => {
    const [isPhoneTyped, setIsPhoneTyped] = useState(false);

    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitted } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { country: "", program: "", privacy: false }
    });

    const selectedCountry = watch("country");
    const selectedProgram = watch("program");

    const onSubmit = (data: z.infer<typeof formSchema>) => console.log(data);

    const inputStyles = "rounded-md h-12 border-gray-200 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors text-base tracking-wider";

    return (
        <div className="lg:col-span-7 border border-gray-200 rounded-[14px] p-6 md:p-10">
            <h2 className="text-xl font-bold text-[#101828] mb-3">Форма обратной связи</h2>
            <p className="text-[#7F838D] mb-5">Мы ответим на все ваши вопросы о программах обучения</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-bold text-[#101828]">Имя *</Label>
                        <Input id="firstName" {...register("firstName")} className={inputStyles} placeholder="Введите имя" />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-bold text-[#101828]">Фамилия *</Label>
                        <Input id="lastName" {...register("lastName")} className={inputStyles} placeholder="Введите фамилию" />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="font-bold text-[#101828]">Email *</Label>
                    <Input id="email" {...register("email")} className={inputStyles} placeholder="example@mail.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone" className="font-bold text-[#101828]">Телефон *</Label>
                    <PatternFormat
                        format="+7 (###) ###-##-##"
                        mask="_"
                        allowEmptyFormatting
                        onValueChange={(values) => {
                            const val = values.value || "";
                            setIsPhoneTyped(val.length > 0);
                            setValue("phone", val, { shouldValidate: val.length > 0 || isSubmitted });
                        }}
                        className={`${inputStyles} border border-gray-100 focus:border-gray-400 w-full px-3 outline-none ${isPhoneTyped ? "text-black" : "text-gray-400"}`}
                        placeholder="+7 (___) ___-__-__"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-[10px]">
                        <Label className="text-sm font-bold text-[#101828]">Страна интереса</Label>
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild className="group">
                                <button type="button" className="flex items-center justify-between w-full px-4 h-12 rounded-md border border-gray-200 bg-white text-sm text-gray-500 hover:border-gray-400 focus:border-gray-400 focus:outline-none transition-all">
                                    <span>{countries.find(c => c.id === selectedCountry)?.name || "Выберите страну"}</span>
                                    <ChevronDown size={16} className="text-gray-400 group-data-[state=open]:rotate-180 transition-transform" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="min-w-[240px] w-[calc(var(--radix-dropdown-menu-trigger-width)+1px)] rounded-xl shadow-xl bg-white z-50">
                                {countries.map((c) => (
                                    <DropdownMenuItem key={c.id} onClick={() => setValue("country", c.id, { shouldValidate: true })} className="cursor-pointer py-3 px-4 focus:bg-gray-50 outline-none">
                                        {c.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                    </div>

                    <div className="space-y-[10px]">
                        <Label className="text-sm font-bold text-[#101828]">Программа интереса</Label>
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild className="group">
                                <button type="button" className="flex items-center justify-between w-full px-4 h-12 rounded-md border border-gray-200 bg-white text-sm text-gray-500 hover:border-gray-400 focus:border-gray-400 focus:outline-none transition-all">
                                    <span>{programs.find(p => p.id === selectedProgram)?.name || "Выберите программу"}</span>
                                    <ChevronDown size={16} className="text-gray-400 group-data-[state=open]:rotate-180 transition-transform" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="min-w-[240px] w-[calc(var(--radix-dropdown-menu-trigger-width)+1px)] rounded-xl shadow-xl bg-white z-50">
                                {programs.map((p) => (
                                    <DropdownMenuItem key={p.id} onClick={() => setValue("program", p.id, { shouldValidate: true })} className="cursor-pointer py-3 px-4 focus:bg-gray-50 outline-none">
                                        {p.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message" className="font-bold text-[#101828]">Ваш опрос *</Label>
                    <Textarea
                        id="message"
                        {...register("message")}
                        className={`${inputStyles} min-h-[120px]  border border-gray-200 hover:border-gray-300 focus:border-black transition-all outline-none resize-none px-4 py-3`}
                        placeholder="Ваш вопрос..."
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <Checkbox id="privacy" onCheckedChange={(checked) => setValue("privacy", checked as boolean, { shouldValidate: true })} className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black" />
                        <Label htmlFor="privacy" className="text-sm text-gray-500 font-normal cursor-pointer">Я согласен с политикой конфиденциальности</Label>
                    </div>
                    {errors.privacy && <p className="text-red-500 text-xs mt-1">{errors.privacy.message}</p>}
                </div>

                <Button type="submit" className="bg-black text-white px-4 py-2.5 rounded-md hover:bg-black/90 h-auto text-base transition-all active:scale-95">
                    Отправить запрос <Send className="ml-2 h-5 w-5" />
                </Button>
            </form>
        </div>
    );
};