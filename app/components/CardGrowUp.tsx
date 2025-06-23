"use client";

import React from "react";

// TypeScript interfaces
interface CardData {
  title: string;
  description: string;
  productCount: string;
  bgImage: string;
  heroImage: string;
  gradientColor: string;
}

interface GameCardProps {
  cardId: number;
}

// JSON data
const cardData: Record<number, CardData> = {
  1: {
    title: "Game Currency",
    description:
      "You can also find game currency from your favorite MMORPG at favorable prices.",
    productCount: "155 products",
    bgImage: "/bg-hero1.webp",
    heroImage: "/hero_1.webp",
    gradientColor: "to-blue-500/10",
  },
  2: {
    title: "Game Points",
    description:
      "You can also find game point from your favorite game at favorable prices.",
    productCount: "1825 products",
    bgImage: "/bg-hero2.webp",
    heroImage: "/hero_2.webp",
    gradientColor: "to-purple-500/10",
  },
  3: {
    title: "Gift Cards",
    description:
      "You can also find a gift card to top up your favorite service.",
    productCount: "14937 products",
    bgImage: "/bg-hero3.webp",
    heroImage: "/hero_3.webp",
    gradientColor: "to-green-500/10",
  },
  4: {
    title: "Software",
    description:
      "You can also find software and operation systems at favorable prices.",
    productCount: "964 products",
    bgImage: "/bg-hero4.webp",
    heroImage: "/hero_4.webp",
    gradientColor: "to-red-500/10",
  },
};

// Component render
const GameCard: React.FC<GameCardProps> = ({ cardId }) => {
  const data = cardData[cardId];

  if (!data) {
    return (
      <div className="w-[555px] h-[300px] bg-gray-800 rounded-md flex items-center justify-center">
        <span className="text-gray-400">Card not found</span>
      </div>
    );
  }

  return (
    <div className="inline-block relative group">
      <div className="w-[555px] rounded-md overflow-hidden relative h-[300px]">
        <div className="w-full h-full bg-[#131B25] cursor-pointer transition-all duration-300">
          {/* Background image */}
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
            src={data.bgImage}
            alt="Background"
          />

          {/* Background overlay for hover effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent ${data.gradientColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          ></div>

          <div className="text-white h-full w-full flex flex-col justify-between p-6 relative z-10">
            <div>
              <span className="block text-2xl font-semibold mb-2">
                {data.title}
              </span>
              <span className="text-gray-400 w-full block max-w-[270px]">
                {data.description}
              </span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-gray-400">{data.productCount}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Hero image with hover effects - OUTSIDE the overflow-hidden div */}
      <div className="absolute bottom-0 right-0 w-60 z-20">
        <img
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:-translate-x-3 group-hover:-translate-y-4"
          src={data.heroImage}
          alt="Game Hero"
        />
      </div>
    </div>
  );
};

export default function CardGrowUp() {
  const displayCards = [
    [1, 2], // Hàng đầu tiên
    [3, 4], // Hàng thứ hai
  ];

  return (
    <div className="flex flex-col gap-y-10 bg-[#131b25] p-8">
      {displayCards.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-x-8 w-full">
          {row.map((cardId) => (
            <GameCard key={cardId} cardId={cardId} />
          ))}
        </div>
      ))}
    </div>
  );
}
