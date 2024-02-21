import Image from 'next/image'
import React from 'react'
import { CustomBtn } from '.'

export default function Navbar() {
  return <>
    <header className='w-full absolute z-10'>
        <nav className='navbar__styles'>
            <Image
                src="/logo.svg"
                alt='logo'
                width={115}
                height={15}
                className='object-contain'
            />

            <CustomBtn 
                title='Sign Up'
                ContainerStyle='text-primary-blue lg:bg-white rounded-full hover:bg-blue-300 hover:text-white bg-blue-100'
                btnType='button'
            />
        </nav>
    </header>
  </>
}
