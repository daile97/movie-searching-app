'use client'
import { RiMenuFill, RiMovie2Line, RiSearchEyeLine } from 'react-icons/ri'
import { useState } from 'react'

export default function SearchBox() {
    const [isMenuOpened, setIsMenuOpened] = useState(false)
    const handleClick = () => {
        setIsMenuOpened(prevState => !prevState)
    }
    return (
        <>
            <div className='h-[48px] flex absolute top-0 left-0 pl-[20px] lg:hidden'>
                <RiMenuFill
                    onClick={handleClick}
                    className='self-center cursor-pointer'
                />
            </div>
            <div
                className={`w-screen ${
                    isMenuOpened ? 'h-screen' : 'h-0 overflow-hidden'
                } transition-['height'] duration-[300ms] absolute top-[48px] left-0 lg:h-[48px] lg:w-[200px] lg:static md:transition-none`}
            >
                <div className='w-full h-full pt-[20px] bg-black border-t-white border-t-2 border-t-solid lg:border-none lg:pt-0'>
                    <form className='flex flex-col justify-center items-center lg:w-full lg:h-full'>
                        <input
                            type='search'
                            placeholder='Search movie...'
                            className='lg:w-full'
                        />
                        <button
                            type='submit'
                            className='lg:hidden'
                        >
                            <RiSearchEyeLine />
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
