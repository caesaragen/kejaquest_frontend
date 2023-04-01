import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import Image from 'next/image';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import state from '../store';

const Hero: React.FC = () => {
  const snap = useSnapshot(state);
  return (
   <AnimatePresence>
    {snap.intro && (
      <motion.section className='home' 
      {...slideAnimation('left')}>
        <motion.header {...slideAnimation('down')}>
          <Image src='/logo.png' width={100} height={100} alt='logo' />
        </motion.header>
        <motion.div className="home-content" {...headContainerAnimation}>
          <h1 className='head-text'>
            LET'S FIND YOUR <br className='hidden'/> NEXT HOME
          </h1>
          </motion.div>
          <motion.div {...headContainerAnimation} className='flex flex-col gap-5'>
            <p className='max-w-md font-normal text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quae.
              <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </strong>
            </p>
          </motion.div>
        </motion.section>
    )}
    </AnimatePresence>
  )
}

export default Hero