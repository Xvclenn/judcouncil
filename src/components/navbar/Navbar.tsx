"use client";

import { useState } from "react";
import { IoIosClose, IoIosSearch } from "react-icons/io";
import NewsModal from "./modals/newsModal";
import JudgeModal from "./modals/judgeModal";
import LegalModal from "./modals/legalModal";
import GlassAccountModal from "./modals/glassAccountModal";
import HResourcesModal from "./modals/hResourcesModal";
import MediationModal from "./modals/mediationModal";
import IndependenceModal from "./modals/independenceModal";
import IntroductionModal from "./modals/introductionModal";
import SearchInput from "./searchInput";

const Navbar: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleSearchClick = () => {
        setIsSearchActive(!isSearchActive);
    };

    const handleSearch = (query: string) => {
        console.log("Searching for:", query);
    };

    const toggleDropdown = (menu: string) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        <nav className="bg-white text-bluePanda-primary md:text-sm py-8 md:px-20 px-52 font-bold">
            <div className="flex align-middle items-center justify-between md:gap-3 gap-7">
                <div className="flex items-center">
                    <button
                        onClick={handleSearchClick}
                        className="text-bluePanda-primary"
                    >
                        {isSearchActive ? (
                            <IoIosClose
                                className="hover:text-bluePanda transition"
                                size={24}
                            />
                        ) : (
                            <IoIosSearch
                                className="hover:text-bluePanda transition"
                                size={20}
                            />
                        )}
                    </button>
                </div>

                {isSearchActive ? (
                    <SearchInput placeholder="Хайх" onSearch={handleSearch} />
                ) : (
                    <>
                        <NewsModal />
                        <IntroductionModal />
                        <JudgeModal />
                        <LegalModal />
                        <GlassAccountModal />
                        <HResourcesModal />
                        <MediationModal />
                        <IndependenceModal />
                        <button className="hover:text-bluePanda transition">
                            Шүүхийн цахимжуулалт
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
