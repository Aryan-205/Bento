import React, { useState } from "react"; 
import { motion, AnimatePresence } from "motion/react";

export default function DynamicIsland() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-black rounded-3xl flex justify-center items-center relative overflow-hidden flex-[2]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/dynamicIsland.png"
        className="absolute inset-0 w-full h-full object-fill"
        alt="Dynamic Island Background"
      />
    <AnimatePresence>
      <motion.div
        className={`z-10 flex ${isHovered ? 'w-56' : 'w-fit'}`}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}   
        transition={{ duration: 0.8 }}
        >
        <div className="bg-black px-4 w-full py-2 rounded-3xl space-y-2">
          <div className="w-28 border rounded-3xl justify-self-center mb-1">
            .
          </div>
          
            {isHovered && ( 
              <motion.div
                className="flex flex-col items-center gap-2" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}   
                transition={{ duration: 0.8 }}
                >
                <div className="flex items-center justify-between gap-2 w-full">
                  <img src="/songimg.png" className="rounded-full w-8 h-8" alt="Song Thumbnail" />
                  <div className="text-white text-xs">
                    <p>After Dark</p>
                    <p>Mr.Kitty</p>
                  </div>
                  <img src="/musicwave.png" className="rounded-full w-6 h-6" alt="Song Thumbnail" />
                </div>

                <div className="text-white flex text-[8px] items-center w-full">
                  <p>1:56</p>
                  <div className="w-full mx-2 border h-[6px] rounded-xl overflow-hidden">
                    <div className="w-[80%] h-[6px] bg-white"></div> 
                  </div>
                  <p>-0.58</p>
                </div>

                <div className="flex items-center justify-between w-full">
                  <img className="w-4 h-fit" src="/Back.svg" alt="Back" />
                  <img className="w-4 h-fit" src="/Pause.svg" alt="Pause" />
                  <img className="w-4 h-fit" src="/Next.svg" alt="Next" />
                  <img className="w-4 h-fit" src="/Airplay.svg" alt="Airplay" />
                </div>
              </motion.div>
            )}

            {!isHovered && (
              <motion.p
                className="text-white text-md text-bold text-center" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}   
                transition={{ duration: 0.8 }}
                >
                Dynamic Island
              </motion.p>
            )}
        </div>
      </motion.div>
    </AnimatePresence>
    </div>
  );
}