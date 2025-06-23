import { CanvasTextImage } from "./Lab";
import PopularGameItem from "./PopularGameItem";

export default function PopularGames() {
  return (
    <div className="w-full">
      <CanvasTextImage
        className="-translate-x-[22px]"
        text="POPULAR GAMES"
        imageUrl="/text-img.svg"
        size="24px"
      />
      <div className="mt-10 grid grid-cols-1 990:grid-cols-3 1920:grid-cols-4 gap-4">
        <PopularGameItem />
        <PopularGameItem />
        <PopularGameItem />
        <PopularGameItem />
        <PopularGameItem />
        <PopularGameItem />
      </div>
    </div>
  );
}
