import React from "react";

const data = [
    {
        title: "Эрүүгийн хэргийн анхан шатны шүүхийн",
        subtitle: "Тогтоол",
    },
    {
        title: "Иргэний хэргийн анхан шатны шүүхийн",
        subtitle: "Шийдвэр",
    },
    {
        title: "Захиргааны хэргийн анхан шатны шүүхийн",
        subtitle: "Шийдвэр",
    },
    {
        title: "Эрүүгийн хэргийн давж заалдах шатны шүүхийн",
        subtitle: "Магадлал",
    },
    {
        title: "Иргэний хэргийн давж заалдах шатны шүүхийн",
        subtitle: "Магадлал",
    },
    {
        title: "Захиргааны хэргийн давж заалдах шатны шүүхийн",
        subtitle: "Магадлал",
    },
    {
        title: "Эрүүгийн хэргийн хяналтын шатны шүүх",
        subtitle: "Тогтоол",
    },
    {
        title: "Иргэний хэргийн хяналтын шатны шүүхийн",
        subtitle: "Тогтоол",
    },
    {
        title: "Захиргааны хэргийн хяналтын шатны шүүхийн",
        subtitle: "Тогтоол",
    },
];

const JudgementNewsAnalyze = () => {
    return (
        <div className="py-7 bg-white px-52 md:px-20 border-1 border-t">
            <div>
                <div className="flex gap-3">
                    <p className="font-semibold text-lg">
                        Шүүх хуралдааны мэдээ
                    </p>
                    <a
                        href="#live.shuuh"
                        className="font-semibold cursor-pointer text-lg hover:text-bluePanda"
                    >
                        /www.
                        <span className="text-yellowPanda">live</span>
                        .shuukh.mn/
                    </a>
                </div>
                <div className="grid grid-cols-1 text-white font-semibold sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                    <div className="border flex justify-between items-center px-8 py-7 rounded-3xl shadow-sm hover:shadow-lg bg-bluePanda transition-shadow">
                        <p className="text-sm ">Товлосон зарласан</p>
                        <h3 className="font-semibold text-md mb-1">238686</h3>
                    </div>
                    <div className="border flex justify-between items-center px-8 py-7 rounded-3xl shadow-sm hover:shadow-lg bg-bluePanda transition-shadow">
                        <p className="text-sm">Яг одоо үргэлжилж байгаа</p>
                        <h3 className="font-semibold text-md mb-1">209614</h3>
                    </div>
                    <div className="border flex justify-between items-center px-8 py-7 rounded-3xl shadow-sm hover:shadow-lg bg-bluePanda transition-shadow">
                        <p className="text-sm">Дууссан </p>
                        <h3 className="font-semibold text-md mb-1">238686</h3>
                    </div>
                </div>
            </div>
            <div className="mt-14">
                <div className="flex gap-3">
                    <p className="font-semibold text-lg">
                        Шүүх хуралдааны мэдээ
                    </p>
                    <a
                        href="#live.shuuh"
                        className="font-semibold cursor-pointer text-lg hover:text-bluePanda"
                    >
                        /www.
                        <span className="text-yellowPanda">live</span>
                        .shuukh.mn/
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                    {data.map((office, index) => (
                        <div
                            key={index}
                            className=" flex justify-between items-center px-8 py-7 rounded-3xl shadow-sm hover:shadow-lg bg-[#E8E8E8] transition-shadow "
                        >
                            <p className="text-sm mb-1 flex-1">
                                {office.title}
                            </p>
                            <p className="text-2xl font-bold flex justify-end text-bluePanda flex-1">
                                {office.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-14">
                <div className="flex gap-3">
                    <p className="font-semibold text-lg">
                        Иргэдийн төлөөлөгчийн оролцооны мэдээ
                    </p>
                </div>
                <div className="grid grid-cols-1 text-white font-semibold sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                    <div className="border flex justify-between items-center px-8 py-7 rounded-3xl shadow-sm hover:shadow-lg bg-bluePanda transition-shadow">
                        <p className="text-sm ">
                            Батлагдсан иргэдийн төлөөлөгч
                        </p>
                        <h3 className="font-semibold text-md mb-1">22885</h3>
                    </div>
                    <div className="border flex justify-between items-center px-8 py-7 rounded-3xl shadow-sm hover:shadow-lg bg-bluePanda transition-shadow">
                        <p className="text-sm">Хуралд оролцсон тоо</p>
                        <h3 className="font-semibold text-md mb-1">3258</h3>
                    </div>
                    <div className="border flex justify-between items-center px-8 py-7 rounded-3xl shadow-sm hover:shadow-lg bg-bluePanda transition-shadow">
                        <p className="text-sm">Нөөцөд үлдсэн тоо</p>
                        <h3 className="font-semibold text-md mb-1">17554</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JudgementNewsAnalyze;
