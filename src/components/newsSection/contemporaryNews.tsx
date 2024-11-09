import React from "react";
import SubContemporaryNews from "./news/subContemporaryNews";

const ContemporaryNews = () => {
    return (
        <div className="py-7 bg-white px-52 md:px-20 border-1 border-t">
            <div className="flex justify-between">
                <p className="font-semibold text-lg">Цаг үеийн мэдээ</p>
                <p className="font-semibold text-lg">Бусад</p>
            </div>
            <SubContemporaryNews />
        </div>
    );
};

export default ContemporaryNews;
