import { IoIosArrowForward } from "react-icons/io";
import { CanvasTextImage } from "./Lab";
import NewItem from "./NewItem";

export default function LastNews() {
  return (
    <div className="w-full responsive">
      <div className="flex items-center justify-between mb-6">
        <CanvasTextImage
          className="-translate-x-[22px]"
          text="LATEST NEWS"
          imageUrl="/text-img.svg"
          size="24px"
        />
        <div className="text-[#C0C3C9] flex items-center justify-center gap-x-3 hover:text-white transition-colors">
          <span className="mr-2">View All</span>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="flex justify-between">
        <NewItem />
        <NewItem />
        <div className="970:block hidden">
          <NewItem />
        </div>
        <div className="1920:block hidden">
          <NewItem />
        </div>
      </div>
    </div>
  );
}
