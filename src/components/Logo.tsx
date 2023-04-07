import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo: React.FC = () => {
  return (
    <div className='flex justify-center items-center mt-2'>
        <MotionLink href={'/'} 
        whileHover={{ 
            scale: 1.5 ,
            backgroundColor:["#121212", "#833ab4","#fd1d1d","#fcb045","#833ab4"],
            transition:{duration:1, repeat:Infinity, repeatType:"reverse"} 
        }}
        className='w-20 h-20 bg-black text-slate-100 text-light flex items-center justify-center rounded-full text-2xl font-bold'>
            {/* <Image src='/logo.png' alt='logo' className='w-20 h-20 bg-dark text-light flex items-center justify-center rounded' /> */}
            KQ
        </MotionLink>
        </div>
  )
}

export default Logo