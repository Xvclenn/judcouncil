import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const subNews = [
    {
        title: "Шүүгчийн сонгон шалгаруулалтад нэр дэвшигчдийг бүртгэлээ",
        imageUrl: "/subNews2.png",
        viewerCount: 764,
        date: "2024-10-23",
    },
    {
        title: "Анхан болон давж заалдах шатны шүүхийн шүүгчийн сонгон шалгарауулалтад нэр дэвшигчийн хууль зүйн мэдлэг, чадварыншалгалтын хуваарьтай танилцана уу ",
        imageUrl: "/subNews1.png",
        viewerCount: 365,
        date: "2024-10-23",
    },
];

const SubNews = () => {
    return (
        <div className="p-2 flex-[1]">
            {subNews.map((news, index) => (
                <div
                    key={index}
                    className="bg-white flex gap-5 items-center overflow-hidden mb-3"
                >
                    <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-[200px] object-cover"
                    />
                    <div>
                        <div className="">
                            <h3 className="text-sm font-semibold text-gray-800">
                                {news.title}
                            </h3>
                        </div>
                        <div className="flex items-center text-sm text-slate-400 gap-2">
                            <div className="flex items-center gap-1">
                                <MdOutlineRemoveRedEye />
                                <span>{news.viewerCount}</span>
                            </div>
                            <p>|</p>
                            <div className="flex items-center gap-1">
                                <IoTimeOutline />
                                <span>{news.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SubNews;
