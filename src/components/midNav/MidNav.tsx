"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Contacts from "./modals/contacts";

const MidNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-bluePanda text-white md:text-sm md:px-20 font-bold px-52 py-5 flex justify-between items-center">
            <div className="flex items-center gap-[17px] text-base">
                <Link href="#suggestions">Санал, хүсэлт</Link>
                <Link href="#contact">
                    <Contacts />
                </Link>
                <Link href="#stats">Шүүхийн статистик</Link>
                <Link href="#research">Судалгааны сан</Link>
            </div>

            <div className="flex items-center gap-[17px]">
                <Link href="mailto:info@example.com">
                    <Image src="/mail1.svg" width={24} height={24} alt="mail" />
                </Link>
                <Link href="https://facebook.com" target="_blank">
                    <Image
                        src="/facebook1.svg"
                        width={24}
                        height={24}
                        alt="mail"
                    />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                    <Image
                        src="/twitter1.svg"
                        width={24}
                        height={24}
                        alt="mail"
                    />
                </Link>
                <Link href="https://example.com/video" target="_blank">
                    <Image src="/yt1.svg" width={24} height={24} alt="mail" />
                </Link>
            </div>
        </nav>
    );
};

export default MidNav;
