import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export default function SpatialAudio() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-black rounded-3xl flex justify-center items-end relative overflow-hidden w-3/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait"> 
        {isHovered ? (
          <motion.img
            key="hovered-image"
            src="/1.jpg"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}   
            exit={{ opacity: 0, scale: 0.9 }}   
            transition={{ duration: 0.3 }}       
            className='absolute top-8 w-[80%] object-contain'
            alt="Person with glasses (hovered state)"
          />
        ) : (
          <motion.img
            key="rest-image" 
            src="/metaglasses.png"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}   
            exit={{ opacity: 0, scale: 0.9 }}    
            transition={{ duration: 0.3 }}      
            className='absolute top-8 w-[80%] object-contain'
            alt="Metaglasses (rest state)"
          />
        )}
      </AnimatePresence>

      <motion.p
        initial={{y:100}}
        animate={{y:-10}}
        transition={{duration:0.5}}
        className="text-white text-sm z-10"
      >
        Spatial Audio
      </motion.p>
    </div>
  );
}