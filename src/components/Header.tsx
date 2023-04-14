import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";

export default function Header(){
    return(
        <div className="flex md:bg-transparent bg-gray-300 mx-auto justify-between items-center px-6 lg:px-12 z-20 h-18 py-2 w-full font-sans absolute">
            <div className=" flex flex-shrink-0 items-center">
                <Image src='/Logo.webp' alt='panaverse' width={120} height={120} />
            </div>
            <div>
                <ul className="md:flex space-x-[45px] text-lg font-semibold text-white hidden">
                    <li className=" hover:text-xl hover:font-serif hover:animate-bounce pt-2">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className=" hover:text-xl hover:font-serif hover:animate-bounce pt-2">
                        <Link href="/explore">Explore</Link>
                    </li>
                    <li className=" hover:text-xl hover:font-serif hover:animate-bounce pt-2">
                        <Link href='/about'>About</Link>
                    </li>
                    <li className=" hover:text-xl hover:font-serif hover:animate-bounce pt-2">
                        <Link href='/contact'>Contact</Link>
                    </li>
                    
                        <button className="bg-blue-600 px-6 py-2 text-white rounded-xl lg:text-xl text-sm font-semibold hover:bg-red-800 hover:scale-125">Apply</button>
                    
                </ul>
            </div>
            <div className=" right-6 static md:hidden text-3xl text-white"><FiMenu/></div>
        </div>
    )
}