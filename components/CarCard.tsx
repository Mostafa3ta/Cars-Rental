"use client"

import { CarProps } from '@/types'
import { calculateCarRent, generateCarImageUrl } from '@/util';
import Image from 'next/image';
import React, { useState } from 'react'
import { CarDetails, CustomBtn } from '.';

interface CarCardProps {
    car: CarProps;
}

export default function CarCard({ car }: CarCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { model, city_mpg, transmission, make, year, drive } = car
    const carRent = calculateCarRent(city_mpg, year)
    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>{model}</h2>
            </div>

            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                {carRent}
                <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                {/* <Image src={generateCarImageUrl(car)} alt='car img' fill priority className='object-contain' /> */}
                <img src={generateCarImageUrl(car)} alt='car img' className='object-contain w-80' />
            </div>

            <div className="relative flex w-full mt-2">
                <div className='flex group-hover:invisible justify-between w-full text-gray'>
                    <div className="flex flex-col justify-center items-center gab-2">
                        {/* <Image src={'steering-wheel.svg'} alt='drive icon' width={20} height={20} /> */}
                        <img src={'steering-wheel.svg'} alt='drive icon' width={20} height={20} />
                        <p className='text-[14px]'>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gab-2">
                        {/* <Image src={'tire.svg'} alt='drive icon' width={20} height={20} /> */}
                        <img src={'tire.svg'} alt='drive icon' width={20} height={20} />
                        <p className='text-[14px]'>{drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gab-2">
                        {/* <Image src={'gas.svg'} alt='drive icon' width={20} height={20} /> */}
                        <img src={'gas.svg'} alt='drive icon' width={20} height={20} />
                        <p className='text-[14px]'>{city_mpg} MPG</p>
                    </div>

                </div>
                <div className="car-card__btn-container">
                    <CustomBtn
                        title='View More Details'
                        ContainerStyle='w-full bg-primary-blue hover:bg-blue-700 rounded-full py-[16px]'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails car={car} isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        </div>
    )
}
