import { Button } from "@/app/components/ui/button";

export const NZSocialLinks = () => (
    <div className="border border-gray-200 rounded-[14px] p-8 bg-white">
        <h3 className="text-lg font-bold text-[#101828] mb-6">Социальные сети</h3>
        <div className="flex flex-wrap gap-3">
            {['Facebook', 'Instagram', 'LinkedIn'].map((name) => (
                <Button key={name} className="bg-black text-white hover:bg-zinc-800 rounded-md px-6 h-12 font-bold transition-all">
                    {name}
                </Button>
            ))}
        </div>
    </div>
);