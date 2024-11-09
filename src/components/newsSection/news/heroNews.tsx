import Image from "next/image";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const HeroNews = () => {
    return (
        <div className=" w-fit p-2 flex flex-col gap-5 flex-[1] border-r-[1px]">
            <Image
                src="/heroNews.png"
                alt="heroNews"
                width={700}
                height={100}
            />
            <div>
                <p className="text-sm w-[50%] font-bold">
                    Шүүхийн байр барихад 71 тэрбум төгрөг төсөвт суулгах саналыг
                    Хууль зүйн байнгийн хороо дэмжив
                </p>
            </div>
            <div className="flex items-center text-sm text-slate-400 gap-2">
                <div className="flex items-center gap-1">
                    <MdOutlineRemoveRedEye />
                    <p>409</p>
                </div>
                <p>|</p>
                <div className="flex items-center gap-1">
                    <IoTimeOutline />
                    <p>2024-10-22</p>
                </div>
            </div>
        </div>
    );
};
