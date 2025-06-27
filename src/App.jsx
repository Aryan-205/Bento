
import { easeInOut, motion, scale } from 'framer-motion'; 

import WifiComponent from './Components/WifiComponent';
import DynamicIsland from './Components/DynamicIsland';
import TitaniumCenter from './Components/TitaniumCenter';
import A17 from './Components/A17';
import SpacialAudio from './Components/SpacialAudio';
import FourTitanium from './Components/FourTitanium';
import Action from './Components/Action';

export default function App() {
  return (
    <div className="p-5 min-h-screen flex items-center justify-center">
      <div className="flex gap-4 min-h-[720px] w-full">
        {/* left */}
        <div className="grid gap-4 flex-1">
          <div className="flex gap-4 row-span-3">
            {/* 48MP Main Camera */}
            <motion.div initial='rest' whileHover='hover' className="group bg-black text-white rounded-3xl flex flex-col justify-between items-center relative overflow-hidden w-3/5">
              <motion.p variants={{rest:{y:100, opacity:0},hover:{y:0, opacity:1}}} transition={{duration:0.5}} className='z-10 text-3xl font-bold'>48MP</motion.p>
              <motion.img initial={{x:100, y:100}} animate={{x:0, y:0}} transition={{duration:0.5}} src="/image1.png" className='absolute top-8 left-4 w-full h-full object-contain z-20' alt="" />
              <p className='z-30 text-lg font-bold'>Main Camera</p>
            </motion.div>
            <div className="grid gap-4 w-2/5">
              {/* Ceramic Shield */}
              <motion.div initial='rest' whileHover='hovered' className="bg-black rounded-3xl flex items-center justify-center relative overflow-hidden">
                <motion.img variants={{rest:{filter:'blur(10px)'},hovered:{filter:"blur(0px)"}}} transition={{duration:0.3}} src="/ceremic.png" className='absolute w-full h-full object-fill inset-0' alt="" />
                <p className="text-white text-sm font-medium">Ceramic Shield</p>
              </motion.div>

              {/* Main lens specs */}
              <div className="bg-black rounded-3xl flex justify-center items-end relative overflow-hidden py-12">
                <img src="/mainVector.svg" alt="" className='absolute object-contain w-[60%] h-[60%] top-8' />
                <motion.p initial={{y:100}} animate={{y:40}} transition={{duration:0.5}} className="text-white text-xs">Main lens</motion.p>
              </div>
            </div>
          </div>
          {/* Always-On display */}
          <div className="rounded-3xl flex items-center relative row-span-1 overflow-hidden">
            <motion.img initial={{x:-250}} animate={{x:0}} transition={{duration:0.5}} src="/alwaysOnDisplay.png" className="absolute inset-0 object-cover w-full h-full" />
            <motion.p initial={{opacity:0.5}} whileHover={{opacity:1}} className="text-white text-5xl font-bold text-center z-10 ">
              Always-On Display
            </motion.p>
          </div>

          {/* All-day battery life */}
          <motion.div initial='rest' whileHover='hovered' className="bg-black rounded-3xl flex items-center justify-center gap-2 relative overflow-hidden  group row-span-1">
            <motion.div variants={{rest:{width:0},hovered:{width:'100%'}}} transition={{duration:0.8}} className='absolute top-0 left-0 bg-green-500 h-full'/>
            <motion.img initial={{x:-250}} animate={{x:0}} transition={{duration:0.5}} src="battery.svg" className='w-8 h-8 z-20' alt="" />
            <motion.p initial={{x:250}} animate={{x:0}} transition={{duration:0.5}} className="text-white text-3xl font-medium z-20">
              All-day battery life
            </motion.p>
          </motion.div>

          <div className="flex gap-4 row-span-2">
            {/* 5x Telephoto */}
            <motion.div
              className="bg-black rounded-3xl w-2/5 flex flex-col justify-center overflow-hidden"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.5}}
              whileHover='hovered'
              >
              <motion.p variants={{hovered:{scale:10}}} transition={{duration:0.8, ease:easeInOut}} className="text-white text-6xl font-bold text-center">5x</motion.p>
              <p className="text-white text-sm text-center">Telephoto on Pro Max</p>
            </motion.div>

            {/* Spatial Audio */}
            <SpacialAudio/>
          </div>
        </div>

        {/* middle */}
        <div className="grid gap-4 flex-[2] grid-rows-4">
          {/* middle top */}
          <div className="flex gap-4 row-span-1">
            {/* A17 PRO */}
            <A17/>

            {/* Super-high-resolution photos */}
            <motion.div
              initial='rest'
              whileHover="hovered"
              className="group bg-black rounded-3xl flex justify-center items-end p-2 relative flex-[2] overflow-hidden"
            >
              <motion.img initial={{y:-250}} animate={{y:0}} transition={{duration:0.5}} src="/superhigh.png" className="absolute inset-0 w-full h-full object-fill" alt="" />

              <motion.p
                variants={{
                  rest: { y: 100 },
                  hovered: { y: 0 },
                }}
                className="text-white text-lg font-medium z-10"
              >
                Super-high-resolution photos
              </motion.p>
            </motion.div>

            {/* USB-C */}
            <motion.div whileHover='hovered' className="bg-black rounded-3xl flex flex-col justify-between items-center relative overflow-hidden flex-1 group">
              <motion.p initial={{y:-100}} animate={{y:10}} transition={{duration:0.5}} className="text-white text-md font-medium">USB-C</motion.p>
              <motion.img initial={{scale:2}} animate={{scale:1}} transition={{duration:0.5}} src="/usbline.png" className='absolute bottom-20 object-contain w-[40%]' variants={{hovered:{scale:1.1}}} alt="" />
              <motion.img initial={{scale:2}} animate={{scale:1}} transition={{duration:0.5}} src="/usblineout.png" className='absolute bottom-16 object-contain w-[60%] ' variants={{hovered:{scale:1.1}}} alt="" />
              <motion.p initial={{y:100}} animate={{y:-10}} transition={{duration:0.5}} className="text-white text-md">with USB 3</motion.p>
            </motion.div>
          </div>

          {/* Titanium (center large) */}
          <TitaniumCenter/>

          {/* middle bottom */}
          <div className="flex gap-4 row-span-1">
            {/* Dynamic Island */}
            <DynamicIsland/>

            {/* Wi-Fi 6e - RENDER THE COMPONENT HERE */}
            <WifiComponent />

            {/* Next generation portraits */}
            <div className="bg-black rounded-3xl flex justify-center items-start relative overflow-hidden p-2 flex-[2]">
              <motion.img initial={{opacity:0}} animate={{opacity:1, filter:'blur(10px)'}} whileHover={{filter:'blur(0px)'}} transition={{duration:0.5}} src="/nextgenport.png" className='absolute inset-0 w-full h-full object-fill' alt="" />
              <motion.p initial={{y:-100}} animate={{y:0}} transition={{duration:0.5}} className="text-white text-sm z-10">Next generation portraits</motion.p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="grid gap-4 flex-1">
          {/* Four Titanium Colors */}
          <FourTitanium/>

          {/* promotion */}
          <motion.div initial={{opacity:0}} animate={{opacity:1, filter:'blur(10px)'}} whileHover={{filter:'blur(0px)'}} transition={{duration:0.5}} className="bg-black rounded-3xl flex justify-center items-center row-span-1">
            <motion.p
              initial={{y:100}}
              animate={{y:0}}
              transition={{duration:0.5}}
              className="text-5xl font-bold bg-gradient-to-r from-black via-white to-black text-transparent bg-clip-text"
              >
              ProMotion
            </motion.p>
          </motion.div>
          {/* next-lavel */}
          <div className="bg-black rounded-3xl flex justify-center items-end row-span-1 relative overflow-hidden">
            <img src="/gaming.png" className="absolute inset-0 w-full h-full object-fill" alt="" />
            <motion.p initial={{y:100}} animate={{y:-10}} transition={{duration:0.5}} className="text-white text-sm font-medium z-10">
              Next-level mobile gaming
            </motion.p>
          </div>


          {/* Action button */}
          <Action/>
        </div>
      </div>
    </div>
  );
}