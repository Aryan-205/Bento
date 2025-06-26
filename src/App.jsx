import {hover, motion} from 'motion/react'

export default function App() {
  return (
    <div className="p-5 min-h-screen flex items-center justify-center"> 
      <div className="flex gap-4 min-h-[720px] w-full"> 
        {/* left */}
        <div className="grid gap-4 flex-1">
          <div className="flex gap-4 row-span-3">
            {/* 48MP Main Camera */}
            <motion.div initial='rest' whileHover='hover' className="group bg-black text-white rounded-3xl flex flex-col justify-between items-center relative overflow-hidden w-3/5"> 
              <motion.p variants={{rest:{y:100},hover:{y:0}}} transition={{duration:0.5}} className='z-10 text-3xl font-bold'>48MP</motion.p>
              <motion.img initial={{x:100, y:100}} animate={{x:0, y:0}} transition={{duration:0.5}} src="/image1.png" className='absolute top-8 left-4 w-full h-full object-contain z-20' alt="" />
              <p className='z-30 text-lg font-bold'>Main Camera</p>
            </motion.div>
            <div className="grid gap-4 w-2/5">
              {/* Ceramic Shield */}
              <div className="bg-black rounded-3xl flex items-center justify-center"> 
                <p className="text-white text-sm font-medium">Ceramic Shield</p>
              </div>

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
          <motion.div initil='rest' whileHover='hovered' className="bg-black rounded-3xl flex items-center justify-center gap-2 relative overflow-hidden  group row-span-1"> 
            <motion.div variants={{rest:{width:0},hovered:{width:100}}} transition={{duration:0.8}} className='absolute top-0 left-0 bg-green-500'/>
            <motion.img initial={{x:-250}} animate={{x:0}} transition={{duration:0.5}} src="battery.svg" className='w-8 h-8 z-20' alt="" />
            <motion.p initial={{x:250}} animate={{x:0}} transition={{duration:0.5}} className="text-white text-3xl font-medium z-20">
              All-day battery life
            </motion.p>
          </motion.div>

          <div className="flex gap-4 row-span-2">
            {/* 5x Telephoto */}
            <div className="bg-black rounded-3xl w-2/5 flex flex-col justify-center">
              <p className="text-white text-6xl font-bold text-center">5x</p>
              <p className="text-white text-sm text-center">Telephoto on Pro Max</p>
            </div>

            {/* Spatial Audio */}
            <div className="bg-black rounded-3xl flex justify-center items-end relative overflow-hidden w-3/5">
            <motion.img initial={{y:-100}} animate={{y:0}} transition={{duratio:0.5}} src="/metaglasses.png" className='absolute top-8 w-[80%] object-contain' alt="" />
              <motion.p initial={{y:100}} animate={{y:-10}} transition={{duration:0.5}} className="text-white text-sm z-10">Spatial Audio</motion.p>
            </div>
          </div>
        </div>

        {/* middle */}
        <div className="grid gap-4 flex-[2] grid-rows-4">
          {/* middle top */}
          <div className="flex gap-4 row-span-1">
            {/* A17 PRO */}
            <div className="bg-black rounded-3xl flex flex-col justify-center items-center relative overflow-hidden flex-1">
              <div className='absolute w-28 h-28 bg-gradient-to-br from-[#868583] to-[#181818] border border-gray-900' />
              <p className="text-black text-3xl font-bold z-10">A17</p>
              <p className="text-sm z-10 bg-gradient-to-bl from-[#D0CFCA] to-[#98938F] text-transparent bg-clip-text">PRO</p>
            </div>

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
            <div className="bg-black rounded-3xl flex flex-col justify-between items-center relative overflow-hidden flex-1">
              <motion.p initial={{y:-100}} animate={{y:10}} transition={{duration:0.5}} className="text-white text-md font-medium">USB-C</motion.p>
              <img src="/usbline.png" className='absolute bottom-20 object-contain w-[40%] ' alt="" />
              <motion.img initial={{scale:2}} animate={{scale:1}} transition={{duration:0.5}} src="/usblineout.png" className='absolute bottom-16 object-contain w-[60%] ' alt="" />
              <motion.p initial={{y:100}} animate={{y:-10}} transition={{duration:0.5}} className="text-white text-md">with USB 3</motion.p>
            </div>
          </div>

          {/* Titanium (center large) */}
          <div className="bg-black rounded-3xl flex flex-col justify-center items-center  row-span-2"> 
            <img src="/central.png" className='w-[80%]' alt="" />
          </div>

          {/* middle bottom */}
          <div className="flex gap-4 row-span-1">
            {/* Dynamic Island */}
            <div className="bg-black rounded-3xl flex justify-center items-center relative overflow-hidden flex-[2]">
              <img src="/dynamicIsland.png" className='absolute inset-0 w-full h-full object-fill' alt="" />
              <p className="text-white text-sm z-10">Dynamic Island</p>
            </div>

            {/* Wi-Fi 6e */}
            <div className="bg-black rounded-3xl flex flex-col justify-between items-center p-2 relative overflow-hidden flex-1">
              <motion.p initial={{y:-100}} animate={{y:0}} transition={{duration:0.5}} className="text-white text-lg font-bold z-10">Wi-Fi 6e</motion.p>
              <motion.img initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5}} src="/wifi.png" className='absolute top-12 w-[80%] object-contain' alt="" />
              <motion.p initial={{y:100}} animate={{y:0}} transition={{duration:0.5}} className="text-white text-lg font-bold z-10">and Thread</motion.p>
            </div>

            {/* Next generation portraits */}
            <div className="bg-black rounded-3xl flex justify-center items-start relative overflow-hidden p-2 flex-[2]"> 
              <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} src="/nextgenport.png" className='absolute inset-0 w-full h-full object-fill' alt="" />
              <motion.p initial={{y:-100}} animate={{y:0}} transition={{duration:0.5}} className="text-white text-sm z-10">Next generation portraits</motion.p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="grid gap-4 flex-1">
          {/* Four Titanium Colors */}
          <motion.div 
              initial='rest'
              whileHover="hovered"
              className="group rounded-3xl flex justify-center items-start pt-14 p-2 relative flex-[2] overflow-hidden bg-black"
            >
              <motion.img initial={{y:250}} animate={{y:0}} transition={{duration:0.5}} src="/4titanium.png" className="absolute top-8 left-0 right-0 bottom-0 w-full h-full object-fill" alt="" />

              <motion.p 
                variants={{
                  rest: { y: -100 },
                  hovered: { y: -50 },
                }}
                className="text-white text-lg font-medium z-10"
              >
                Four Titanium Colors
              </motion.p>
            </motion.div>

          {/* promotion */}
          <div className="bg-black rounded-3xl flex justify-center items-center row-span-1">
            <p className="text-5xl font-bold bg-gradient-to-r from-black via-white to-black text-transparent bg-clip-text">
              ProMotion
            </p>
          </div>
          {/* next-lavel */}
          <div className="bg-black rounded-3xl flex justify-center items-end row-span-1 relative overflow-hidden">
            <img src="/gaming.png" className="absolute inset-0 w-full h-full object-fill" alt="" />
            <motion.p initial={{y:100}} animate={{y:-10}} transition={{duration:0.5}} className="text-white text-sm font-medium z-10">
              Next-level mobile gaming
            </motion.p>
          </div>


          {/* Action button */}
          <div className="bg-black rounded-3xl flex justify-center items-start relative overflow-hidden row-span-3">
            <img src="/actionButton.png" className='absolute top-12 w-full h-full' alt="" />
            <motion.p initial={{y:100}} animate={{y:10}} transition={{duration:0.5}} className="text-white text-lg font-medium">Action button</motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}