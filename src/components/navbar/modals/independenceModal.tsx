import React from "react";
import { FaAngleDown } from "react-icons/fa";

const IndependenceModal = () => {
    return (
        <button className="flex items-center gap-2 hover:text-bluePanda transition">
            <p>Хараат бус байдал</p>
            <span>
                <FaAngleDown size={24} />
            </span>
        </button>
    );
};

export default IndependenceModal;
