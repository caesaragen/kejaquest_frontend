import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Tooltip } from '@mui/material';
import { useContextState } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
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
import UserProfile from './UserProfile';

interface Props {
    title: string;
    customFunction: () => void;
    icon: JSX.Element;
    color: string;
    dotColor: string;
}

const NavButton = ({ title, customFunction, icon, color, dotColor }: Props) => {
    return (
        <Tooltip title={title}  >
            <button type="button" onClick={customFunction}
                style={{ color }}
                className="relative rounded-full p-3 hover:bg-light-gray text-xl">
                <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
                {icon}
            </button>
        </Tooltip>
    )
};

const Navbar: React.FC = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useContextState();
    const [navbar, setNavbar] = useState(false);
    const snap = useSnapshot(state);
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    console.log(screenSize);
    useEffect(() => {

        if (screenSize <= 900) {
            setActiveMenu(false);
        }
        else {
            setActiveMenu(true);
        }
    }
        , [screenSize, setActiveMenu]);
    return (
        <div className="flex justify-between relative bg-main-bg dark:bg-main-dark-bg ">
            <nav className="w-full bg-[#f5f5f5] dark:text-gray-200 dark:bg-black shadow">
                <div className="justify-between px-4 mx-auto md:items-center lg:max-w-full md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="javascript:void(0)">
                                {snap.intro && (
                                    <motion.section className='' {...slideAnimation('left')}>
                                        <motion.header>
                                            <Image src='/logo.png' width={70} height={30} alt='logo' />
                                        </motion.header>
                                    </motion.section>
                                )}
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="dark:text-white hover:text-indigo-200">
                                    <a href="javascript:void(0)">Home</a>
                                </li>
                                <li className="dark:text-white hover:text-indigo-200">
                                    <a href="javascript:void(0)">Blog</a>
                                </li>
                                <li className="dark:text-white hover:text-indigo-200">
                                    <a href="javascript:void(0)">About US</a>
                                </li>
                                <li className="dark:text-white hover:text-indigo-200">
                                    <a href="javascript:void(0)">Contact US</a>
                                </li>
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                <a
                                    href="javascript:void(0)"
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Sign in
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex'>

                        <NavButton
                            title="Chat"
                            color={currentColor}
                            dotColor="#03C9D7"
                            icon={<BsChatLeft />}
                            customFunction={() => handleClick('chat')}
                        />
                        <NavButton
                            title="Notification"
                            color={currentColor}
                            dotColor="#03C9D7"
                            icon={<RiNotification3Line />}
                            customFunction={() => handleClick('notification')}
                        />
                        <NavButton title="Menu" dotColor={"red"} color={currentColor} icon={<AiOutlineMenu />} customFunction={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} />

                        <Tooltip
                            title="Profile"
                        //   position="BottomCenter"
                        >
                            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
                                onClick={() => handleClick('userProfile')}>
                                <Image
                                    src={avatar}
                                    alt="avatar"
                                    className="rounded-full h-8 w-8"
                                />
                                <p>
                                    <span className="text-gray-400 text-14">Hi,</span>{" "}
                                    <span className="text-gray-400 font-bold ml-1 text-14">Joel</span>
                                </p>
                                <MdKeyboardArrowDown className="text-gray-400 text-14" />
                            </div>
                        </Tooltip>
                        {isClicked.userProfile && <UserProfile />}
                        {/* {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} */}
                        <div className="hidden space-x-2 md:flex">
                            <a
                                href="javascript:void(0)"
                                className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                            >
                                Sign in
                            </a>
                            <a
                                href="javascript:void(0)"
                                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar