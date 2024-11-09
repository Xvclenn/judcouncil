import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const subNews = [
    {
        title: "Тусгайлсан журмаар хэрэг хянан шийдвэрлэх ажиллагааны нэхэмжлэлийн загварыг шинээр байршууллаа",
        imageUrl: "/subNews6.png",
        viewerCount: 699,
        date: "2024-10-24",
    },
    {
        title: "Иргэн таньд 2024 оны 10 дугаар сарын 01-ний өдрөөс хэрэгжиж эхэлсэн “Тусгайлсан журмаар хянан шийдвэрлэх ажиллагаа”-ны танилцуулга цуврал видеог хүргэж байна",
        imageUrl: "/subNews7.png",
        viewerCount: 450,
        date: "2024-10-23",
    },
    {
        title: "Архангай:Дотоод сургалт зохион байгууллаа",
        imageUrl: "/subNews8.png",
        viewerCount: 235,
        date: "2024-10-23",
    },
    {
        title: "Архангай:Ахмадууддаа хүндэтгэл үзүүллээ",
        imageUrl: "/subNews9.png",
        viewerCount: 255,
        date: "2024-10-23",
    },
    {
        title: "Дархан-Уул:Тоног төхөөрөмжийн шинэчлэлт хийлээ",
        imageUrl: "/subNews8.png",
        viewerCount: 226,
        date: "2024-10-23",
    },
];

const SubJudgeNews2 = () => {
    return (
        <div className="py-2 flex gap-1 ">
            {subNews.map((news, index) => (
                <div
                    key={index}
                    className={`bg-white flex-1 p-2 flex overflow-hidden mb-3 border-1 
                        ${index === subNews.length - 1 ? "" : "border-r"}`}
                >
                    <div className="flex flex-col justify-between">
                        {/* <img
                            src={news.imageUrl}
                            alt={news.title}
                            className="w-[250px] object-cover"
                        /> */}

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

export default SubJudgeNews2;
