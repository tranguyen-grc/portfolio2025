import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import portrait from '../assets/portraitColor.svg';

export default function PortraitWithBlobs() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 220, damping: 18, mass: 0.45 });
  const smoothY = useSpring(mouseY, { stiffness: 220, damping: 18, mass: 0.45 });

  // Stronger follow
  const blob1X = useTransform(smoothX, [-1, 1], [-40, 40]);
  const blob1Y = useTransform(smoothY, [-1, 1], [-35, 35]);

  const blob2X = useTransform(smoothX, [-1, 1], [-28, 28]);
  const blob2Y = useTransform(smoothY, [-1, 1], [-24, 24]);

  const blob3X = useTransform(smoothX, [-1, 1], [-50, 50]);
  const blob3Y = useTransform(smoothY, [-1, 1], [-30, 30]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Normalize to range -1 to 1
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative mx-auto aspect-[464/488] w-full max-w-[38rem]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Blob 1 */}
      <motion.div
        className="pointer-events-none absolute left-[30px] top-[20px] z-[1]"
        style={{ x: blob1X, y: blob1Y }}
      >
        <motion.div
          className="h-40 w-40 rounded-full bg-[#e2c49c] blur-xl"
          animate={{ x: [0, 18, 0], y: [0, 16, 0] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Blob 2 */}
      <motion.div
        className="pointer-events-none absolute bottom-0 right-[20px] z-[1]"
        style={{ x: blob2X, y: blob2Y }}
      >
        <motion.div
          className="h-52 w-52 rounded-full bg-[#d67fe5] blur-2xl"
          animate={{ x: [0, -16, 0], y: [0, -14, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Blob 3 */}
      <motion.div
        className="pointer-events-none absolute right-[80px] top-[120px] z-[1]"
        style={{ x: blob3X, y: blob3Y }}
      >
        <motion.div
          className="h-36 w-36 rounded-full bg-[#9cbae5] blur-xl"
          animate={{ x: [0, 14, 0], y: [0, -18, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Portrait */}
      <div className="relative z-[2] w-full overflow-hidden rounded-xl">
        <img src={portrait} alt="Tra Nguyen" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
