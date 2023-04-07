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
                Rights
            </span>
            <Link href={'/'}>
            KaziQuest
            </Link>
            <Link href={'/contact'}>
            Contact
            </Link>
        </Layout>
    </footer>
  )
}

export default Footer