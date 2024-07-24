'use client';

import React, { useState } from 'react'
import { SearchBarGenerator } from '.'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBtn = ({ otherClasses }: { otherClasses: string }) => (
    <button className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src={"/magnifying-glass.svg"}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
)


export default function SearchBar() {
    const [manufacturer, setManuFacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (manufacturer.trim() === '' && model.trim() === '') {
           return alert('Please provide some input')
        }
        updateSearchPath(manufacturer.toLowerCase(), model.toLowerCase())
    }

    const updateSearchPath = (manufacturer: string, model: string) => {

        const SearchParams = new URLSearchParams(window.location.pathname)

        if (manufacturer) {
            SearchParams.set('manufacturer', manufacturer)
        } else {
            SearchParams.delete("manufacturer");
        }

        if (model) {
            SearchParams.set('model', model)
        } else {
            SearchParams.delete("model");
        }

        const newPathname = `${window.location.pathname}?${SearchParams.toString()}`;

        router.push(newPathname);

    }
    return <>
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchBarGenerator
                    manufacturer={manufacturer}
                    setManuFacturer={setManuFacturer}
                />
                <SearchBtn otherClasses='sm:hidden' />
            </div>

            <div className='searchbar__item'>
                <img
                    alt='car model'
                    src={'/model-icon.png'}
                    width={25}
                    height={25}
                    className='absolute ml-4'
                />
                {/* <Image
                    alt='car model'
                    src={'/model-icon.png'}
                    width={25}
                    height={25}
                    className='absolute ml-4'
                /> */}
                <input
                    type='text'
                    name='model'
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder='Tiguan...'
                    className='searchbar__input'
                />
                <SearchBtn otherClasses='sm:hidden' />
            </div>
            <SearchBtn otherClasses='max-sm:hidden' />

        </form>
    </>
}
