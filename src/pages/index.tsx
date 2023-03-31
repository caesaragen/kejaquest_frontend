import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FiSettings } from 'react-icons/fi';
import { ContextProvider, useContextState } from '@/contexts/ContextProvider'
import { ThemeSettings, Navbar } from '@/components';
import { Tooltip } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useContextState();
  console.log(currentMode)
  return (
    <>
      <Head>
        <title>KejaQuest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`flex flex-col justify-between items-center min-h-screen ${currentMode === 'Dark' ? 'dark' : ''}`}>
      <div className="fixed right-4 bottom-4" style={{zindex:`1000`}}>
                        <Tooltip title="Settings">
                            <button onClick={()=> setThemeSettings(true)} 
                            type='button'
                            className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
                            style={{background:currentColor,borderRadius:`50%` }}>
                                <FiSettings />
                            </button>
                        </Tooltip>
                    </div>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar />
        </div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        {themeSettings && <ThemeSettings />}
      </main>
    </>
  )
}
