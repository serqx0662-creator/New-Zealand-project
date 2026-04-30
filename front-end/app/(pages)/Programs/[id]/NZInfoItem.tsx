import React from 'react';

interface InfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    subValue?: string;
}

export const NZInfoItem = ({ icon, label, value, subValue }: InfoItemProps) => (
    <div className="flex gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
            {icon}
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-bold text-[#101828]">{label}</span>
            <span className="text-sm font-medium text-gray-400">{value}</span>
            {subValue && <span className="text-[10px] text-gray-300 font-medium">{subValue}</span>}
        </div>
    </div>
);