import {motion} from 'motion/react'

export default function Action(){
  return (
    <div className="bg-black rounded-3xl flex justify-center items-start relative overflow-hidden row-span-3">
      <img src="/actionButton.png" className='absolute top-12 left-4 w-full h-full z-10' alt="" />
      <motion.p initial={{y:100}} animate={{y:10}} transition={{duration:0.5}} className="text-white text-lg font-medium">Action button</motion.p>
    </div>
  )
}