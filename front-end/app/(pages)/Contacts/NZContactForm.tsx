"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from 'lucide-react';
import { PatternFormat } from "react-number-format";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Label } from "@/app/components/ui/label";

const formSchema = z.object({
    name: z.string().min(2, "Введите имя"),
    email: z.string().email("Некорректный email"),
    subject: z.string().min(2, "Укажите тему"),
    phone: z.string().min(10, "Введите корректный номер"),
    message: z.string().min(10, "Введите сообщение (минимум 10 символов)"),
    privacy: z.boolean().refine((val) => val === true, "Нужно согласие"),
});

type ContactFormValues = z.infer<typeof formSchema>;

export const NZContactForm = () => {
    const [isPhoneTyped, setIsPhoneTyped] = useState(false);


    const { register, handleSubmit, setValue, formState} = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: { privacy: false }
    });
    const { errors } = formState;

    const onSubmit = (data: ContactFormValues) => console.log(data);

    const inputStyles = "rounded-md h-12 border-gray-200 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors text-base";

    return (
        <div className="lg:col-span-7 border border-gray-200 rounded-[14px] p-6 md:p-10">
            <h2 className="text-xl font-bold text-[#101828] mb-2">Написать нам</h2>
            <p className="text-[#7F838D] mb-8 text-sm">Заполните форму, и мы ответим вам в ближайшее время</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="font-bold text-[#101828]">Имя *</Label>
                        <Input id="name" {...register("name")} className={inputStyles} placeholder="Ваше имя" />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="font-bold text-[#101828]">Email *</Label>
                        <Input id="email" {...register("email")} className={inputStyles} placeholder="example@mail.com" />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="subject" className="font-bold text-[#101828]">Тема *</Label>
                    <Input id="subject" {...register("subject")} className={inputStyles} placeholder="Тема обращения" />
                    {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
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
                            setValue("phone", val, {
                                shouldValidate: val.length > 0 || formState.isSubmitted
                            });
                        }}
                        className={`${inputStyles} w-full px-4 border  outline-none transition-all ${
                            isPhoneTyped ? "text-black" : "text-gray-400"
                        } border-gray-200 focus:border-gray-400`}
                        placeholder="+7 (___) ___-__-__"
                    />{errors.phone && (isPhoneTyped || formState.isSubmitted) && (
                        <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message" className="font-bold text-[#101828]">Сообщение *</Label>
                    <Textarea
                        id="message"
                        {...register("message")}
                        className={`${inputStyles} min-h-[160px] border transition-all outline-none focus:bg-white resize-none border-gray-200 focus:border-black
                        }`}
                        placeholder="Ваше сообщение..."
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                        <Checkbox id="privacy" onCheckedChange={(c) => setValue("privacy", c as boolean, { shouldValidate: true })} />
                        <Label htmlFor="privacy" className="text-sm text-[#7F838D] font-normal leading-tight cursor-pointer">
                            Я согласен с политикой конфиденциальности
                        </Label>
                    </div>
                    {errors.privacy && <p className="text-red-500 text-xs mt-1 ml-1">{errors.privacy.message}</p>}
                </div>

                <Button type="submit" className="bg-black text-white px-8 py-6 rounded-md font-bold">
                    Отправить запрос <Send className="ml-2 h-5 w-5" />
                </Button>
            </form>
        </div>
    );
};