import { useState } from "react";

export default function Debug() {
  const [currentBg, setCurrentBg] = useState(0);
  return (
    <div>
      <div
        className="h-full bg-white transition-all duration-100 ease-linear"
        style={{ width: "${progress}%" }}
      ></div>
    </div>
  );
}
