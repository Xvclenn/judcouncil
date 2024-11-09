import React from "react";
import { FaAngleDown } from "react-icons/fa";

const MediationModal = () => {
    return (
        <button className="flex items-center gap-2 hover:text-bluePanda transition">
            <p>Эвлэрүүлэн зуучлал</p>
            <span>
                <FaAngleDown size={24} />
            </span>
        </button>
    );
};

export default MediationModal;
