"use client"

import { CustumBtnProps } from '@/types';
import Image from 'next/image';
import React from 'react'


export default function CustomBtn({ title, ContainerStyle, handleClick, btnType, rightIcon, textStyles }: CustumBtnProps) {
    return (
        <button
            disabled={false}
            type={btnType || 'button'}
            className={`custom-btn ${ContainerStyle}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="arrow right"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    )
}
