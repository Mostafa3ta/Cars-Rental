"use client";

import { CarProps } from '@/types';
import { generateCarImageUrl } from '@/util';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react'

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

export default function CarDetails({ car, isOpen, closeModal }: CarDetailsProps) {


    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 "
                        enterTo="opacity-100 "
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 "
                        leaveTo="opacity-0 "
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-75"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-75"
                            >
                                <Dialog.Panel className="relative w-full max-w-md transform overflow-y-auto rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                    <button
                                        type='button'
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-blue-100 rounded-full'
                                        onClick={closeModal}
                                    >
                                        <img
                                            src='/close.svg'
                                            alt='close'
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        />
                                        {/* <Image
                                            src='/close.svg'
                                            alt='close'
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        /> */}
                                    </button>

                                    <div className='flex-1 flex flex-col gap-3'>
                                        <div className='relative w-full bg-pattern bg-cover rounded-lg bg-center h-32'>
                                            {/* <Image alt='car' src={generateCarImageUrl(car)} fill priority className='object-contain' /> */}
                                            <img alt='car' src={generateCarImageUrl(car)} className='object-contain m-auto w-60' />
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='flex-1 relative w-full bg-blue-100 rounded-lg bg-center h-20'>
                                                {/* <Image alt='car' src={generateCarImageUrl(car,'29')} fill priority className='object-contain' /> */}
                                                <img alt='car' src={generateCarImageUrl(car,'29')} className='object-contain' />
                                            </div>
                                            <div className='flex-1 relative w-full bg-blue-100 rounded-lg bg-center h-20'>
                                                {/* <Image alt='car' src={generateCarImageUrl(car,'33')} fill priority className='object-contain' /> */}
                                                <img alt='car' src={generateCarImageUrl(car,'33')} className='object-contain' />
                                            </div>
                                            <div className='flex-1 relative w-full bg-blue-100 rounded-lg bg-center h-20'>
                                                {/* <Image alt='car' src={generateCarImageUrl(car,'13')} fill priority className='object-contain' /> */}
                                                <img alt='car' src={generateCarImageUrl(car,'13')} className='object-contain' />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='flex-1 flex flex-col gap-2'>
                                        <h2 className='capitalize text-xl font-bold'>
                                            {car.make} {car.model}
                                        </h2>

                                        <div className='mt-3 flex flex-wrap gap-4'>
                                            {Object.entries(car).map(([key, value]) => <>
                                                <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                                    <h4 className='text-gray-500 capitalize'>{key.split('_').join(' ')}</h4>
                                                    <p className='text-black-100 font-semibold'>{value}</p>
                                                </div>
                                            </>)}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
