"use client";

import React from "react";

interface TextImageProps {
  text: string;
  imageUrl: string;
  size?: string;
  className?: string;
}

// Cách 3: Fallback với Canvas (nếu SVG vẫn không work)
export function CanvasTextImage({
  text,
  imageUrl,
  size = "3rem",
  className = "",
}: TextImageProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const fontSize = parseInt(size) || 48;
      canvas.width = text.length * fontSize * 0.8;
      canvas.height = fontSize * 1.5;

      // Vẽ ảnh
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Set composite mode để chỉ giữ lại phần text
      ctx.globalCompositeOperation = "destination-in";

      // Vẽ text
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text.toUpperCase(), canvas.width / 2, canvas.height / 2);
    };

    img.src = imageUrl;
  }, [text, imageUrl, size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}

// Demo component
export function Demo() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center space-y-12">
      <CanvasTextImage
        text="POPULAR SELLERS"
        imageUrl="/text-img.svg"
        size="20px"
      />
    </div>
  );
}

// Cách 1: Sử dụng CSS mask (tương thích tốt với SVG)
// export default function TextImage({
//   text,
//   imageUrl,
//   size = "3rem",
//   className = "",
// }: TextImageProps) {
//   return (
//     <div className={`relative inline-block ${className}`}>
//       {/* Ảnh background */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `url(${imageUrl})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           mask: `url("data:image/svg+xml,${encodeURIComponent(`
//             <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
//               <text x='50%' y='50%'
//                     text-anchor='middle'
//                     dominant-baseline='middle'
//                     font-family='Arial, sans-serif'
//                     font-weight='bold'
//                     font-size='${size}'
//                     fill='white'>
//                 ${text}
//               </text>
//             </svg>
//           `)}")`,
//           WebkitMask: `url("data:image/svg+xml,${encodeURIComponent(`
//             <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
//               <text x='50%' y='50%'
//                     text-anchor='middle'
//                     dominant-baseline='middle'
//                     font-family='Arial, sans-serif'
//                     font-weight='bold'
//                     font-size='${size}'
//                     fill='white'>
//                 ${text}
//               </text>
//             </svg>
//           `)}")`,
//           maskRepeat: "no-repeat",
//           WebkitMaskRepeat: "no-repeat",
//         }}
//       />

//       {/* Invisible text để tạo kích thước */}
//       <div className="font-bold uppercase opacity-0" style={{ fontSize: size }}>
//         {text}
//       </div>
//     </div>
//   );
// }

// Cách 2: Sử dụng SVG trực tiếp
// export function SVGTextImage({
//   text,
//   imageUrl,
//   size = "3rem",
//   className = "",
// }: TextImageProps) {
//   const sizeInPx = parseInt(size) || 48;

//   return (
//     <div className={className}>
//       <svg
//         width="100%"
//         height={sizeInPx * 1.2}
//         viewBox={`0 0 ${text.length * sizeInPx * 0.6} ${sizeInPx * 1.2}`}
//         className="overflow-visible"
//       >
//         <defs>
//           <pattern
//             id="textPattern"
//             patternUnits="userSpaceOnUse"
//             width="100%"
//             height="100%"
//           >
//             <image
//               href={imageUrl}
//               width="100%"
//               height="100%"
//               preserveAspectRatio="xMidYMid slice"
//             />
//           </pattern>
//         </defs>

//         <text
//           x="50%"
//           y="50%"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           fontSize={sizeInPx}
//           fontWeight="bold"
//           fontFamily="Arial, sans-serif"
//           fill="url(#textPattern)"
//           className="uppercase"
//         >
//           {text}
//         </text>
//       </svg>
//     </div>
//   );
// }
