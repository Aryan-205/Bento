import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function A17() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-black rounded-3xl flex flex-col justify-center items-center relative overflow-hidden flex-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered ? (
          <motion.img
            key="a17-image" 
            src="/a17.jpeg"
            className='absolute w-28 h-28 object-cover'
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}   
            transition={{ duration: 0.3 }}
            alt="A17 Chip"
          />
        ) : (
          <motion.div
            key="gradient-div" 
            className='absolute w-28 h-28 bg-gradient-to-br from-[#868583] to-[#181818] border border-gray-900 ' 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}    
            transition={{ duration: 0.3 }} 
          />
        )}
      </AnimatePresence>

      <p className="text-white text-3xl font-bold z-10">A17</p>
      <p className="text-sm z-10 bg-gradient-to-bl from-[#D0CFCA] to-[#98938F] text-transparent bg-clip-text">PRO</p>
    </div>
  );
}