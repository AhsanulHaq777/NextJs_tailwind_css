import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Footer(){
    return(
        <>
            <div className=" md:flex align-middle gap-[30px] p-[60px] bg-gray-100 text-black">
            <div className=" md:w-1/4 mb-[20px] md:mb-[0px]">
                <Image alt='footer logo' src='/Logo.webp' height={120} width={120}/>
                <p className=" pr-[40px] pt-6 text-gray-600">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread.</p>
            </div>
            <div className=" md:w-1/4 mb-[20px] md:mb-[0px]">
                <h1 className=" font-semibold text-2xl">Useful Links</h1>
                <ul className=" pt-6 text-gray-600">
                    <li><Link href='/' className="hover:text-black">Home</Link></li>
                    <li><Link href='/' className="hover:text-black">Explore</Link></li>
                    <li><Link href='/' className="hover:text-black">Contact</Link></li>
                    <li><Link href='/' className="hover:text-black">About</Link></li>
                </ul>
            </div>
            <div className=" md:w-1/4 mb-[20px] md:mb-[0px]">
                <h1 className=" font-semibold text-2xl">Follow Us</h1>
                <ul className=" pt-6 text-gray-600">
                    <li><Link href='/' className="hover:text-black">Facebook</Link></li>
                    <li><Link href='/' className="hover:text-black">Likedin</Link></li>
                    <li><Link href='/' className="hover:text-black">Twitter</Link></li>
                    <li><Link href='/' className="hover:text-black">Github</Link></li>
                </ul>
            </div>
            <div className=" md:w-1/4 mb-[20px] md:mb-[0px]">
                <h1 className=" font-semibold text-2xl">Contact Us</h1>
                <ul className=" pt-6 text-gray-600">
                    <li>+92 123 456 7890</li>
                    <li>mymail@mail.com</li>
                    <li>Lahore, Pakistan</li>
                </ul>
            </div>
            </div>
            <div className=" md:flex justify-between px-[60px] py-2 text-center">
                <p className=" font-semibold mb-[10px] md:mb-[0px]">All Rights Reserved © |<br className="md:hidden"/> Ahsan Ul Haq</p>
                <div className=" font-semibold">
                    <Link href={'/'}>Legals | </Link> 
                    <Link href={'/'}>Terms of use | </Link> 
                    <Link href={'/'}>privacy policy</Link>
                </div>
            </div>
        </>
    )
}