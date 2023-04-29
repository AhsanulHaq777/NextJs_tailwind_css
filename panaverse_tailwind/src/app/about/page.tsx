import Image from 'next/image'
import React from 'react'

export default function about() {
  return (
    <div>
        <div className="bg-[url('/about.png')] bg-cover py-48">
            <h1 className=" sm:px-48 px-40 sm:text-5xl text-3xl font-bold font-serif text-white">About</h1>
        </div>
        <div className=" lg:flex w-[80%] text-center m-auto">
            <div className=" lg:w-1/2 w-full xl:px-20 md:pl-[25%] lg:px-16 lg:mt-20 md:mt-2 md:mb-0 mb-10">
                <Image alt=""  width="300" height="250" src="/president.webp" />
            </div>
            <div className=" lg:w-1/2 w-full text-justify lg:mt-20 md:mt-14 xl:px-16 lg:px-6">
                <h1 className=" text-xl font-bold font-serif">Dr. Arif Alvi</h1>
                <p className=" mt-5">
                    Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018. 
                    <br/>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”.
                    He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982).
                    He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.
                    <br/>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry.
                    He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001),
                    Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental
                    Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration
                    of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
                </p>
            </div>
        </div>
        <div className=" flex lg:flex-row flex-col-reverse w-[80%] text-center m-auto lg:mt-12 md:mt-2">
            <div className=" lg:w-1/2 md:w-full text-justify mt-20 xl:px-16 lg:px-6">
                <h1 className=" text-xl font-bold font-serif">Zia Khan</h1>
                <p className=" mt-5">
                    CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development 
                    Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing
                     mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless
                      computing, software design, project management, and API and App development. Expert in concept,
                       business modeling &amp; strategy development for startups, specializing in DeFi and token economics.
                        Mentored and trained hundreds of thousands of developers. Triple masters degrees in business 
                        administration, engineering, and finance from Arizona State University. Master in Economics
                         from KU. Certified Public Accountant and Certified Management Accountant in USA.
                         <br/>Extensive experience in software architecture, design, development, implementation,
                          and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work 
                          including thousands of hours of development work logged recently resulting in multiple
                           successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash,
                            FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.
                </p>
            </div>
            <div className=" lg:w-1/2 w-full md:pl-[25%] xl:px-20 lg:px-16 mt-20">
                <Image alt=""  width="300" height="250" src="/Zia.webp" />
            </div>
        </div>
        <div className=" lg:flex w-[80%] text-center m-auto mt-12 mb-8">
            <div className=" lg:w-1/2 md:w-full md:pl-[25%] xl:px-20 lg:px-16 mt-20">
                <Image alt=""  width="300" height="250" src="/panadao.webp" />
            </div>
            <div className=" lg:w-1/2 md:w-full text-justify mt-20 xl:px-16 lg:px-6">
                <h1 className=" text-xl font-bold font-serif">Panaverse DAO</h1>
                <p className=" mt-5">
                    Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders
                     and service providers. Panaverse DAO is struggling to produce professional metaverse developers 
                     from Pakistan for the upcoming Era of Internet President Dr. Arif Alvi has been a renowned 
                     professional and has held many important positions in the field of Dentistry. He remained Dean 
                     of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental 
                     Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental 
                     Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). 
                     Through his sheer hard work in the World Dental Federation, he was able to get the declaration 
                     of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
                </p>
            </div>
        </div>
    </div>
  )
}
