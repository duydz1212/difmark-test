"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  title: string;
  subtitle?: string;
  originalPrice?: number;
  currentPrice: number;
  discount?: number;
  badge?: {
    text: string;
    color: "green" | "blue" | "red" | "purple" | "orange";
  };
  tags: string[];
  image: {
    gradient: string;
    icon: React.ReactNode;
  };
}

export default function SteamProductCard() {
  const [wishlistedItems, setWishlistedItems] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      title: "MOBILE SUIT GUNDAM SEED",
      subtitle: "Destiny Edition",
      originalPrice: 59.99,
      currentPrice: 40.76,
      discount: 32,
      badge: { text: "-32%", color: "green" },
      tags: ["Action", "Anime", "Mecha", "Strategy"],
      image: {
        gradient: "from-yellow-600 via-orange-500 to-red-600",
        icon: (
          <div className="text-center text-white">
            <div className="w-20 h-20 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-bold text-lg">MOBILE SUIT</p>
            <p className="text-sm opacity-80">GUNDAM SEED</p>
          </div>
        ),
      },
    },
    {
      id: 2,
      title: "FANTASY LIFE I",
      subtitle: "The Girl Who Steals Time",
      currentPrice: 29.99,
      badge: { text: "NEW", color: "blue" },
      tags: ["Adventure", "RPG", "Simulation", "Anime"],
      image: {
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        icon: (
          <div className="text-center text-white">
            <div className="w-20 h-20 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </div>
            <p className="font-bold text-lg">FANTASY LIFE I</p>
            <p className="text-sm opacity-80">Adventure Awaits</p>
          </div>
        ),
      },
    },
    {
      id: 3,
      title: "CYBERPUNK 2077",
      subtitle: "Phantom Liberty",
      originalPrice: 79.99,
      currentPrice: 49.99,
      discount: 38,
      badge: { text: "HOT", color: "red" },
      tags: ["RPG", "Open World", "Cyberpunk", "Action"],
      image: {
        gradient: "from-purple-600 via-pink-500 to-red-500",
        icon: (
          <div className="text-center text-white">
            <div className="w-20 h-20 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="font-bold text-lg">CYBERPUNK</p>
            <p className="text-sm opacity-80">2077</p>
          </div>
        ),
      },
    },
    {
      id: 4,
      title: "ELDEN RING",
      subtitle: "Shadow of the Erdtree",
      originalPrice: 69.99,
      currentPrice: 55.99,
      discount: 20,
      badge: { text: "GOTY", color: "purple" },
      tags: ["Dark Souls", "RPG", "Open World", "FromSoftware"],
      image: {
        gradient: "from-amber-600 via-yellow-500 to-orange-500",
        icon: (
          <div className="text-center text-white">
            <div className="w-20 h-20 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <p className="font-bold text-lg">ELDEN</p>
            <p className="text-sm opacity-80">RING</p>
          </div>
        ),
      },
    },
  ];

  const toggleWishlist = (productId: number) => {
    setWishlistedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId: number) => {
    setCartItems((prev) => [...prev, productId]);
    // Remove from cart after 3 seconds for demo
    setTimeout(() => {
      setCartItems((prev) => prev.filter((id) => id !== productId));
    }, 3000);
  };

  const getBadgeColors = (color: string) => {
    const colors = {
      green: "bg-green-600",
      blue: "bg-blue-600",
      red: "bg-red-600",
      purple: "bg-purple-600",
      orange: "bg-orange-600",
    };
    return colors[color as keyof typeof colors] || "bg-gray-600";
  };

  const getTagColors = (index: number) => {
    const colors = [
      "bg-blue-600",
      "bg-purple-600",
      "bg-orange-600",
      "bg-pink-600",
      "bg-green-600",
      "bg-red-600",
      "bg-indigo-600",
      "bg-teal-600",
    ];
    return colors[index % colors.length];
  };

  const isInWishlist = (productId: number) =>
    wishlistedItems.includes(productId);
  const isInCart = (productId: number) => cartItems.includes(productId);

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      {/* Custom CSS cho arrow clip-path */}
      <style jsx>{`
        .arrow-clip {
          clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%);
        }

        .arrow-bubble {
          position: relative;
        }

        .arrow-bubble::after {
          content: "";
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid currentColor;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎮 Steam-style Product Cards
          </h1>
          <p className="text-gray-400 text-lg">
            Hover để xem hiệu ứng Add to Cart với mũi tên nhọn
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div
                className={`relative h-48 bg-gradient-to-br ${product.image.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {product.image.icon}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-3 right-3 w-8 h-8 rounded flex items-center justify-center transition-all duration-200 ${
                    isInWishlist(product.id)
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-black/50 hover:bg-black/70"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isInWishlist(product.id)
                        ? "text-white fill-current"
                        : "text-white"
                    }`}
                  />
                </button>

                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 px-2 py-1 rounded text-sm font-bold text-white ${getBadgeColors(
                      product.badge.color
                    )}`}
                  >
                    {product.badge.text}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-1 leading-tight">
                  {product.title}
                </h3>
                {product.subtitle && (
                  <p className="text-gray-400 text-sm mb-3">
                    {product.subtitle}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs text-white rounded ${getTagColors(
                        index
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                  {product.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400 bg-gray-700 rounded">
                      +{product.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-green-400 font-bold text-xl">
                      ${product.currentPrice.toFixed(2)}
                    </span>
                  </div>
                  {product.discount && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Add to Cart Area - Y hệt Steam */}
                <div className="relative h-10 overflow-hidden rounded">
                  {/* Background info */}
                  <div className="absolute inset-0 flex items-center justify-between text-gray-400 text-sm px-3 bg-gray-700/50">
                    <span>View in Store</span>
                    <span>→</span>
                  </div>

                  {/* Add to Cart Button với mũi tên nhọn */}
                  <div
                    className={`absolute inset-0 transform transition-all duration-700 ease-out ${
                      isInCart(product.id)
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full group-hover:translate-x-1/2"
                    }`}
                  >
                    <button
                      onClick={() => addToCart(product.id)}
                      disabled={isInCart(product.id)}
                      className={`h-full px-4 font-bold text-sm flex items-center transition-all duration-200 arrow-clip ${
                        isInCart(product.id)
                          ? "bg-green-700 text-white cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600 text-white hover:shadow-lg"
                      }`}
                    >
                      {isInCart(product.id) ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          ADDED!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          ADD TO CART
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Info */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-white font-bold text-xl mb-4">
            🔧 Cách hoạt động
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-green-400 font-bold mb-2">
                Animation Logic:
              </h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>
                  • <code className="text-blue-400">translate-x-full</code> - Ẩn
                  hoàn toàn bên phải
                </li>
                <li>
                  •{" "}
                  <code className="text-blue-400">
                    group-hover:translate-x-1/2
                  </code>{" "}
                  - Trượt vào 50%
                </li>
                <li>
                  • <code className="text-blue-400">duration-700</code> -
                  Animation mượt 700ms
                </li>
                <li>
                  •{" "}
                  <code className="text-blue-400">opacity-0 → opacity-100</code>{" "}
                  - Fade in effect
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-400 font-bold mb-2">
                Arrow Shape CSS:
              </h3>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-xs">
                  clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0%
                  100%);
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Controls */}
        <div className="text-center">
          <div className="bg-gray-800 rounded-lg p-4 inline-block">
            <p className="text-gray-400 text-sm mb-2">Quick Actions:</p>
            <div className="flex space-x-4">
              <button
                onClick={() => setWishlistedItems([])}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors"
              >
                Clear Wishlist
              </button>
              <button
                onClick={() => setCartItems([])}
                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
