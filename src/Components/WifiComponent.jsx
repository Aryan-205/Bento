import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WifiComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null); 

  const images = [
    '/wifi.png',   
    '/wifi1.png',      
    '/wifi2.png',  
    '/wifi3.png',  
  ];

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 700); 
    } else {
      clearInterval(intervalRef.current);
      setCurrentImageIndex(0);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, images.length]); 

  return (
    <div
      className="bg-black rounded-3xl flex flex-col justify-between items-center p-2 relative overflow-hidden flex-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.p
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white text-lg font-bold z-10"
      >
        Wi-Fi 6e
      </motion.p>

      <AnimatePresence mode="wait"> 
        <motion.img
          key={currentImageIndex} 
          src={images[currentImageIndex]}
          transition={{ duration: 0.3 }}       
          className="absolute top-12 w-[80%] object-contain"
          alt={`Wi-Fi state ${currentImageIndex + 1}`}
        />
      </AnimatePresence>

      <motion.p
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white text-lg font-bold z-10"
      >
        and Thread
      </motion.p>
    </div>
  );
};

export default WifiComponent;