import { motion } from "framer-motion";
import { useState } from "react";
import profileIllustration from "../assets/portrait.png";

export default function PortraitWithBlobs() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect) return;
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  return (
    <div
      className="relative w-full max-w-[38rem] aspect-[464/488] mx-auto"
      onMouseMove={handleMouseMove}
    >
      {/* Blob 1 */}
      <motion.div
        className="absolute w-40 h-40 bg-[#232323] rounded-full blur-xl opacity-40 z-[1] pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          top: `${20 + mouseY * 0.05}px`,
          left: `${30 + mouseX * 0.05}px`,
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-50 h-50 bg-[#232323] rounded-full blur-2xl opacity-40 z-[1] pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          bottom: `${0 + mouseY * 0.05}px`,
          right: `${20 + mouseX * 0.05}px`,
        }}
      />

      {/* Portrait Image - wrapped in overflow-hidden for masking */}
      <div className="relative z-[2] w-full overflow-hidden rounded-xl">
        <img
          src={profileIllustration}
          alt="Tra Nguyen"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
