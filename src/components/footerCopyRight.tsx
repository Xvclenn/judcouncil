import React from "react";

const FooterCopyRight = () => {
    return (
        <footer className="bg-bluePanda-footer text-white md:text-sm text-right py-4 px-52 md:px-20">
            <p>
                Copyright &copy; {new Date().getFullYear()} - Шүүхийн ерөнхий
                зөвлөл.
            </p>
        </footer>
    );
};

export default FooterCopyRight;
