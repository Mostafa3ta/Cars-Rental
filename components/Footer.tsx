import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return <>
    <footer className='footer'>
      <div className="footer__links-container">
        <div className="flex flex-col justify-start items-start gap-6">
          {/* <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' /> */}
          <img src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
          <p className='text-base text-gray-700'>
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className='footer__link'>
              <h3 className='font-bold'>{item.title}</h3>
              <div className='flex flex-col gap-5'>
                {item.links.map((link) => (
                  <Link key={link.title} href={link.url} target={link.target} className='text-gray-500 hover:text-gray-950'>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__copyrights">
        <p>@2023 CarHub. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  </>
}
