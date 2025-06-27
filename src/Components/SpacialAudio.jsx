import {AnimatePresence, motion} from 'motion/react'
import { useState } from 'react';

export default function SpacialAudio(){

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className="bg-black rounded-3xl flex justify-center items-end relative overflow-hidden w-3/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <AnimatePresence>
        <motion.img initial={{y:-100}} animate={{y:0}} transition={{duration:0.5}} src={`${isHovered ? '1.jpg'  : '/metaglasses.png' }`} className='absolute top-8 w-[80%] object-contain' alt="" />
      </AnimatePresence>
      <motion.p initial={{y:100}} animate={{y:-10}} transition={{duration:0.5}} className="text-white text-sm z-10">Spatial Audio</motion.p>
    </div>
  )
}