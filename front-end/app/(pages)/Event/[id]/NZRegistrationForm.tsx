"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PatternFormat } from "react-number-format";
import { Button } from "@/app/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, X } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Введите ваше имя"),
    email: z.string().email("Некорректный email адрес"),
    phone: z.string()
        .min(1, "Введите номер телефона")
        .min(10, "Номер слишком короткий"),
});

type FormValues = z.infer<typeof formSchema>;

interface NZRegistrationFormProps {
    documentId: string;
    currentRegistered: number;
    onRegisterSuccess: (newCount: number) => void;
}

export const NZRegistrationForm = ({ documentId, currentRegistered, onRegisterSuccess }: NZRegistrationFormProps) => {
    const [isTyped, setIsTyped] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const { control, register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            phone: ""
        }
    });

    useEffect(() => {
        if (showSuccess) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [showSuccess]);

    const handleClose = useCallback(() => {
        setShowSuccess(false);
        reset();
        setIsTyped(false);
    }, [reset]);

    const onSubmit = async (data: FormValues) => {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
        try {
            const response = await fetch(`${baseUrl}/api/events/${documentId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: { registered: currentRegistered + 1 } }),
            });
            if (response.ok) {
                onRegisterSuccess(currentRegistered + 1);
                setShowSuccess(true);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const inputStyles = "w-full p-4 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-zinc-200 transition-all outline-none text-zinc-900";
    const errorTextStyles = "text-xs text-red-500 ml-1 mt-1 font-medium";

    return (
        <>
            <div className="p-8 border border-gray-200 rounded-xl bg-white relative">
                <h3 className="text-2xl font-bold mb-2 text-black">Регистрация</h3>
                <p className="text-sm text-zinc-400 mb-8">Оставьте заявку, чтобы забронировать место</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase text-zinc-500 ml-1">Имя</label>
                        <input
                            {...register("name")}
                            placeholder="Ваше имя"
                            className={`${inputStyles} ${errors.name ? "border-red-400 bg-red-50/50" : ""}`}
                        />
                        {errors.name && <p className={errorTextStyles}>{errors.name.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase text-zinc-500 ml-1">Email</label>
                        <input
                            {...register("email")}
                            placeholder="Ваш email"
                            className={`${inputStyles} ${errors.email ? "border-red-400 bg-red-50/50" : ""}`}
                        />
                        {errors.email && <p className={errorTextStyles}>{errors.email.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase text-zinc-500 ml-1">Телефон</label>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <PatternFormat
                                    format="+7 (###) ###-##-##"
                                    mask="_"
                                    value={value}
                                    onValueChange={(v) => {
                                        setIsTyped(!!v.value);
                                        onChange(v.value);
                                    }}
                                    onBlur={onBlur}
                                    className={`${inputStyles} ${isTyped ? "text-zinc-900" : "text-zinc-400"} ${
                                        errors.phone ? "border-red-400 bg-red-50/50" : ""
                                    }`}
                                    placeholder="+7 (___) ___-__-__"
                                />
                            )}
                        />
                        {errors.phone && <p className={errorTextStyles}>{errors.phone.message}</p>}
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-zinc-900 text-white py-7 rounded-xl font-bold text-lg hover:bg-black transition-all mt-4 disabled:opacity-50"
                    >
                        {loading ? "Отправка..." : "Зарегистрироваться"}
                    </Button>
                </form>
            </div>

            {showSuccess && typeof document !== "undefined" && createPortal(
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
                    <div className="fixed inset-0 bg-white/40 backdrop-blur-xl" onClick={handleClose} />
                    <div className="relative bg-white rounded-[32px] p-10 max-w-md w-full shadow-2xl text-center animate-in fade-in zoom-in duration-300">
                        <button onClick={handleClose} className="absolute top-6 right-6 text-gray-300 hover:text-black transition-colors">
                            <X size={24} />
                        </button>
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 bg-[#E7F9F0] rounded-full flex items-center justify-center">
                                <CheckCircle2 size={40} className="text-[#10B981]" />
                            </div>
                        </div>
                        <h4 className="text-3xl font-bold text-black mb-4">Успешно!</h4>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            Вы успешно зарегистрированы на мероприятие. Мы свяжемся с вами в ближайшее время.
                        </p>
                        <button onClick={handleClose} className="w-full py-5 bg-black text-white rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all shadow-lg">
                            Отлично
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};