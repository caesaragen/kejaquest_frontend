import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import { ContextProvider, useContextState } from '@/contexts/ContextProvider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useContextState();
  return (
    <>
      <Head>
        <title>KejaQuest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${currentMode === 'Dark' ? 'dark' : ''}`}>
        <Navbar />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </main>
    </>
  )
}
