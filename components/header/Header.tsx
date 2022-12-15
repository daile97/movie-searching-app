import Link from 'next/link'
import SearchBox from './ui/SearchBox'
import { RiMovie2Line } from 'react-icons/ri'
import { useState } from 'react'
import { SiThemoviedatabase } from 'react-icons/si'

export default function Header() {
    return (
        <header className='text-white w-screen h-[40px] bg-black sticky top-0 left-0 text-xl lg:pr-[20px] lg:h-[48px] lg:flex lg:flex-row-reverse lg:justify-between lg:items-center'>
            <SearchBox />
            <div className='flex items-center justify-between py-[10px] bg-black pr-[20px] lg:flex-1'>
                <div className='h-[20px] w-[20px]'></div>
                <Link href='/'>
                    <h1 className='font-bold flex items-center'>
                        <RiMovie2Line />
                        <span>{`Movee`}</span>
                    </h1>
                </Link>
                <Link href='/'>
                    <SiThemoviedatabase />
                </Link>
            </div>
        </header>
    )
}
