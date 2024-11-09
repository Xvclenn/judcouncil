import React from "react";
import { FaAngleDown } from "react-icons/fa";

const LegalModal = () => {
    return (
        <button className="flex items-center gap-2 hover:text-bluePanda transition">
            <p>Эрх зүйн акт</p>
            <span>
                <FaAngleDown size={24} />
            </span>
        </button>
    );
};

export default LegalModal;
