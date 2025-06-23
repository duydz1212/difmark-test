import { LuClock3 } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function NewItem() {
  return (
    <div className="bg-[#212937] gap-y-2 flex flex-col w-fit rounded-sm p-5">
      <img
        className="w-[305px] 970:w-[253px] 1200:w-[320px] 1920:w-[335px] 1640:w-[376px] object-cover rounded-lg overflow-hidden h-[174px]"
        src="/bg-hero1.webp"
      />
      <div className="flex gap-x-1 items-center text-[#9A9A9A] text-[12px]">
        <LuClock3 size={16} />
        <span>8 day ago</span>
      </div>
      <h3 className="text-[16px] max-w-[305px] 970:max-w-[253px] 1920:max-w-[335px] 1640:max-w-[376px] 1200:max-w-[320px] text-[#F6F6F6] font-medium">
        The Witcher 4 Unveiled: First Look Confirms Kovir Setting, Manticore
        Hunt, and 60 FPS Target on Consoles
      </h3>
      <span className="text-[#C0C3C9] text-[14px] max-w-[305px] 970:max-w-[253px] 1920:max-w-[335px] 1640:max-w-[376px] 1200:max-w-[320px]">
        CD Projekt Red returned to Epic Games’ annual State of Unreal showcase
        with a spellbinding tech demo for The Witcher 4, revealing the series’
        next chapter will send players north to the mineral-rich k
      </span>
      <div className="flex text-[#9BA1AB] mt-2 text-[16px] items-center gap-x-1">
        <MdOutlineRemoveRedEye size={24} />
        <span>2398</span>
      </div>
    </div>
  );
}
