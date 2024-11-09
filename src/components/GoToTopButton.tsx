"use client";

import { useEffect, useState } from "react";
import { LuArrowUpToLine } from "react-icons/lu";

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-10 flex justify-center items-center p-2 w-10 h-10 bg-white text-[#B5B5B5] hover:text-bluePanda"
            >
                <LuArrowUpToLine size={25} />
            </button>
        )
    );
};

export default GoToTopButton;
