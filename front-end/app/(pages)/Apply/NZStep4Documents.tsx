"use client";

import React, { useRef } from 'react';
import { Label } from "@/app/components/ui/label";
import { Upload, X, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface NZStep4Props {
    files: File[];
    error?: string;
    onChange: (files: File[]) => void;
}

export default function NZStep4Documents({ files, error, onChange }: NZStep4Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            onChange([...files, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        onChange(updatedFiles);
    };

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files) {
            const droppedFiles = Array.from(e.dataTransfer.files);
            onChange([...files, ...droppedFiles]);
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-4">
                <Label className={`text-sm font-bold ${error ? 'text-red-500' : 'text-[#101828]'}`}>
                    Загрузите документ (до 10мб каждый)
                </Label>

                <div
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative border-2 border-dashed rounded-[24px] p-12 transition-all cursor-pointer flex flex-col items-center justify-center text-center
                        ${error ? 'border-red-300 bg-red-50/5' : 'border-gray-100 hover:border-black bg-gray-50/30'}
                    `}
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        multiple
                        className="hidden"
                        accept="image/*,.pdf,.doc,.docx"
                    />

                    <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4">
                        <Upload size={20} className="text-gray-400" />
                    </div>

                    <p className="text-sm text-gray-500 mb-1">
                        <span className="font-semibold text-black">Нажмите для выбора</span> или перетащите файлы сюда
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG, PDF или DOC (max. 10MB)</p>
                </div>

                {error && (
                    <div className="flex items-center gap-1.5 mt-2 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-medium text-red-500">{error}</p>
                    </div>
                )}

                {files.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        {files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white shadow-sm animate-in zoom-in-95 duration-200">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="p-2 bg-gray-50 rounded-lg shrink-0">
                                        <FileText size={18} className="text-black" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-xs font-bold text-[#101828] truncate">{file.name}</p>
                                        <p className="text-[10px] text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                                    className="p-1 hover:bg-red-50 hover:text-red-500 rounded-md transition-colors text-gray-400"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
                <h4 className="text-sm font-bold text-[#101828] mb-3">Требуемые документы:</h4>
                <ul className="space-y-2">
                    {['Аттестат или диплом', 'Языковой сертификат', 'Мотивационное письмо', 'Рекомендательные письма'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                            <div className="w-1 h-1 rounded-full bg-gray-300" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}