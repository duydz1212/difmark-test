"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

// Mock icons since we can't import react-icons
const BsPersonFillCheck = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
  </svg>
);

const BsBasket3Fill = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9zM7.5 13a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0zm3-2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5" />
  </svg>
);

export default function PopularGameItem() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const addToCardRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const cardHoverRef = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Khởi tạo timeline
    tl.current = gsap.timeline({ paused: true });

    // Thiết lập animation sequence
    tl.current
      .to(
        containerRef.current,
        {
          height: "300px",
          duration: 0.7,
          ease: "power2.out",
        },
        0
      )
      .to(
        imageRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
      .to(
        videoRef.current,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        0.1
      )
      .to(
        addToCardRef.current,
        {
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
        0.2
      )
      .to(
        cardHoverRef.current,
        {
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
        0.2
      )
      .to(
        footerRef.current,
        {
          backgroundColor: "#2A3240",
          duration: 0.5,
          ease: "power2.out",
        },
        0.3
      );

    // Cleanup
    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
    if (tl.current) {
      tl.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (tl.current) {
      tl.current.reverse();
    }
  };

  return (
    <div className="relative w-full max-w-[416px] h-[300px] mx-auto">
      <div
        ref={containerRef}
        className="w-full cursor-pointer absolute top-1/2 group -translate-y-1/2 left-1/2 -translate-x-1/2 h-[275px] rounded-lg overflow-hidden bg-[#131B25] flex flex-col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex-1">
          {/* Main Image */}
          <img
            ref={imageRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/product1.png"
            alt="Game preview"
          />

          {/* Video */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-0"
            src="/video/product1.webm"
            muted
            loop
            playsInline
          />

          {/* Green overlay animation */}
          <div className="overflow-hidden relative">
            <div
              ref={addToCardRef}
              className="absolute inset-0 bg-green-500 h-20 w-40 flex items-center justify-center text-white font-bold"
              style={{ transform: "translateX(-100%)" }}
            >
              Add to cart
            </div>
          </div>

          <div className="absolute bottom-0 w-full">
            <div className="w-full relative gap-x-2 backdrop-blur-sm bg-[#212937]/30 h-[65px] flex items-center px-4">
              {/* Info */}
              {/* Avatar */}
              <img
                className="h-[30px] w-[30px] rounded-full overflow-hidden"
                src="/avt1.png"
                alt="Avatar"
              />

              <div className="flex flex-col">
                <div className="flex text-[#f6f6f6] gap-x-1 items-center">
                  <span className="text-[12px]">Eassy-key</span>
                  <BsPersonFillCheck />
                </div>
                <span className="text-[#c0c3c9] text-[10px]">
                  Rank: 🦄 Legendacy
                </span>
              </div>

              {/* Add to Cart Hover */}
              <div
                ref={cardHoverRef}
                className="absolute inset-0 w-[200px]"
                style={{ transform: "translateX(-100%)" }}
              >
                <div className="w-full h-full relative">
                  <img
                    className="w-full h-full object-cover"
                    src="/card-hover.png"
                    alt="Card hover background"
                  />
                  <div className="absolute inset-0 h-full w-full text-[#F6F6F6] text-[14px] flex gap-x-3 px-5 font-bold items-center">
                    <BsBasket3Fill />
                    <span>ADD TO CARD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          ref={footerRef}
          className="w-full h-[57px] bg-[#212937] flex px-2 justify-between items-center"
        >
          <span className="text-white text-xl font-semibold">
            Deliver At All Costs
          </span>
          <span className="text-white text-xl font-semibold">$38.30</span>
        </div>
      </div>
    </div>
  );
}
