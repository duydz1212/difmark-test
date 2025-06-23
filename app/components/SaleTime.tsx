import TimeDown from "./TimeDown";

export default function SaleTime() {
  return (
    <div className="w-full px-36 1100:block hidden">
      <div className="h-[280px] 1300:h-[380px] 1440:h-[455px] w-full flex items-center justify-center relative bg-slate-900">
        <img
          className="h-full w-full object-fit absolute z-0"
          src="/bg-time-sale.webp"
        />
        {/* Left */}
        {/* Left near */}
        <div className="absolute w-[320px] 1300:w-[450px] 1440:w-[520px] h-full -translate-x-[140px] 1300:-translate-x-[110px] 1440:-translate-x-[80px] top-0 bottom-0 left-0 flex">
          <div
            className="w-full z-50 relative h-full"
            style={{
              clipPath: "polygon(0 0, 50% 0, 100% 100%, 50% 100%)",
            }}
          >
            {/* Lớp phủ đen mờ */}
            {/* <div
              className="absolute inset-0 bg-[#171f2a] bg-opacity-0 transition-color duration-700 group-hover:bg-opacity-70 z-10"
              style={{
                clipPath: "polygon(0 0, 50% 0, 100% 100%, 50% 100%)",
              }}
            ></div> */}
            <img
              className="h-full z-20 ease-liner hover:scale-110 transition-transform duration-1000 w-full object-cover"
              src="/sale1.webp"
            />
            <div
              className="w-full absolute inset-0 bg-[#2b3545] h-full"
              style={{
                clipPath: "polygon(47% 0, 100% 0, 100% 100%, 97% 100%)",
              }}
            ></div>
          </div>
        </div>
        {/* Left far */}
        <div className="absolute w-[320px] 1300:w-[450px] 1440:w-[520px] h-full -translate-x-[310px] 1300:-translate-x-[350px] top-0 bottom-0 left-0 flex">
          <div
            className="w-full relative h-full"
            style={{
              clipPath: "polygon(0 0, 50% 0, 100% 100%, 50% 100%)",
            }}
          >
            <img
              className="hover:scale-110  ease-liner transition-transform duration-1000 h-full w-full object-cover"
              src="/sale1.webp"
            />
            <div
              className="w-full absolute inset-0 bg-[#2b3545] h-full"
              style={{
                clipPath: "polygon(47% 0, 100% 0, 100% 100%, 97% 100%)",
              }}
            ></div>
          </div>
        </div>

        <div className="text-white h-full flex items-center z-20">
          <TimeDown />
        </div>

        {/* Right */}
        {/* Right near */}
        <div className="absolute w-[320px] 1300:w-[450px] 1440:w-[520px] h-full translate-x-[140px] 1300:translate-x-[110px] top-0 bottom-0 right-0 flex">
          <div
            className="w-full relative h-full"
            style={{
              clipPath: "polygon(50% 0, 100% 0, 50% 100%, 0% 100%)",
            }}
          >
            <img className="h-full w-full object-cover" src="/sale1.webp" />
            <div
              className="w-full absolute inset-0 bg-[#2b3545] h-full"
              style={{
                clipPath: "polygon(0% 0, 53% 0, 3% 100%, 0% 100%)",
              }}
            ></div>
          </div>
        </div>
        {/* Right far */}
        <div className="absolute w-[320px] 1300:w-[450px] 1440:w-[520px] h-full translate-x-[310px] 1300:translate-x-[350px] top-0 bottom-0 right-0 flex">
          <div
            className="w-full relative h-full"
            style={{
              clipPath: "polygon(50% 0, 100% 0, 50% 100%, 0% 100%)",
            }}
          >
            <img className="h-full w-full object-cover" src="/sale1.webp" />
            <div
              className="w-full absolute inset-0 bg-[#2b3545] h-full"
              style={{
                clipPath: "polygon(0% 0, 53% 0, 3% 100%, 0% 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
