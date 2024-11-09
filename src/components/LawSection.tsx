import React from "react";

const LawSection = () => {
    return (
        <div className="bg-[#F0F2F5] text-white md:text-sm text-center py-4 px-52 md:px-20 overflow-hidden border-1 border-t">
            <div className="flex items-center">
                <p className="text-blue-500">Монгол улсын үндсэн хууль</p>
                <span className="mx-2 text-blue-500">|</span>
                <div className="w-full overflow-hidden">
                    <p className="text-black whitespace-nowrap animate-marquee">
                        4.Шүүхийн ерөнхий зөвлөл шүүх, шүүгчийн шүүн таслах
                        ажиллагаанд оролцохгүйгээр, гагцхүү хуульчдаас шүүгчийг
                        шилж олох, эрх ашгийг нь хамгаалах зэрэг шүүхийг бие
                        даан ажиллах нөхцөлөөр хангахтай холбогдсон үүргийг
                        биелүүлнэ. - 4.Шүүхийн ерөнхий зөвлөл шүүх, шүүгчийн
                        шүүн таслах ажиллагаанд оролцохгүйгээр, гагцхүү
                        хуульчдаас шүүгчийг шилж олох, эрх ашгийг нь хамгаалах
                        зэрэг шүүхийг бие даан ажиллах нөхцөлөөр хангахтай
                        холбогдсон үүргийг биелүүлнэ.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LawSection;
