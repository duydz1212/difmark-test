import { IoIosArrowForward } from "react-icons/io";
import { CanvasTextImage } from "./Lab";
import FlatFormItem from "./FlatFormItem";

export default function PlatForms() {
  return (
    <div className="w-full responsive">
      <div className="flex items-center justify-between mb-10">
        <CanvasTextImage
          className="-translate-x-[22px]"
          text="FLATFORMS"
          imageUrl="/text-img.svg"
          size="24px"
        />
        <div className="text-[#C0C3C9] flex items-center justify-center gap-x-3 hover:text-white transition-colors">
          <span className="mr-2">View All</span>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="flex justify-between">
        <FlatFormItem />
        <FlatFormItem />
        <FlatFormItem />
      </div>
    </div>
  );
}
