"use client";

import { useState } from "react";

export default function FlatFormItem() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group responsive-flatforms-item-bg">
      <img
        className="h-full w-full z-20 opacity-0 group-hover:opacity-100 transition-all origin-center duration-1000 ease-linear absolute inset-0 "
        src="/hover-fp.svg"
      />
      {/* Backgroud */}
      <div className="w-full z-10 h-full rounded-sm overflow-hidden absolute inset-0">
        <img
          className="h-full z-10 w-full absolute object-cover inset-0"
          src="/bg-flatform.png"
          alt="Background"
        />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[20px] text-white font-semibold">
          PlayStation 5
        </div>
      </div>
      {/* Content */}
      <div
        className="responsive-flatforms-item-content group-hover:scale-105 group-hover:-translate-y-9 transition-transform duration-1000 absolute left-1/2 -translate-y-10 -translate-x-1/2 z-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ảnh tối (mặc định) */}
        <img
          className={`h-full w-full absolute object-cover transition-opacity duration-1000 ${
            isHovered ? "opacity-30" : "opacity-100"
          }`}
          src="/ps5-hover.webp"
          alt="PlayStation 5 Dark"
        />
        {/* Ảnh sáng (hover) */}
        <img
          className={`h-full w-full absolute object-cover transition-opacity duration-1000 ${
            isHovered ? "opacity-100" : "opacity-30"
          }`}
          src="/ps5.webp"
          alt="PlayStation 5 Light"
        />
      </div>
    </div>
  );
}
