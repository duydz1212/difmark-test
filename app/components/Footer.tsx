import { BiLogoFacebook } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FaMoneyBills } from "react-icons/fa6";
import { BsTranslate } from "react-icons/bs";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import { IoLogoWechat } from "react-icons/io5";
import { FaGooglePay } from "react-icons/fa6";
import { FaAmazonPay } from "react-icons/fa";
import { SiFampay } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { AiOutlineAlipay } from "react-icons/ai";
import { SiPaytm } from "react-icons/si";
import { TbBrandPaypay } from "react-icons/tb";
import { SiSamsungpay } from "react-icons/si";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { SiAfterpay } from "react-icons/si";
import { SiPayloadcms } from "react-icons/si";

export default function Footer() {
  return (
    <div className="bg-[#11151a] w-full flex justify-center">
      <div className=" responsive text-white w-full py-8">
        <div className="1025:flex-row flex-col flex mb-8 justify-between">
          <div className="flex justify-between 1025:justify-normal 1025:gap-x-20 1200:gap-x-40">
            <div className="flex flex-col gap-y-5">
              <div className="text-[16px] font-bold mb-2">DIFMARK</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="text-[16px] font-bold mb-2">DIFMARK</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="text-[16px] font-bold mb-2">DIFMARK</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
              <div className="text-[14px] text-[#9BA1AB] ">About us</div>
            </div>
          </div>
          {/* Chia */}
          <div className="1025:hidden block my-8 h-7 h-[1px] bg-[#373d4a]"></div>
          <div className="flex text-[#c0c3c9] justify-between 1025:justify-normal flex-row 1025:flex-col gap-y-24">
            {/* Social Icon */}
            <div className="flex gap-x-7">
              <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-[#354051]">
                <BsDiscord size={24} />
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-[#354051]">
                <IoLogoYoutube size={24} />
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-[#354051]">
                <BsTwitterX size={24} />
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-[#354051]">
                <BiLogoFacebook size={24} />
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-[#354051]">
                <FaInstagram size={24} />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div>
                <div className="flex gap-x-2 items-center">
                  <GrLocation size={22} />
                  <span>Asia</span>
                </div>
              </div>

              <div>
                <div className="flex gap-x-2 items-center">
                  <div className="h-7 w-[0.5px] bg-[#373d4a]"></div>
                  <FaMoneyBills size={22} />
                  <span>USD</span>
                </div>
              </div>

              <div>
                <div className="flex gap-x-2 items-center">
                  <div className="h-7 w-[0.5px] bg-[#373d4a]"></div>
                  <BsTranslate size={22} />
                  <span>EN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Chia */}
        <div className="h-7 h-[1px] mb-3 bg-[#373d4a]"></div>
        {/* Pay Icon */}
        <div className="1200:flex hidden items-center gap-x-4">
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <RiVisaLine size={48} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <SiMastercard size={34} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <IoLogoWechat size={28} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <FaGooglePay size={34} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <FaAmazonPay size={34} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <SiFampay size={24} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <BsPaypal size={24} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <AiOutlineAlipay size={24} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <SiPaytm size={30} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <TbBrandPaypay size={28} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <SiSamsungpay size={32} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <PiContactlessPaymentFill size={28} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <SiAfterpay size={28} />
          </div>
          <div className="h-10 1920:w-[100px] 1640:w-[80px] w-[68px] flex items-center justify-center rounded-sm bg-[#354051]">
            <SiPayloadcms size={28} />
          </div>
        </div>
        {/* Chia */}
        <div className="h-7 mt-3 h-[1px] bg-[#373d4a]"></div>
        {/* Note Footer */}
        <div className="w-full mt-5 flex justify-between">
          <div className="text-[#9BA1AB] max-w-[310px] text-[14px] font-semibold">
            DISCLAIMER:{" "}
            <span className="text-[12px] font-base">
              Trademarks, names, images, and any copyrighted materials,
              displayed on marketplace solely as a venue platform, are the
              property of their respective owners.
            </span>
          </div>
          <div className="text-[12px] text-white max-w-[324px] text-right">
            Accepting more than 300 payment methods
            <br />
            ©Technical platform (solution) is provided by&nbsp;
            Difmark&nbsp;2025
          </div>
        </div>
      </div>
    </div>
  );
}
