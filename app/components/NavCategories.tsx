"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IconType } from "react-icons";
import { IoKey } from "react-icons/io5";

// TypeScript Interfaces
interface CategoryItem {
  id: number;
  name: string;
  icon: IconType;
}

interface Category {
  id: number;
  title: string;
  items: CategoryItem[];
}

interface CategoryHeaderProps {
  title: string;
}

interface ItemCardProps {
  item: CategoryItem;
}

interface CategorySectionProps {
  category: Category;
  showTopMargin?: boolean;
}

const NavCategories: React.FC = () => {
  // JSON data với TypeScript typing
  const categoriesData: Category[] = [
    {
      id: 1,
      title: "Video games",
      items: [
        { id: 1, name: "Game keys", icon: IoKey },
        { id: 2, name: "DLC Packs", icon: IoIosArrowForward },
        { id: 3, name: "Steam Cards", icon: IoIosArrowForward },
        { id: 10, name: "Steam Cards", icon: IoIosArrowForward },
      ],
    },
    {
      id: 2,
      title: "Software",
      items: [
        { id: 4, name: "Windows Keys", icon: IoIosArrowForward },
        { id: 5, name: "Office 365", icon: IoIosArrowForward },
        { id: 6, name: "Antivirus", icon: IoIosArrowForward },
        { id: 11, name: "Steam Cards", icon: IoIosArrowForward },
      ],
    },
    {
      id: 3,
      title: "Digital Services",
      items: [
        { id: 7, name: "VPN Access", icon: IoIosArrowForward },
        { id: 8, name: "Streaming", icon: IoIosArrowForward },
        { id: 9, name: "Cloud Storage", icon: IoIosArrowForward },
      ],
    },
  ];

  // Component cho category header
  const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title }) => (
    <div
      style={{
        maskImage: `linear-gradient(to right, black 8%, black 60%, transparent 100%)`,
      }}
      className="bg-[#354051] w-fit text-[16px] text-[#C0C3C9] rounded-sm pl-3 pr-16"
    >
      {title}
    </div>
  );

  // Component cho item card
  const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    const IconComponent = item.icon;
    return (
      <div className="w-[170px] relative group text-[#C0C3C9] duration-1000 origin-center ease-out overflow-hidden h-[92px] bg-[#354051] rounded-lg flex flex-col gap-y-2 justify-center items-center hover:bg-[#3d4855] transition-colors cursor-pointer">
        <img
          className="h-full w-full object-cover absolute origin-center z-10 inset-0 group-hover:opacity-95 ease-out opacity-0 transition-all duration-1000"
          src="/nav-cate-hover1.webp"
          alt=""
        />
        <div className="bg-[#3f4a5a] group-hover:bg-[#3f4a5a]/10 transition-color ease-out duration-1000 shadow-nav-cate relative z-20 h-[44px] w-[44px] rounded-lg flex justify-center items-center">
          <IconComponent
            className="group-hover:scale-110 scale-100 transition-transform ease-out duration-1000"
            size={20}
          />
        </div>
        <span className="text-sm relative z-20">{item.name}</span>
      </div>
    );
  };

  // Component cho category section
  const CategorySection: React.FC<CategorySectionProps> = ({
    category,
    showTopMargin = false,
  }) => (
    <div className={showTopMargin ? "mt-3" : ""}>
      <CategoryHeader title={category.title} />
      <div className="flex gap-x-4 items-center justify-center mt-3">
        {category.items.map((item: CategoryItem) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="">
      {/* Content */}
      <div className="flex flex-col items-start p-4 gap-y-3">
        {categoriesData.map((category: Category, index: number) => (
          <CategorySection
            key={category.id}
            category={category}
            showTopMargin={index > 0}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex text-[#C0C3C9] p-2 bg-[#2b3545] justify-center items-center gap-x-2 hover:text-white transition-colors cursor-pointer">
        <span className="text-[18px]">See all categories</span>
        <IoIosArrowForward size={20} />
      </div>
    </div>
  );
};

export default NavCategories;
