import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const subNews = [
    {
        title: "Хяналтын шатны шүүхийн шүүгчийн сонгон шалгаруулалтын бүртгэл дуусахад 3 хоног үлдлээ",
        imageUrl: "/subNews3.png",
        viewerCount: 764,
        date: "2024-10-24",
    },
    {
        title: "Давж заалдах шатны шүүхийн шүүгчийн сонгон шалгаруулалтад нэр дэвшигчдийн танилцуулга",
        imageUrl: "/subNews4.png",
        viewerCount: 365,
        date: "2024-10-23",
    },
    {
        title: "Анхан шатны шүүхийн шүүгчийн сонгон шалгаруулалтад нэр дэвшигчдийн танилцуулга (31-43)",
        imageUrl: "/subNews5.png",
        viewerCount: 365,
        date: "2024-10-23",
    },
    {
        title: "Анхан шатны шүүхийн шүүгчийн сонгон шалгаруулалтад нэр дэвшигчдийн танилцуулга (21-30)",
        imageUrl: "/subNews5.png",
        viewerCount: 365,
        date: "2024-10-23",
    },
    {
        title: "Анхан шатны шүүхийн шүүгчийн сонгон шалгаруулалтад нэр дэвшигчдийн танилцуулга (11-20)",
        imageUrl: "/subNews5.png",
        viewerCount: 365,
        date: "2024-10-23",
    },
];

const SubContemporaryNews = () => {
    return (
        <div className="py-2 flex gap-1 ">
            {subNews.map((news, index) => (
                <div
                    key={index}
                    className={`bg-white flex-1 p-2 flex overflow-hidden mb-3 border-1 
                        ${index === subNews.length - 1 ? "" : "border-r"}`}
                >
                    <div className="flex flex-col justify-between">
                        <img
                            src={news.imageUrl}
                            alt={news.title}
                            className="w-[250px] object-cover"
                        />

                        <div className="w-[250px]">
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

export default SubContemporaryNews;
