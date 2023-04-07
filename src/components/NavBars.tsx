import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import { motion } from 'framer-motion'

const CustomLink: React.FC<{ href: string, target?: string, className?: string, title: string }> = ({ href, target, className, title }) => {
    const router = useRouter()
    console.log(router)
    return (
        <Link href={href} target={target} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full
             transition-[width] ease duration-300
             ${router.asPath === href ? 'w-full' : 'w-0'}
             `}>
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar: React.FC = () => {
    return (
        <header
            className='w-full px-32 py-8 font-medium flex justify-between items-center'
        >
            <nav>
                <CustomLink href={'/'} title={'Home'} className='mr-4' />
                <CustomLink href={'/about'} title='About' className='mx-4' />
                <CustomLink href={'/contact'} title='Contact' className='ml-4' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap' >
                <motion.a href={'/'} target={'_blank'} whileHover={{ y:2 }} whileTap={{ scale:0.9 }}>
                    <FaTwitter className='text-2xl mr-4 text-[#1515db]' />
                </motion.a>
                <motion.a href={'/'} target={'_blank'} whileHover={{ y:2 }} whileTap={{ scale:0.9 }}>
                    <FaFacebook className='text-2xl mr-4 text-[#3737b9]' />
                </motion.a>
                <motion.a href={'/'} target={'_blank'} whileHover={{ y:2 }} whileTap={{ scale:0.9 }}>
                    <FaInstagram className='text-2xl text-[#aa142d]' />
                </motion.a>
            </nav>
            <div className='absolute top-2 left-[50%] translate-x-[-50%]' >
                <Logo />
            </div>
        </header>
    )
}

export default NavBar