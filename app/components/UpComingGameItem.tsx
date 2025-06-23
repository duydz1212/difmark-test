"use client";

import { useRef, useState } from "react";
import { BsPersonFillCheck } from "react-icons/bs";
import { BsBasket3Fill } from "react-icons/bs";

export default function PopularGameItem() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative w-1/3  h-[300px]">
      <div
        className="[width:calc(100%-15px)] cursor-pointer absolute top-1/2 group -translate-y-1/2 left-1/2 -translate-x-1/2 hover:h-[300px] group transition-all duration-700 h-[275px] rounded-lg overflow-hidden bg-[#131B25] flex flex-col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex-1">
          {/* Main Image */}
          <img
            className={`absolute inset-0 w-full h-full object-cover overflow-hidden transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            } `}
            src="/product1.png"
          />
          {/* Video */}
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            src="/video/product1.webm"
            muted
            loop
            playsInline
          />
          <div className="overflow-hidden group relative">
            <div className=" absolute inset-0 bg-green-500 -translate-x-full duration-1000 transition group-hover:translate-x-0 h-20 w-40 ">
              Add to card
            </div>
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="w-full relative gap-x-2 w-full backdrop-blur-sm bg-[#212937]/30 h-[65px] flex items-center px-4">
              {/* Info */}
              {/* Avatar */}
              <img
                className="h-[30px] w-[30px] rounded-full overflow-hidden"
                src="/avt1.png"
              />
              <div className="flex flex-col">
                <div className="flex  text-[#f6f6f6] gap-x-1 items-center">
                  <span className="  text-[12px] ">Eassy-key</span>
                  <BsPersonFillCheck size={15} />
                </div>
                <span className="text-[#c0c3c9] text-[10px]">
                  Rank: 🦄 Legendacy
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="w-full h-[57px] transition-color duration-500 group-hover:bg-[#2A3240] bg-[#212937] flex px-2 justify-between items-center">
          <span className="text-white text-xl font-semibold inline-block">
            Deliver At All Costs
          </span>
          <span className="text-white text-xl font-semibold inline-block">
            $38.30
          </span>
        </div>
      </div>
    </div>
  );
}
