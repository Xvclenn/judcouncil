import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopNav = () => {
    return (
        <>
            <div className="flex justify-between py-8 md:px-20 px-52">
                <Link href="/">
                    <Image
                        src="/SHEZLOGO1.png"
                        alt="logo"
                        width={86.54}
                        height={90}
                        // style={{ height: "90px" }}
                    />
                </Link>
                <div className="flex flex-col items-center">
                    <p className="font-bold uppercase text-[28px] text-yellowPanda leading-[32.81px]">
                        МОНГОЛ УЛСЫН
                    </p>
                    <p className="font-bold uppercase text-[32px] text-bluePanda leading-[37.5px]">
                        ШҮҮХИЙН ЕРӨНХИЙ ЗӨВЛӨЛ
                    </p>
                    <p className="uppercase text-yellowPanda leading-[18.75px]">
                        THE JUDICIAL GENERAL COUNCIL OF MONGOLIA
                    </p>
                </div>
                <Link href="/">
                    <Image
                        src="/yellowlogo1.png"
                        alt="logo"
                        width={80}
                        height={90}
                        style={{ height: "90px" }}
                    />
                </Link>
            </div>
        </>
    );
};

export default TopNav;
