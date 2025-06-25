import { motion } from "framer-motion";

export default function BlobCluster() {
  return (
    <div className="relative w-[25rem] h-[25rem] mx-auto">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-48 h-48 bg-gray-300 rounded-full blur-[80px] opacity-50"
        animate={{ x: [0, 20, -20, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{ top: "20%", left: "25%" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-40 h-40 bg-gray-500 rounded-full blur-[60px] opacity-60"
        animate={{ x: [0, -15, 15, 0], y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        style={{ top: "40%", left: "50%" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-32 h-32 bg-black rounded-full blur-[50px] opacity-30"
        animate={{ x: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{ top: "55%", left: "35%" }}
      />
    </div>
  );
}
