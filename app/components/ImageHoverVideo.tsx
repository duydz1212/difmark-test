"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ImageHoverVideo() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Hover Video Gallery
        </h1>

        {/* Grid Layout với nhiều mẫu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Rounded corners */}
          <div className="group relative overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-y-110 hover:shadow-purple-500/25">
            <div
              className="relative w-full h-80 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Static Image */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  src="/your-image.jpg"
                  alt="Nature Beauty"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Video */}
              <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                src="/your-video.mp4"
                muted
                loop
                playsInline
              />
            </div>

            {/* Overlay với thông tin */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Beautiful Landscape
              </h3>
              <p className="text-gray-300 text-sm">
                Hover để xem video tuyệt đẹp
              </p>
            </div>
          </div>

          {/* Card 2 - Square design */}
          <div className="group relative overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
            <div className="relative w-full h-80 cursor-pointer">
              {/* Static Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 transition-transform duration-500 group-hover:scale-110">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h1a1 1 0 110 2H6a1 1 0 01-1-1zm6 1a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                      </svg>
                    </div>
                    <p className="font-semibold">City Life</p>
                  </div>
                </div>
              </div>

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center animate-spin">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                  <p className="font-semibold">Video đang phát...</p>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              HD Video
            </div>
          </div>

          {/* Card 3 - Với hiệu ứng đặc biệt */}
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-1">
            <div className="relative w-full h-80 cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-700 transition-all duration-700 group-hover:from-pink-500 group-hover:to-orange-500">
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Animated circles */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
                  </div>

                  <div className="text-center text-white z-10">
                    <div className="w-28 h-28 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <svg
                        className="w-12 h-12 group-hover:animate-spin"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-bold text-lg group-hover:animate-pulse">
                      Tech Innovation
                    </p>
                  </div>
                </div>
              </div>

              {/* Video State */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-l-white border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="font-bold text-lg animate-bounce">
                    🎬 Video Active!
                  </p>
                </div>
              </div>
            </div>

            {/* Progress bar giả */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
              <div className="h-full bg-gradient-to-r from-pink-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-[3s] origin-left"></div>
            </div>
          </div>
        </div>

        {/* Phần hướng dẫn */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              🎥 Cách sử dụng thật
            </h2>
            <div className="text-gray-300 space-y-2">
              <p>
                • Thay thế placeholder bằng ảnh thật:{" "}
                <code className="bg-black/30 px-2 py-1 rounded">
                  src="/your-image.jpg"
                </code>
              </p>
              <p>
                • Thay thế video placeholder bằng:{" "}
                <code className="bg-black/30 px-2 py-1 rounded">
                  &lt;video src="/your-video.mp4" /&gt;
                </code>
              </p>
              <p>
                • Tùy chỉnh hiệu ứng hover bằng cách thay đổi các class Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
