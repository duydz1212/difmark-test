import { HiShieldCheck } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function AboutUS1() {
  return (
    <div className="h-[156px] flex items-center justify-center text-center z-50 relative w-full">
      <img
        className="h-full z-10 w-full absolute inset-0 object-cover"
        src="/about-us-1.webp"
        alt="About Us"
      />
      <div className="relative w-full max-w-[940px] 1200:max-w-[1140px] 1640:max-w-[1310px] 1920:max-w-[1590px] h-full flex z-20 ">
        <div
          style={{
            maskImage: `linear-gradient(to right, transparent 0%,black 8% , black 92%, transparent 100%)`,
          }}
          className=" relative w-1/3 h-full group"
        >
          <img
            className="h-full w-full z-10 opacity-0 group-hover:opacity-100 transition-all origin-center duration-1000 ease-out absolute inset-0 object-cover"
            src="/hover-ab-1.webp"
          />
          <div className="relative w-full h-full z-20 justify-center items-center flex flex-col">
            <div className="h-[56px] mb-3 text-[#bebebe] shadow-custom rounded-lg w-[56px] flex justify-center items-center ">
              <HiShieldCheck size={30} />
            </div>
            <h3 className="text-[18px] text-[#f6f6f6] font-semibold">
              Buyer Protection
            </h3>
            <span className="text-[14px] text-[#C0C3C9]">
              Secure transactions and personal data
            </span>
          </div>
        </div>
        <div
          style={{
            maskImage: `linear-gradient(to right, transparent 0%,black 8% , black 92%, transparent 100%)`,
          }}
          className=" relative w-1/3 h-full group"
        >
          <img
            className="h-full w-full z-10 opacity-0 group-hover:opacity-100 transition-all origin-center duration-1000 ease-out absolute inset-0 object-cover"
            src="/hover-ab-3.webp"
          />
          <div className="relative h-full z-20 justify-center items-center flex flex-col">
            <div className="h-[56px] mb-3 text-[#bebebe] shadow-custom rounded-lg w-[56px] flex justify-center items-center ">
              <FaCreditCard size={28} />
            </div>
            <h3 className="text-[18px] text-[#f6f6f6] font-semibold">
              Buyer Protection
            </h3>
            <span className="text-[14px] text-[#C0C3C9]">
              Secure transactions and personal data
            </span>
          </div>
        </div>
        <div
          style={{
            maskImage: `linear-gradient(to right, transparent 0%,black 8% , black 92%, transparent 100%)`,
          }}
          className=" relative w-1/3 h-full group"
        >
          <img
            className="h-full w-full z-10 opacity-0 group-hover:opacity-100 transition-all origin-center duration-1000 ease-out absolute inset-0 object-cover"
            src="/hover-ab-2.webp"
          />
          <div className="relative h-full z-20 justify-center items-center flex flex-col">
            <div className="h-[56px] mb-3 text-[#bebebe] shadow-custom rounded-lg w-[56px] flex justify-center items-center ">
              <IoPerson size={28} />
            </div>
            <h3 className="text-[18px] text-[#f6f6f6] font-semibold">
              Buyer Protection
            </h3>
            <span className="text-[14px] text-[#C0C3C9]">
              Secure transactions and personal data
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
