import NZHero from "@/app/(pages)/Home/NZHero";
import NZServices from "@/app/(pages)/Home/NZServices";
import NZPopularPrograms from "@/app/(pages)/Home/NZPopularPrograms";
import WhyNZSection from "@/app/(pages)/Home/WhyNZSection";

export default function Home() {
    return (
        <div className="relative">
            <NZHero />
            <WhyNZSection/>
            <NZServices/>
            <NZPopularPrograms/>
        </div>
    );
}