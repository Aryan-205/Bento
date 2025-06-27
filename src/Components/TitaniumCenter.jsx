import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function TitaniumCenter() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null); 

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(error => {
          console.error("Video playback failed:", error);
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <div
      className="bg-black rounded-3xl flex flex-col justify-center items-center row-span-2 relative overflow-hidden" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src='/central.png'
        className="absolute inset-0 w-full h-full object-contain"
        initial={{ scale: 0 }}
        animate={{ scale:1 ,opacity: isHovered ? 0 : 1 }} 
        transition={{ duration: 0.5 }} 
        alt="Central Image"
      />

      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale:1, opacity: isHovered ? 1 : 0 }} 
        transition={{ duration: 0.5 }}
      >
        <video
          ref={videoRef} 
          src='/vid.mp4'
          loop
          muted 
          playsInline
          className="w-full h-auto rounded-3xl object-contain"
          alt="Titanium Video"
        />
      </motion.div>
    </div>
  );
}