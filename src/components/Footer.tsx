import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="bg-bluePanda flex justify-between items-center text-white md:text-sm py-8 px-52 md:px-20">
            <div className="flex flex-1 items-start gap-2">
                <IoLocationOutline size={24} className="md:w-5" />

                <p className="">
                    Монгол Улс, Улаанбаатар хот, Чингэлтэй дүүрэг, 5 дугаар
                    хороо, Тасганы овоо, Шүүхийн ерөнхий зөвлөл, Зип - 15170
                </p>
            </div>
            <div className="flex flex-1 justify-end gap-52">
                <div className="flex items-start gap-2">
                    <SlPhone size={20} className="md:w-5" />

                    <p className="">7710-4949</p>
                </div>
                <div className="flex align-middle items-start gap-2">
                    <MdOutlineEmail size={24} className="md:w-5" />

                    <p className="">contact@judcouncil.mn</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
