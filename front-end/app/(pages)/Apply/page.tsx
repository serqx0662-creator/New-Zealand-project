"use client";

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from "@/app/components/ui/button";

import NZStep1Program from "@/app/(pages)/Apply/NZStep1Program";
import NZStep2Personal from "@/app/(pages)/Apply/NZStep2Personal";
import NZStep3Education from "@/app/(pages)/Apply/NZStep3Education";
import NZStep4Documents from "@/app/(pages)/Apply/NZStep4Documents";
import NZStep5Review from "@/app/(pages)/Apply/NZStep5Review";
import NZSuccessScreen from "@/app/(pages)/Apply/NZSuccessScreen";

const TOTAL_STEPS = 5;
const STEPS_LABELS = [
    "Выбор программы",
    "Персональные данные",
    "Образование",
    "Документы",
    "Подтверждение"
];

export default function ApplyPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isAccepted, setIsAccepted] = useState(false);

    const [formData, setFormData] = useState({
        program: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        educationLevel: "",
        language: "",
        files: [] as File[]
    });

    useEffect(() => {
        const savedStep = localStorage.getItem('apply_step');
        const savedData = localStorage.getItem('apply_form_data');

        if (savedStep) setCurrentStep(parseInt(savedStep));
        if (savedData) {
            const parsed = JSON.parse(savedData);
            setFormData(prev => ({ ...prev, ...parsed, files: [] }));
        }
    }, []);

    useEffect(() => {
        if (!isSubmitted) {
            localStorage.setItem('apply_step', currentStep.toString());
            const { files, ...textData } = formData;
            localStorage.setItem('apply_form_data', JSON.stringify(textData));
        }
    }, [currentStep, formData, isSubmitted]);

    const updateFields = (fields: Partial<typeof formData>) => {
        setFormData(prev => ({ ...prev, ...fields }));
    };

    const nextStep = () => {
        const newErrors: Record<string, string> = {};

        if (currentStep === 1 && !formData.program) {
            newErrors.program = "Пожалуйста, выберите программу обучения";
        }

        if (currentStep === 2) {
            if (!formData.firstName.trim()) newErrors.firstName = "Введите имя";
            if (!formData.lastName.trim()) newErrors.lastName = "Введите фамилию";
            if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = "Введите корректный email";
            if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Введите полный номер телефона";
        }

        if (currentStep === 3) {
            if (!formData.educationLevel) newErrors.educationLevel = "Выберите уровень образования";
            if (!formData.language) newErrors.language = "Выберите языковой тест";
        }

        if (currentStep === 4 && formData.files.length === 0) {
            newErrors.files = "Загрузите хотя бы один документ для продолжения";
        }

        if (currentStep === 5) {
            if (!isAccepted) {
                newErrors.accepted = "Необходимо подтвердить согласие";
            } else {
                localStorage.removeItem('apply_step');
                localStorage.removeItem('apply_form_data');
                setIsSubmitted(true);
                return;
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    };

    const prevStep = () => {
        setErrors({});
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    if (isSubmitted) {
        return (
            <main className="bg-white min-h-screen pt-40 pb-20 px-4 md:px-6">
                <div className="max-w-[1440px] mx-auto">
                    <NZSuccessScreen />
                </div>
            </main>
        );
    }

    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4 text-left">Подача заявки на обучение</h1>
                </div>

                <div className="border border-gray-100 rounded-2xl md:rounded-3xl p-4 md:p-8 mb-6 md:mb-8 bg-white shadow-sm">
                    <div className="flex justify-between items-end mb-6">
                        <span className="text-xs md:text-sm font-bold text-[#101828]">Шаг {currentStep} из {TOTAL_STEPS}</span>
                        <span className="text-xs md:text-sm font-bold text-[#101828]">{Math.round(((currentStep - 1) / (TOTAL_STEPS - 1)) * 100)}%</span>
                    </div>

                    <div className="relative mb-10 px-2 md:px-5">
                        <div className="absolute top-1/2 left-2 right-2 md:left-5 md:right-5 h-1 bg-gray-100 rounded-full -translate-y-1/2" />

                        <div className="absolute top-1/2 left-2 right-2 md:left-5 md:right-5 h-1 -translate-y-1/2">
                            <div
                                className="h-full bg-black transition-all duration-700 ease-in-out rounded-full"
                                style={{ width: `${((currentStep - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
                            />
                        </div>

                        <div className="relative flex justify-between items-center">
                            {STEPS_LABELS.map((label, index) => {
                                const stepNumber = index + 1;
                                const isCompleted = stepNumber < currentStep;
                                const isActive = stepNumber === currentStep;

                                return (
                                    <div key={label} className="flex flex-col items-center">
                                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 z-10
                                                ${isActive ? 'border-black scale-110 shadow-md bg-white' : ''}
                                                ${isCompleted ? 'bg-black border-black' : 'border-gray-100 bg-white'}
                                            `}>
                                            {isCompleted ? (
                                                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-white flex items-center justify-center">
                                                    <Check size={10} className="text-white md:size-[12px]" strokeWidth={3} />
                                                </div>
                                            ) : (
                                                <span className={`text-[10px] md:text-xs font-bold ${isActive ? 'text-black' : 'text-gray-300'}`}>
                                                    {stepNumber}
                                                </span>
                                            )}
                                        </div>

                                        <span className={`text-[9px] md:text-xs mt-3 text-center font-bold absolute -bottom-10 transition-opacity duration-300
                                            ${isActive || isCompleted ? 'text-[#101828]' : 'text-gray-300'}
                                            ${isActive ? 'opacity-100' : 'max-md:opacity-0'} 
                                            w-[80px] md:w-[120px] leading-tight flex justify-center
                                        `}>
                                            {label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="border border-gray-100 rounded-[32px] p-6 md:p-12 bg-white shadow-sm min-h-[450px] flex flex-col">
                    <div className="mb-10 text-left">
                        <h2 className="text-xl font-bold text-[#101828] mb-2">{STEPS_LABELS[currentStep - 1]}</h2>
                        <p className="text-gray-400 text-sm font-medium">Заполните информацию для шага {currentStep}</p>
                    </div>

                    <div className="flex-grow">
                        {currentStep === 1 && (
                            <NZStep1Program
                                value={formData.program}
                                error={errors.program}
                                onChange={(val) => {
                                    updateFields({ program: val });
                                    if (errors.program) setErrors(prev => ({ ...prev, program: "" }));
                                }}
                            />
                        )}
                        {currentStep === 2 && (
                            <NZStep2Personal
                                values={formData}
                                errors={errors}
                                onChange={(fields) => {
                                    updateFields(fields);
                                    const fieldName = Object.keys(fields)[0];
                                    if (errors[fieldName]) setErrors(prev => ({ ...prev, [fieldName]: "" }));
                                }}
                            />
                        )}
                        {currentStep === 3 && (
                            <NZStep3Education
                                values={formData}
                                errors={errors}
                                onChange={(fields) => {
                                    updateFields(fields);
                                    const fieldName = Object.keys(fields)[0];
                                    if (errors[fieldName]) setErrors(prev => ({ ...prev, [fieldName]: "" }));
                                }}
                            />
                        )}
                        {currentStep === 4 && (
                            <NZStep4Documents
                                files={formData.files}
                                error={errors.files}
                                onChange={(newFiles) => {
                                    updateFields({ files: newFiles });
                                    if (errors.files) setErrors(prev => ({ ...prev, files: "" }));
                                }}
                            />
                        )}
                        {currentStep === 5 && (
                            <NZStep5Review
                                values={formData}
                                accepted={isAccepted}
                                error={errors.accepted}
                                onAcceptChange={(val) => {
                                    setIsAccepted(val);
                                    if (errors.accepted) setErrors(prev => ({ ...prev, accepted: "" }));
                                }}
                            />
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-50 gap-4 md:gap-0">
                        <Button
                            variant="ghost"
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className="w-full md:w-auto order-last md:order-first rounded-xl px-6 h-14 md:h-12 text-gray-400 hover:text-black hover:bg-gray-100 border border-gray-100 transition-colors flex items-center justify-center"
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" /> Назад
                        </Button>

                        <Button
                            onClick={nextStep}
                            className="w-full md:w-auto order-first md:order-last px-10 h-14 md:h-12 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-black text-white hover:bg-black/90 active:scale-95"
                        >
                            {currentStep === TOTAL_STEPS ? 'Завершить' : 'Далее'} <ChevronRight size={18} />
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}