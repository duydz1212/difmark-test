"use client";

import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { PiShoppingCartBold } from "react-icons/pi";
import { PiSignInBold } from "react-icons/pi";
import NavCategories from "./NavCategories";

export default function DifmarkNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-o z-50 transition-all duration-1000 flex justify-center w-full `}
    >
      {/* Main */}
      <div
        className={`flex justify-center gap-x-3 transition-all duration-700 ease-out ${
          isScrolled
            ? "translate-y-0 w-full bg-[#202835]/80 backdrop-blur-xl"
            : "990:translate-y-5 rounded-lg w-full 990:w-nav bg-[#202835]"
        }`}
      >
        <div className="py-10 px-4 h-10 w-full flex items-center justify-center responsive-nav">
          {/* Logo */}
          <img className="w-[130px] h-[30px]" src="./Difmark-logo.png" />
          {/* Chia */}
          <div className="h-7 w-[0.5px] bg-[#373d4a]"></div>
          {/* Center Navigation - Search Bar */}
          <div className="770:flex flex-1 hidden items-center mx-6">
            <div className="bg-[#354051] flex rounded-lg p-[2px] w-full">
              {/* Categories Dropdown */}
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <button className="bg-[#2b3545] text-[#9ba1ab] hover:text-[#f6f6f6] transition-all duration-500 flex gap-x-2 items-center text-[16px] px-4 py-1 rounded-lg flex-shrink-0">
                    <span className="1000:inline hidden">All Categories</span>
                    <AiOutlineAppstore
                      size={24}
                      className="1000:hidden inline"
                    />
                    <BiSolidDownArrow
                      size={12}
                      className="transition-transform duration-500"
                      style={{
                        transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </button>
                </PopoverTrigger>
                {/* All Categories */}
                <PopoverContent className="bg-[#262c3a]/90 w-fit p-0 backdrop-blur-sm rounded-lg absolute top-5 -left-[76px] border-none">
                  <NavCategories />
                </PopoverContent>
              </Popover>

              {/* Search - Takes up remaining space */}
              <div className="relative text-[#9ba1ab] flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="bg-[#354051] px-4 py-2 caret-white text-white cursor-text focus:outline-none w-full"
                />
                {!inputValue && (
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-x-1 items-center pointer-events-none">
                    Search by
                    <b>Product</b>
                  </div>
                )}
              </div>

              {/* Icon Search */}
              <div className="py-1 px-5 flex items-center font-bold rounded-lg bg-[#2b3545] text-[#636b79] flex-shrink-0">
                <IoSearch size={20} />
              </div>
            </div>
          </div>
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            {/* Chia */}
            <div className="h-7 w-[0.5px] bg-[#373d4a]"></div>
            <button
              className={`text-slate-300 hover:text-white transition-all duration-300 relative ${
                isScrolled ? "p-2" : "p-2.5"
              }`}
            >
              <PiShoppingCartBold className="text-[#9ba1ab]" size={24} />
            </button>
            {/* Chia */}
            <div className="h-7 w-[0.5px] bg-[#373d4a]"></div>

            {/* Sign In Button */}

            <button className="flex hover:text-white transition-color duration-500 items-center py-4 px-2 gap-x-2 text-[#9ba1ab]">
              <PiSignInBold size={24} />
              <span>SIGH IN</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
