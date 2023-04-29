import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className=' md:flex align-middle gap-[30px] p-[60px] bg-gray-100 text-black'>
      <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
        <Image alt="panaverse" width="120" height="120" src="/Logo.webp"/>
        <p className=' pr-[40px] pt-6 text-gray-600'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread.</p>
      </div>
      <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
        <h1 className=' font-semibold text-2xl'>Useful Links</h1>
        <ul className=' pt-6 text-gray-600'>
          <li><a className='hover:text-black' href='/'>Home</a></li>
          <li><a className='hover:text-black' href='/explore'>Explore</a></li>
          <li><a className='hover:text-black' href='/contact'>Conact</a></li>
          <li><a className='hover:text-black' href='/about'>About</a></li>
        </ul>
      </div>
      <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
        <h1 className=' font-semibold text-2xl'>Follow Us</h1>
        <ul className=' pt-6 text-gray-600'>
          <li><a className='hover:text-black' href='/'>Facebook</a></li>
          <li><a className='hover:text-black' href='/'>LinkedIn</a></li>
          <li><a className='hover:text-black' href='/'>Twitter</a></li>
          <li><a className='hover:text-black' href='/'>GitHub</a></li>
        </ul>
      </div>
      <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
        <h1 className=' font-semibold text-2xl'>Contact Us</h1>
        <ul className=' pt-6 text-gray-600'>
          <li>+92 123 456 7890</li>
          <li>mymail@mail.com</li>
          <li>Lahore, Pakistan</li>
        </ul>
      </div>
    </div>
    <div className=' md:flex justify-between px-[60px] py-2 text-center'>
      <p className=' font-semibold mb-[10px] md:mb-[0px]'>All Rights Reserved © |<br className='md:hidden'/> Ahsan Ul Haq</p>
      <div className=' font-semibold'>
        <a href='/'>Legals | </a>
        <a href='/'>Terms of use | </a>
        <a href='/'>privacy policy</a>
      </div>
    </div>
    </>
  )
}
