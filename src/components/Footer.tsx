import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-black font-medium
    text-lg
    '>
            <Layout className='py-8 flex items-center justify-between'>
                <span>
                    &copy; 2021 KaziQuest
                </span>
                <span>
                    {new Date().getFullYear()}
                    &copy; All Rights Reserved
                </span>
                <div className='flex items-center'>
                    Built with <span className='text-[red] text-2xl px-1'>&#9825; </span> by  
                    <Link href={'https://joeladuma.vercel.app/'}className='ml-1 underline underline-offset-2'> Caesar
                    </Link>
                </div>
                <Link href={'/contact'}>
                    Contact
                </Link>
            </Layout>
        </footer>
    )
}

export default Footer