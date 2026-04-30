import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface NZProgramHeroContentProps {
    src: string;
    title: string;
    location: string;
}

export const NZProgramHero = ({ src, title, location }: NZProgramHeroContentProps) => (
    <div className="w-full">
        <div className="relative w-full h-[150px] md:h-[260px] rounded-[14px] overflow-hidden mb-8 bg-gray-100">
            <Image
                src={src}
                alt={title}
                fill
                unoptimized
                className="object-cover"
                priority
            />
        </div>

        <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">
                {title}
            </h1>
            <div className="flex items-center gap-2 text-gray-400 font-medium">
                <MapPin size={18} />
                <span>{location}</span>
            </div>
        </div>
    </div>
);