"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PatternFormat } from "react-number-format";
import { Button } from "@/app/components/ui/button";
import {useState} from "react";

const formSchema = z.object({
    name: z.string().min(2, "Введите ваше имя"),
    email: z.string().email("Некорректный email адрес"),
    phone: z.string().min(10, "Введите корректный номер телефона"),
});

type FormValues = z.infer<typeof formSchema>;

export const NZRegistrationForm = () => {
    const [isTyped, setIsTyped] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("Данные формы:", data);
        alert("Вы успешно зарегистрированы!");
    };

    const inputStyles = "w-full p-4 bg-gray-50 border border-transparent rounded-md focus:bg-white focus:border-gray-200 transition-all outline-none";
    const errorStyles = "text-red-500 text-xs mt-1 ml-1";

    return (
        <div className="p-8 border border-gray-200 rounded-[14px] bg-white">
            <h3 className="text-2xl font-bold mb-2">Регистрация</h3>
            <p className="text-sm text-gray-400 mb-8">Заполните форму для регистрации</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                    <label className="text-sm font-semibold px-1">Имя</label>
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Ваше имя"
                        className={`${inputStyles} ${errors.name ? "border-red-400" : ""}`}
                    />
                    {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold px-1">Email</label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="Ваш email"
                        className={`${inputStyles} ${errors.email ? "border-red-400" : ""}`}
                    />
                    {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold px-1">Телефон</label>
                    <PatternFormat
                        format="+7 (###) ###-##-##"
                        mask="_"
                        allowEmptyFormatting
                        onValueChange={(values) => {
                            const val = values.value || "";
                            setIsTyped(val.length > 0);

                            setValue("phone", val, {
                                shouldValidate: val.length > 0 || !!errors.phone
                            });
                        }}
                        className={`${inputStyles} ${
                            isTyped ? "text-black" : "text-gray-400"
                        } ${
                            errors.phone ? "border-red-400 focus:border-red-400" : "border-transparent"
                        }`}
                        placeholder="+7 (___) ___-__-__"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
                </div>

                <Button
                    type="submit"
                    className="w-full bg-black text-white py-6 rounded-md font-bold text-lg hover:bg-zinc-800 transition-all mt-4"
                >
                    Зарегистрироваться
                </Button>
            </form>
        </div>
    );
};