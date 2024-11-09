import React from "react";
import SubJudgeNews from "./news/subJudgeNews2";

const JudgeNews2 = () => {
    return (
        <div className="py-7 bg-white px-52 md:px-20 border-1 border-t">
            <div className="flex justify-between">
                <p className="font-semibold text-lg">Шүүхийн статистик</p>
                <p className="font-semibold text-lg">Бусад</p>
            </div>
            <SubJudgeNews />
        </div>
    );
};

export default JudgeNews2;
