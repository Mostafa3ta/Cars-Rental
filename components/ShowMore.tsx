"use client";

import React from 'react'
import { CustomBtn } from '.'
import { ShowMoreProps } from '@/types';
import { updateSearchParams } from '@/util';
import { useRouter } from 'next/navigation';

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
    const router = useRouter();

    const handleShowMore = () => {
        const newLimit = (pageNumber + 1) * 10;

        const newPathName = updateSearchParams('limit', `${newLimit}`)

        router.push(newPathName)
    }

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                < CustomBtn
                    title='Show More'
                    btnType='button'
                    ContainerStyle='rounded-full hover:bg-blue-500 bg-primary-blue text-white'
                    handleClick={handleShowMore}
                />
            )}
        </div>
    )
}
