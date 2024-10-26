'use client'

import { manufacturers } from '@/constants'
import { SearchGeneratorProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'


export default function SearchBarGenerator({ manufacturer, setManuFacturer }: SearchGeneratorProps) {
    const [query, setQuery] = useState('')

    const filterManufacturers = query === '' ? manufacturers : manufacturers.filter((item) =>
        item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
    );

    return <>
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManuFacturer}>
                <div className="relative w-full">
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                            src='/car-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='car logo'
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className='search-manufacturer__input'
                        displayValue={(manufacturer: string) => manufacturer}
                        placeholder='Volkwagn...'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className='absolute bg-white z-20 w-full max-h-80 shadow-xl overflow-auto'>
                            {filterManufacturers.length === 0 && query !== '' ? (
                                <div className="absolute cursor-default z-20 select-none px-4 py-2 bg-white text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filterManufacturers.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ?
                                                'bg-primary-blue text-white' : 'text-gray-900'}`
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ?
                                                        'font-medium' : 'font-normal'}`}
                                                >
                                                    {item}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ?
                                                            'text-white' : 'text-teal-600'}`}
                                                    >
                                                        <img
                                                            alt='check'
                                                            src='check.svg'
                                                            height={20}
                                                            width={20}
                                                        />
                                                        {/* <Image
                                                            alt='check'
                                                            src='check.svg'
                                                            height={20}
                                                            width={20}
                                                        /> */}
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>
        </div>
    </>
}
