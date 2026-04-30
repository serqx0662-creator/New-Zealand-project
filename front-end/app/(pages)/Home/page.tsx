import NZHero from "@/app/(pages)/Home/NZHero";
import WhyNZSection from "./WhyNZSection";
import NZServices from "@/app/(pages)/Home/NZServices";
import NZPopularPrograms from "@/app/(pages)/Home/NZPopularPrograms";

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