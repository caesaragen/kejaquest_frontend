import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const CustomLink: React.FC<{href: string, target?: string, className?: string, title: string}> = ({href, target, className, title}) => {
    return (
        <Link href={href} target={target} >
            {title}
        </Link>
    )
    }

const NavBar: React.FC = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex justify-between items-center'
    >
        <nav>
            <CustomLink href={'/'} title={'Home'} />
            <CustomLink href={'/about'} title='About' />
            <CustomLink href={'/contact'} title='Contact' />
            </nav>

            <nav>
                <Link href={'/'} target={'_blank'} >
                    Twitter
                </Link>
                <Link href={'/'} target={'_blank'} >
                    Twitter
                </Link>
                <Link href={'/'} target={'_blank'} >
                    Twitter
                </Link>
            </nav>
<div className='absolute top-2 left-[50%] translate-x-[-50%]' >
    <Logo />
</div>
    </header>
  )
}

export default NavBar