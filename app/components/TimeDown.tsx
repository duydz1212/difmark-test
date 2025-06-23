"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 1,
    minutes: 32,
    seconds: 48,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime: TimeLeft) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Timer finished
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex h-full py-10 flex-col group justify-center items-center gap-y-2">
      <h1 className="text-[35px] text-center text-white font-bold">
        BEST DEALS OF THE WEEK
      </h1>
      <span className="text-[16px] max-w-[450px] text-center font-medium text-[#babeba]">
        Do not miss the best offer of the week. Great discounts, nice prices and
        nice bonuses
      </span>
      <div className="h-[90px] mt-10 w-full relative">
        {/* TIME */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  opacity-100 ease-out group-hover:opacity-0 transition-all duration-1000 flex justify-center gap-x-6
      "
        >
          <div className="h-[90px] relative w-[64px] overflow-hidden rounded-lg bg-[#2b3545]">
            <div className="text-center pt-3">
              <span className="text-[34px] font-semibold">
                {formatNumber(timeLeft.hours)}
              </span>
            </div>
            <div className="absolute text-sm text-[#9b9fa5] bottom-0 bg-[#354051] flex items-center justify-center w-full h-[20px]">
              <span>Hours</span>
            </div>
          </div>
          <div className="text-[30px] flex items-center text-[#969da7]">
            <span>:</span>
          </div>
          <div className="h-[90px] relative w-[64px] overflow-hidden rounded-lg bg-[#2b3545]">
            <div className="text-center pt-3">
              <span className="text-[34px] font-semibold">
                {formatNumber(timeLeft.minutes)}
              </span>
            </div>
            <div className="absolute text-sm text-[#9b9fa5] bottom-0 bg-[#354051] flex items-center justify-center w-full h-[20px]">
              <span>Minutes</span>
            </div>
          </div>
          <div className="text-[30px] flex items-center text-[#969da7]">
            <span>:</span>
          </div>
          <div className="h-[90px] relative w-[64px] overflow-hidden rounded-lg bg-[#2b3545]">
            <div className="text-center pt-3">
              <span className="text-[34px] font-semibold">
                {formatNumber(timeLeft.seconds)}
              </span>
            </div>
            <div className="absolute text-sm text-[#9b9fa5] bottom-0 bg-[#354051] flex items-center justify-center w-full h-[20px]">
              <span>Seconds</span>
            </div>
          </div>
        </div>
        {/* Button  */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 ease-out group-hover:opacity-100 transition-all duration-1000 ">
          <div className="relative bg-[#46ca43]  w-[260px] text-white flex items-center justify-center font-semibold text-[15px] rounded-lg h-12 overflow-hidden group">
            {/* <div className="absolute inset-0 bg-[#5ee85a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></div> */}
            <span className="relative z-10">SEE ALL PRODUCTS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeDown;
