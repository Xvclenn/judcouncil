import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const subNews = [
    {
        title: "Журмын төсөл боловсруулах ажлын хэсэг хуралдлаа",
        imageUrl: "/subNews6.png",
        viewerCount: 849,
        date: "2024-10-24",
    },
    {
        title: "Монгол Улсын шүүхийн 2024 оны хагас жилийн шүүн таслах ажиллагааны дүн мэдээ хураангуй",
        imageUrl: "/subNews7.png",
        viewerCount: 251,
        date: "2024-10-23",
    },
    {
        title: "Анхан шатны шүүхийн шүүгчийн сонгон шалгаруулалтад нэр дэвшигчдийн танилцуулга (31-43)",
        imageUrl: "/subNews8.png",
        viewerCount: 1168,
        date: "2024-10-23",
    },
    {
        title: "Анхан шатны шүүхийн шүүгчийн сонгон шалгаруулалтад нэр дэвшигчдийн танилцуулга (21-30)",
        imageUrl: "/subNews9.png",
        viewerCount: 523,
        date: "2024-10-23",
    },
    {
        title: "Анхан шатны шүүхийн шүүгчийн сонгон шалгаруулалтад нэр дэвшигчдийн танилцуулга (11-20)",
        imageUrl: "/subNews8.png",
        viewerCount: 954,
        date: "2024-10-23",
    },
];

const SubJudgeNews = () => {
    return (
        <div className="py-2 flex gap-1 ">
            {subNews.map((news, index) => (
                <div
                    key={index}
                    className="bg-white flex-1 p-2 flex overflow-hidden mb-3"
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

export default SubJudgeNews;
