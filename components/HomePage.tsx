"use client"

import Image from "next/image";
import { CustomBtn } from ".";

export default function HomePage() {
    return <>

        <div className="homePage">
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='homePage__title'>Find, Book, or Rent a Car — very easily!</h1>
                <p className="homePage__subtitle">
                    Streamline your car rental experience with our effortless booking
                    process.
                </p>
                <CustomBtn
                    title='Explore Cars'
                    ContainerStyle='bg-primary-blue hover:bg-blue-500 text-white rounded-full mt-10'
                />
            </div>
            <div className="homePage__image-container">
                <div className="homePage__image">
                    <Image src="/hero.png" alt="Car" fill priority className="object-contain" />
                </div>
                <div className="homePage__image-overlay" />
            </div>
        </div>
    </>
}
