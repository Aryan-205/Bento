import { motion } from "framer-motion";

const containerVariants = {
  rest: {},
  hovered: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  rest: { y: 250, opacity: 0 },
  hovered: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const textVariants = {
  rest: { y: 0 },
  hovered: { y: -20 },
};

export default function FourTitanium() {
  return (
    <motion.div
      variants={containerVariants}
      initial="rest"
      whileHover="hovered"
      animate="rest"
      className="group rounded-3xl flex justify-center items-start p-2 py-8 relative flex-[2] overflow-hidden bg-black"
    >
      {/* Images staggered on hover */}
      <motion.img
        variants={imageVariants}
        className="absolute -top-12 left-0 w-32 h-auto object-contain"
        src="/img1.webp"
        alt=""
      />
      <motion.img
        variants={imageVariants}
        className="absolute -top-12 left-[4.5rem] w-32 h-auto object-contain"
        src="/img2.webp"
        alt=""
      />
      <motion.img
        variants={imageVariants}
        className="absolute -top-12 left-36 w-32 h-auto object-contain"
        src="/img3.webp"
        alt=""
      />
      <motion.img
        variants={imageVariants}
        className="absolute -top-12 left-[14rem] w-32 h-auto object-contain"
        src="/img4.webp"
        alt=""
      />

      {/* Title */}
      <motion.p
        variants={textVariants}
        className="text-white text-lg font-medium z-10"
      >
        Four Titanium Colors
      </motion.p>
    </motion.div>
  );
}