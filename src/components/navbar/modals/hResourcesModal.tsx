import React from "react";
import { FaAngleDown } from "react-icons/fa";

const HResourcesModal = () => {
    return (
        <button className="flex items-center gap-2 hover:text-bluePanda transition">
            <p>Хүний нөөц</p>
            <span>
                <FaAngleDown size={24} />
            </span>
        </button>
    );
};

export default HResourcesModal;
