import React from "react";
import { HeroNews } from "./news/heroNews";
import SubNews from "./news/subNews";

const NewsSection = () => {
    return (
        <div className="py-8 bg-white px-52 md:px-20 flex border-1 border-t">
            <HeroNews />
            <SubNews />
        </div>
    );
};

export default NewsSection;
