import { CanvasTextImage } from "./Lab";
import PopularGameItem from "./PopularGameItem";

// TypeScript interface cho game data
interface GameData {
  id: number;
  image: string;
  video?: string | null;
  avatar: string;
  username: string;
  rank: string;
  title: string;
  price: string;
  isUpcoming?: boolean;
}

interface PopularGamesProps {
  games?: GameData[];
}
// Alternative: Simplified version với grid layout
export function PopularGamesGrid({ games }: PopularGamesProps = {}) {
  const defaultGames: GameData[] = [
    {
      id: 1,
      image: "/product1.png",
      video: "/video/product1.webm",
      avatar: "/avt1.png",
      username: "Eassy-key",
      rank: "🦄 Legendacy",
      title: "Deliver At All Costs",
      price: "$38.30",
      isUpcoming: false,
    },
    {
      id: 2,
      image: "/product2.png",
      video: "/video/product2.webm",
      avatar: "/avt2.png",
      username: "GameMaster",
      rank: "⭐ Master",
      title: "Battle Royale Arena",
      price: "$45.99",
      isUpcoming: false,
    },
    {
      id: 3,
      image: "/product3.png",
      video: "/video/product3.webm",
      avatar: "/avt3.png",
      username: "ProGamer",
      rank: "💎 Elite",
      title: "Racing Thunder",
      price: "$29.99",
      isUpcoming: false,
    },
    {
      id: 4,
      image: "/upcoming1.png",
      video: null,
      avatar: "/avt4.png",
      username: "DevStudio",
      rank: "🎮 Developer",
      title: "Mystic Realms",
      price: "TBA",
      isUpcoming: true,
    },
    {
      id: 5,
      image: "/product4.png",
      video: "/video/product4.webm",
      avatar: "/avt5.png",
      username: "ElitePlayer",
      rank: "🏆 Champion",
      title: "Space Adventure",
      price: "$52.99",
      isUpcoming: false,
    },
    {
      id: 6,
      image: "/product5.png",
      video: "/video/product5.webm",
      avatar: "/avt6.png",
      username: "GameHero",
      rank: "⚡ Legend",
      title: "Fantasy Quest",
      price: "$41.50",
      isUpcoming: false,
    },
    {
      id: 7,
      image: "/product6.png",
      video: "/video/product6.webm",
      avatar: "/avt7.png",
      username: "PixelMaster",
      rank: "🎯 Expert",
      title: "Pixel Warriors",
      price: "$33.99",
      isUpcoming: false,
    },
    {
      id: 8,
      image: "/upcoming2.png",
      video: null,
      avatar: "/avt8.png",
      username: "FutureGames",
      rank: "🚀 Pioneer",
      title: "Cyber City 2077",
      price: "TBA",
      isUpcoming: true,
    },
    {
      id: 9,
      image: "/product7.png",
      video: "/video/product7.webm",
      avatar: "/avt9.png",
      username: "ActionGamer",
      rank: "🔥 Warrior",
      title: "Action Hero",
      price: "$36.75",
      isUpcoming: false,
    },
  ];

  const gameData = games || defaultGames;

  return (
    <div className="w-full">
      <CanvasTextImage
        className="-translate-x-[22px]"
        text="POPULAR GAMES"
        imageUrl="/text-img.svg"
        size="24px"
      />
      <div className="mt-10">
        {/* CSS Grid approach - simpler and more maintainable */}
        <div className="grid grid-cols-1 990:grid-cols-3 1920:grid-cols-4 gap-4">
          {gameData.map((game, index) => (
            <PopularGameItem
              key={game.id}
              image={game.image}
              video={game.video}
              avatar={game.avatar}
              username={game.username}
              rank={game.rank}
              title={game.title}
              price={game.price}
              isUpcoming={game.isUpcoming}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
