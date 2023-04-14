import React from 'react'

export default function Explore() {
  return (
    <>
      
        <div className="bg-[url('/explore.png')] bg-cover  lg:py-36 xl:py-44 md:py-28 py-36">
          <h1 className=' lg:px-48 md:px-36 px-28 lg:text-5xl md:text-3xl text-2xl  lg:-mt-4 xl:-mt-0 md:font-bold font-semibold font-serif text-white'>Explore</h1>
        </div>
      
      <div className= ' xl:px-56 lg:px-44 md:px-28 sm:px-20 px-10  md:-mt-0 -mt-12'>
          <h1 className='lg:text-5xl md:text-4xl text-xl text-center font-serif lg:font-bold font-semibold'>Course Syllabus</h1>
          <p className=' mt-6 lg:text-lg md:text-base text-justify md:text-center text-sm'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each.</p>
      </div>
      <div className= '  lg:px-48 md:px-36 sm:px-28 px-14 lg:mt-24 md:mt-16 mt-5'>
          <h1 className='lg:text-4xl md:text-3xl text-lg text-center font-serif md:font-bold font-semibold'>Base Track</h1>
          <p className=' mt-4 lg:text-lg md:text-base text-justify md:text-center text-sm'>Every participant of the program will start by completing the following three core courses.</p>
      </div>
      <div className=' flex lg:flex-row flex-col w-[80%] items-center justify-around m-auto mt-12 lg:px-[80px] md:px-[60px] sm:px-[45px] px-[25px] gap-5'>
        <div className=' text-center  bg-slate-300 rounded-3xl lg:shadow-xl shadow-lg  lg:px-[30px] px-[24px] lg:py-[60px] py-[50px]'>
          <h1 className=' lg:text-2xl text-xl font-semibold pb-8'>Quarter I</h1>
          <p>CS-101: Object-Oriented Programming using TypeScript and Typescript for React</p>
        </div>
        <div className=' text-center  bg-slate-300 rounded-3xl lg:shadow-xl shadow-lg plg:x-[30px]  px-[24px] lg:py-[90px] py-[50px]'>
          <h1 className=' lg:text-2xl text-xl font-semibold pb-8'>Quarter II</h1>
          <p>W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13</p>
        </div>
        <div className=' text-center  bg-slate-300 rounded-3xl lg:shadow-xl shadow-lg plg:x-[30px]  px-[24px] lg:py-[100px] py-[50px]'>
          <h1 className=' lg:text-2xl text-xl font-semibold pb-8'>Quarter III</h1>
          <p>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
        </div>
      </div>
      <div className= ' lg:px-48 md:px-36 sm:px-28 px-12 lg:mt-24 md:mt-16 mt-12 md:mb-0 sm:mb-20'>
          <h1 className='lg:text-4xl md:text-3xl text-lg text-center font-serif md:font-bold font-semibold'>Specialized Track</h1>
          <p className=' mt-4 lg:text-lg md:text-base text-justify md:text-center text-sm'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each</p>
      </div>


      <div className='bg-[url("https://img.freepik.com/premium-photo/grunge-dark-background-texture_118047-12921.jpg")] bg-cover bg-fixed'>
        <div className=' mt-10  z-10 lg:h-[80vh] h-[100vh]  flex lg:flex-row flex-col relative lg:pt-0 pt-5'>
          <div className='lg:w-1/2 m-auto space-y-4 relative sm:pl-20 pl-10 sm:pr-10 pr-5'>
              <h1 className='absolute md:text-[200px] sm:text-[150px] text-[110px] md:left-[100px] sm:left-[100px] font-bold lg:bottom-[30px] md:-bottom-[10px] sm:bottom-[40px] bottom-[65px] -z-10 text-opacity-20 text-black'>1</h1>
              <h1 className='text-white md:text-5xl sm:text-4xl text-xl font-bold md:pl-[110px] sm:pl-[95px] pl-[55px]'> Artificial Intelligence and Deep Learning Specialization</h1>
              <p className=' lg:text-lg sm:text-base text-sm sm:pl-10 pl-2'>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
          </div>
          <div className='lg:w-1/2 lg:m-auto lg:flex flex-col lg:space-y-0 space-y-6 mt-10 lg:px-0 sm:px-16 px-8  relative'>
            <div className=' lg:w-1/2 lg:absolute -bottom-[20px] left-[250px] text-center  bg-gray-300 rounded-3xl lg:shadow-2xl shadow-xl py-16 px-5'>
              <h1 className=' text-2xl font-semibold'>Quarter IV</h1>
              <p className=' mt-8'>AI-351: Developing Planet-Scale APIs and Python Programming</p>
            </div>
            <div className=' lg:w-1/2  lg:absolute -top-[30px] left-[50px] text-center bg-gray-300 rounded-3xl lg:shadow-2xl shadow-xl py-16 px-5'>
              <h1 className=' text-2xl font-semibold'>Quarter V</h1>
              <p className=' mt-8'>AI-361: Deep Learning and MLOps (Machine Learning Operations)</p>
            </div>
          </div>
          
        </div>

        <div className='lg:mt-0 sm:mt-72 mt-72 z-10 lg:h-[80vh] h-[100vh]  flex lg:flex-row flex-col-reverse relative lg:pt-0 pt-5'>
          
          <div className='lg:w-1/2 lg:m-auto lg:flex flex-col lg:space-y-0 space-y-6 mt-14 lg:px-0 sm:px-16 px-8 relative'>
            <div className=' lg:w-1/2 lg:absolute -bottom-[20px] left-[250px] text-center bg-gray-300 rounded-3xl shadow-2xl py-16 px-5'>
              <h1 className=' text-2xl font-semibold'>Quarter IV</h1>
              <p className=' mt-8'>CN-351: Certified Kubernetes Application Developer (CKAD)</p>
            </div>
            <div className=' lg:w-1/2 lg:absolute -top-[30px] left-[50px] text-center bg-gray-300 rounded-3xl shadow-2xl py-16 px-5'>
              <h1 className=' text-2xl font-semibold'>Quarter V</h1>
              <p className=' mt-8'>CN-361: Developing Multi-Cloud APIs using CDK for Terraform</p>
            </div>
          </div>
          <div className='lg:w-1/2 m-auto space-y-4 relative sm:pl-20 pl-10 sm:pr-10 pr-5'>
              <h1 className='absolute md:text-[200px] sm:text-[150px] text-[110px] sm:left-[110px] left-[45px] font-bold md:bottom-[1px] sm:bottom-[12px] bottom-[40px] -z-10 text-opacity-20 text-black'>2</h1>
              <h1 className='text-white md:text-5xl sm:text-4xl text-xl font-bold md:pl-[140px] sm:pl-[120px] pl-[75px]'> Cloud-Native and Computing Specialization</h1>
              <p className=' lg:text-lg sm:text-base text-sm sm:pl-10 pl-2'>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</p>
          </div>
        </div>
        
        <div className='lg:mt-0 mt-14  z-10 lg:h-[80vh] h-[100vh]  flex lg:flex-row flex-col relative lg:pt-0 pt-5'>
          <div className='lg:w-1/2 m-auto space-y-4 relative sm:pl-20 pl-10 sm:pr-10 pr-5'>
              <h1 className='absolute md:text-[200px] sm:text-[150px] text-[110px] sm:left-[110px] left-[45px] font-bold md:bottom-[55px] sm:bottom-[85px] bottom-[110px] -z-10 text-opacity-20 text-black'>3</h1>
              <h1 className='text-white md:text-5xl sm:text-4xl text-xl font-bold md:pl-[140px] sm:pl-[120px] pl-[70px]'> Web 3.0 (Blockchain) and Metaverse Specialization</h1>
              <p className=' lg:text-lg sm:text-base text-sm sm:pl-10 pl-2'>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
          </div>
          <div className='lg:w-1/2 lg:m-auto lg:flex flex-col lg:space-y-0 space-y-6 mt-10 lg:px-0 sm:px-16 px-8 relative'>
            <div className=' lg:w-1/2 lg:absolute -bottom-[20px] left-[250px] text-center bg-gray-300 rounded-3xl shadow-2xl py-16 px-5'>
              <h1 className=' text-2xl font-semibold'>Quarter IV</h1>
              <p className=' mt-8'>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</p>
            </div>
            <div className=' lg:w-1/2 lg:absolute -top-[30px] left-[50px] text-center bg-gray-300 rounded-3xl shadow-2xl py-16 px-5'>
              <h1 className=' text-2xl font-semibold'>Quarter V</h1>
              <p className=' mt-8'>MV-361: Developing Planet-Scale and Augmented Metaverse Experiences</p>
            </div>
          </div>
        </div>

        <div className='lg:mt-0 md:mt-80 sm:mt-96 mt-[300px] z-10  lg:h-[80vh] h-[100vh]  flex lg:flex-row flex-col-reverse relative lg:pt-0 pt-5'>
          
          <div className='lg:w-1/2 lg:m-auto lg:flex flex-col lg:space-y-0 space-y-6 mt-10 lg:px-0 sm:px-16 px-8 relative'>
            <div className=' lg:w-1/2 lg:absolute -bottom-[20px] left-[250px] text-center bg-gray-300 rounded-3xl shadow-2xl py-16 px-5'>
              <h1 className=' text-2xl font-semibold'>Quarter IV</h1>
              <p className=' mt-8'>AC-351: Ambient Computing with Voice Assistants and Matter Devices</p>
            </div>
            <div className=' lg:w-1/2 lg:absolute -top-[30px] left-[50px] text-center bg-gray-300 rounded-3xl shadow-2xl py-16 px-5'>
              <h1 className=' text-2xl font-semibold'>Quarter V</h1>
              <p className=' mt-8'>AC-361: Embedded Programming using C and Rust</p>
            </div>
          </div>
          <div className='lg:w-1/2 m-auto space-y-4 relative sm:pl-20 pl-10 sm:pr-10 pr-5'>
              <h1 className='absolute md:text-[200px] sm:text-[150px] text-[110px] sm:left-[110px] font-bold md:bottom-[25px] sm:bottom-[30px] bottom-[50px] -z-10 text-opacity-20 text-black'>4</h1>
              <h1 className='text-white md:text-5xl sm:text-4xl text-xl font-bold md:pl-[145px] sm:pl-[130px] pl-[70px]'> Ambient Computing and IoT (ACIoT) Specialization</h1>
              <p className=' lg:text-lg sm:text-base text-sm sm:pl-10 pl-2'>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.</p>
          </div>
        </div>

        <div className='lg:mt-0 lg:pb-0 pb-6  z-10 lg:h-[80vh] h-[140vh]  flex lg:flex-row flex-col relative lg:pt-0 pt-5 '>
          <div className='lg:w-1/2 m-auto space-y-4 relative sm:pl-20 pl-10 sm:pr-10 pr-5'>
              <h1 className='absolute md:text-[200px] sm:text-[150px] text-[110px] sm:left-[110px] font-bold sm:bottom-[110px] bottom-[150px] -z-10 text-opacity-20 text-black'>5</h1>
              <h1 className='text-white md:text-5xl sm:text-4xl text-xl font-bold md:pl-[145px] sm:pl-[130px] pl-[70px]'> Genomics and Bioinformatics Specialization</h1>
              <p className=' lg:text-lg sm:text-base text-sm sm:pl-10 pl-2'>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focus on performing complex bioinformatics analysis using the most essential Python libraries and applications.</p>
          </div>
          <div className='lg:w-1/2 lg:m-auto lg:flex flex-col lg:space-y-0 space-y-6  lg:px-0 sm:px-16 px-8 relative'>
            <div className=' lg:w-1/2 lg:absolute -bottom-[20px] left-[250px] text-center bg-gray-300 rounded-3xl shadow-2xl py-16 px-5'>
              <h1 className=' text-2xl font-semibold'>Quarter IV</h1>
              <p className=' mt-8'>Bio-351: Python for Biologists</p>
            </div>
            <div className=' lg:w-1/2 lg:absolute -top-[30px] left-[50px] text-center bg-gray-300 rounded-3xl shadow-2xl py-16 px-5'>
              <h1 className=' text-2xl font-semibold'>Quarter V</h1>
              <p className=' mt-8'>Bio-361: Bioinformatics with Python</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
