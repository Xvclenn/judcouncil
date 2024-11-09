import TopNav from "@/components/TopNav";
import Navbar from "../components/navbar/Navbar";
import MidNav from "@/components/midNav/MidNav";
import FooterCopyRight from "../components/footerCopyRight";
import Footer from "@/components/Footer";
import NewsSection from "@/components/newsSection/newsSection";
import LawSection from "@/components/LawSection";
import ContemporaryNews from "@/components/newsSection/contemporaryNews";
import JudgeNews from "@/components/newsSection/judgeNews";
import JudgeNews2 from "@/components/newsSection/judgeNews2";
import JudgementSection from "@/components/judgementLinksSection/JudgementSection";
import JudgementNewsAnalyze from "@/components/judgementNewsAnalyze.tsx/judgementNewsAnalyze";
import GoToTopButton from "@/components/GoToTopButton";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <GoToTopButton />
            <TopNav />
            <MidNav />
            <Navbar />
            <NewsSection />
            <LawSection />
            <ContemporaryNews />
            <JudgeNews />
            <JudgeNews2 />
            <JudgementSection />
            <JudgementNewsAnalyze />
            <Footer />
            <FooterCopyRight />
        </div>
    );
}
