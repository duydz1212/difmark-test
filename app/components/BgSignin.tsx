"use client";

import React, { useState, useEffect } from "react";

const GameBackground: React.FC = () => {
  const [scatteredGames, setScatteredGames] = useState<ScatteredGame[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Tạo scattered games với random values chỉ ở client
    const scattered = gameCovers.slice(0, 8).map((game, index) => ({
      ...game,
      left: Math.random() * 80,
      top: Math.random() * 80,
      rotation: Math.random() * 30 - 15,
      delay: index * 2,
    }));
    setScatteredGames(scattered);
  }, []);

  interface Game {
    id: number;
    title: string;
    image: string;
  }

  interface ScatteredGame extends Game {
    left: number;
    top: number;
    rotation: number;
    delay: number;
  }

  interface DiamondRow {
    items: Game[];
    rowIndex: number;
  }
  // Danh sách các game covers
  const gameCovers: Game[] = [
    {
      id: 1,
      title: "Call of Duty",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
    },
    {
      id: 2,
      title: "FIFA 24",
      image:
        "https://images.unsplash.com/photo-1574891992345-94865d6de7c9?w=300&h=400&fit=crop",
    },
    {
      id: 3,
      title: "GTA V",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Cyberpunk",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Assassin's Creed",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Spider-Man",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    },
    {
      id: 7,
      title: "Mortal Kombat",
      image:
        "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=300&h=400&fit=crop",
    },
    {
      id: 8,
      title: "Battlefield",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
    },
    {
      id: 9,
      title: "Need for Speed",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=400&fit=crop",
    },
    {
      id: 10,
      title: "Resident Evil",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    },
    {
      id: 11,
      title: "The Witcher",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
    },
    {
      id: 12,
      title: "Red Dead",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=400&fit=crop",
    },
    {
      id: 13,
      title: "Fortnite",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
    },
    {
      id: 14,
      title: "Valorant",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
    },
    {
      id: 15,
      title: "League of Legends",
      image:
        "https://images.unsplash.com/photo-1574891992345-94865d6de7c9?w=300&h=400&fit=crop",
    },
    {
      id: 16,
      title: "Overwatch",
      image:
        "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=300&h=400&fit=crop",
    },
    {
      id: 17,
      title: "Apex Legends",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=400&fit=crop",
    },
    {
      id: 18,
      title: "Minecraft",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    },
    {
      id: 19,
      title: "Rocket League",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
    },
    {
      id: 20,
      title: "Counter Strike",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
    },
    {
      id: 21,
      title: "Dota 2",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=400&fit=crop",
    },
    {
      id: 22,
      title: "World of Warcraft",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
    },
    {
      id: 23,
      title: "Destiny 2",
      image:
        "https://images.unsplash.com/photo-1574891992345-94865d6de7c9?w=300&h=400&fit=crop",
    },
    {
      id: 24,
      title: "Fall Guys",
      image:
        "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=300&h=400&fit=crop",
    },
    {
      id: 25,
      title: "Among Us",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=400&fit=crop",
    },
    {
      id: 26,
      title: "Ghost of Tsushima",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    },
    {
      id: 27,
      title: "Halo",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
    },
    {
      id: 28,
      title: "Elden Ring",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
    },
    {
      id: 29,
      title: "God of War",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=400&fit=crop",
    },
    {
      id: 30,
      title: "Horizon",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
    },
  ];

  // Tạo grid pattern hình thoi
  const createDiamondGrid = (): DiamondRow[] => {
    const rows: DiamondRow[] = [];
    const itemsPerRow: number[] = [4, 5, 6, 7, 6, 5, 4]; // Pattern tạo hình thoi
    let gameIndex = 0;

    itemsPerRow.forEach((itemCount: number, rowIndex: number) => {
      const row: Game[] = [];
      for (let i = 0; i < itemCount && gameIndex < gameCovers.length; i++) {
        row.push(gameCovers[gameIndex]);
        gameIndex++;
      }
      rows.push({ items: row, rowIndex });
    });

    return rows;
  };

  const diamondRows: DiamondRow[] = createDiamondGrid();

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    gameTitle: string
  ): void => {
    const target = e.currentTarget;
    target.src =
      "https://via.placeholder.com/300x400/1f2937/ffffff?text=" +
      encodeURIComponent(gameTitle);
  };

  const getRowPadding = (itemCount: number): string => {
    return (7 - itemCount) * 40 + "px";
  };

  const getRandomPosition = (
    left: number,
    top: number,
    rotation: number
  ): React.CSSProperties => {
    return {
      left: left + "%",
      top: top + "%",
      transform: "rotate(" + rotation + "deg)",
    };
  };

  const getAnimationDelay = (delay: number): React.CSSProperties => {
    return {
      animationDelay: delay + "s",
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Diamond Grid Background */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <div className="space-y-2">
          {diamondRows.map((row: DiamondRow) => (
            <div
              key={row.rowIndex}
              className="flex items-center justify-center gap-2"
              style={{
                paddingLeft: getRowPadding(row.items.length),
              }}
            >
              {row.items.map((game: Game) => {
                return (
                  <div
                    key={game.id}
                    className="group relative transition-all duration-500 ease-out cursor-pointer"
                  >
                    {/* Game Cover - Hình bình hành xéo */}
                    <div className="w-52 h-44 overflow-hidden shadow-xl bg-gray-800 border border-gray-600/30 relative transform skew-x-12">
                      {/* Dark overlay mặc định */}
                      <div className="absolute inset-0 scale-125 bg-black/60 group-hover:bg-black/20 transition-all duration-500 z-10 transform -skew-x-12"></div>

                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover scale-125 transition-all duration-500 group-hover:scale-110 group-hover:brightness-125 transform -skew-x-12"
                        onError={(e) => handleImageError(e, game.title)}
                      />

                      {/* Hover glow effect */}
                      <div className="absolute scale-125 inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 transform -skew-x-12"></div>
                    </div>

                    {/* Outer glow khi hover */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-pink-500/30 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10 transform skew-x-12"></div>

                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-lg border border-white/0 group-hover:border-white/30 transition-all duration-500"></div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Additional scattered games cho background phong phú hơn */}
      {isClient && (
        <div className="absolute inset-0 opacity-30">
          {scatteredGames.map((game: ScatteredGame) => {
            const position = getRandomPosition(
              game.left,
              game.top,
              game.rotation
            );
            const delay = getAnimationDelay(game.delay);
            return (
              <div
                key={game.id + "-bg"}
                className="absolute w-20 h-28 rounded opacity-40 transition-all duration-700 hover:opacity-70"
                style={{
                  ...position,
                  ...delay,
                }}
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover rounded shadow-lg"
                  onError={(e) => handleImageError(e, game.title)}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Dark overlay để có thể đặt content lên trên */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
    </div>
  );
};

export default GameBackground;
