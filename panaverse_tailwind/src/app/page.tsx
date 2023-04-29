import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="bg-[url('/bg.avif')] bg-cover bg-fixed text-center lg:px-48 px-4 lg:py-40 py-28 text-white rounded-b-[30%]">
        <h1 className='lg:text-2xl text-lg font-semibold font-serif mt-5'>Earn as you learn program</h1>
        <h1 className=' lg:text-6xl  text-3xl lg:font-extrabold font-bold mt-2'>
        Prepare yourself for the Next Generation of Internet with 
        <span className='text-red-600'> Panaverse</span>
        </h1>
        <p className=' lg:text-xl text-md mt-6 lg:px-[160px]'>
        One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
        </p>
        <button className=' text-white rounded-lg font-semibold lg:px-8 px-4 hover:bg-red-800 py-3 bg-blue-600 mt-6'>More Info</button>
      </div>
      <div className=' flex flex-col md:flex-row w-[80%] items-center justify-around md:px-0 px-[80px] space-y-[50px] md:mt-[-90px] mt-[-50px] rounded-3xl m-auto shadow-2xl py-[50px] bg-white'>
      <Image alt="panaverse" width="140" height="140" src="/Logo.webp"/>
      <Image alt="panacloud" width="140" height="140" src="/panacloud.svg"/>
      <Image alt="piaic" width="80" height="80" src="/PIAIC.svg"/>
      <Image alt="saylani" width="140" height="140" src="/saylaniLogo.webp"/>
      </div>
      <div className=' lg:flex m-auto my-8 w-[80%] mt-24'>
        <div className=' lg:w-1/2 animate-pulse'>
        <Image alt="saylani" width="400" height="400" src="/program.webp"/>
        </div>
        <div className=' lg:w-1/2 pt-10'>
          <h1 className=' md:text-5xl text-3xl font-serif md:font-bold font-semibold'>Program Of Studies</h1>
          <p className=' text-md mt-4 text-justify'>
          This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.
          </p>
          <button className=' text-white rounded-lg font-semibold md:px-8 px-4 hover:bg-red-800 py-3 bg-blue-600 mt-6'>Read More</button>
        </div>
      </div>
      <div className=' w-[80%] justify-around  m-auto mt-12'>
        <h1 className=' md:text-4xl text-3xl font-serif md:font-bold font-semibold text-center'><span className='text-red-600'>Panaverse</span> Instructors</h1>
        <div className='  md:grid mt-14 gap-8 pb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
          <div className=' bg-white rounded-2xl shadow-2xl pt-5'>
            <div className="bg-[url('/zia.jpg')] bg-cover rounded-full  md:h-[150px] md:w-[150px] h-[100px] w-[100px] m-auto"></div>
            <div className=' pt-5 text-center'>
              <h1 className=' font-semibold text-lg'>Zia Khan</h1>
              <p className=' text-gray-500'>COO Panaverse</p>
              <button className=' border-2 hover:border-red-600 hover:text-red-600 border-blue-600 rounded-xl mt-2 mb-5 px-2 text-sm text-blue-600'>Profile</button>
            </div>
          </div>
          <div className=' bg-white rounded-2xl shadow-2xl pt-5 md:mt-0 mt-6'>
            <div className="bg-[url('/danial.jfif')] bg-cover rounded-full md:h-[150px] md:w-[150px] h-[100px] w-[100px] m-auto"></div>
            <div className=' pt-5 text-center'>
              <h1 className=' font-semibold text-lg'>Daniyal Nagori</h1>
              <p className=' text-gray-500'>CEO Panaverse</p>
              <button className=' border-2 hover:border-red-600 hover:text-red-600 border-blue-600 rounded-xl mt-2 mb-5 px-2 text-sm text-blue-600'>Profile</button>
            </div>
          </div>
          <div className=' bg-white rounded-2xl shadow-2xl pt-5 md:mt-0 mt-6'>
            <div className="bg-[url('/hira.jpg')] bg-cover rounded-full md:h-[150px] md:w-[150px] h-[100px] w-[100px] m-auto"></div>
            <div className=' pt-5 text-center'>
              <h1 className=' font-semibold text-lg'>Hira Khan</h1>
              <p className=' text-gray-500'>CFO Panaverse</p>
              <button className=' border-2 hover:border-red-600 hover:text-red-600 border-blue-600 rounded-xl mt-2 mb-5 px-2 text-sm text-blue-600'>Profile</button>
            </div>
          </div>
          <div className=' bg-white rounded-2xl shadow-2xl pt-5 md:mt-0 mt-6'>
            <div className="bg-[url('/adil.jfif')] bg-cover rounded-full md:h-[150px] md:w-[150px] h-[100px] w-[100px] m-auto"></div>
            <div className=' pt-5 text-center'>
              <h1 className=' font-semibold text-lg'>Adil Altaf</h1>
              <p className=' text-gray-500'>CFO Panaverse</p>
              <button className=' border-2 hover:border-red-600 hover:text-red-600 border-blue-600 rounded-xl mt-2 mb-5 px-2 text-sm text-blue-600'>Profile</button>
            </div>
          </div>
          <div className=' bg-white rounded-2xl shadow-2xl pt-5 md:mt-0 mt-6'>
            <div className="bg-[url('/zeeshan.jfif')] bg-cover rounded-full md:h-[150px] md:w-[150px] h-[100px] w-[100px] m-auto"></div>
            <div className=' pt-5 text-center'>
              <h1 className=' font-semibold text-lg'>Zeeshan Hanif</h1>
              <p className=' text-gray-500'>CFO Panaverse</p>
              <button className=' border-2 hover:border-red-600 hover:text-red-600 border-blue-600 rounded-xl mt-2 mb-5 px-2 text-sm text-blue-600'>Profile</button>
            </div>
          </div>
        </div>
      </div>
      <div className=' lg:flex my-14 m-auto mt-24'>
        <div className="bg-[url('/abstr.avif')] px-10 md:py-14 lg:py-6 lg:w-1/2">
          <h1 className=' md:text-5xl text-3xl md:font-bold font-semibold font-serif'>Bootcamp 2023</h1>
          <p className=' mt-8 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!
          </p>
          <button className=' bg-blue-600 md:px-8 px-4 py-3 rounded-lg text-white font-semibold mt-6'>Read More</button>
        </div>
        <div className="bg-[url('/bootcamp.jpg')] bg-cover bg-center h-[11cm] lg:w-1/2"></div>
      </div>
      <div className=' flex justify-center mb-[30px]'>
        <div className='text-white rounded-3xl w-[80%] block lg:px-[100px] md:px-[80px] px-[20px] lg:py-[120px] py-[30px] text-center space-y-[20px] bg-gradient-to-br from-[#2a4ce5] via-[#9651cf] to-[#3FCBFF]'>
          <h1 className=' lg:text-5xl text-4xl font-bold '>Get started today</h1>
          <p className=' text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, blanditiis numquam veniam fugiat voluptatem delectus. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, blanditiis numquam veniam fugiat voluptatem delectus. Velit fugiat ipsum exercitationem officiis tempore illo reiciendis rem. Voucimus vitae officia voluptate labore est debitis minima.
          </p>
          <button className='px-8 py-2 text-md font-semibold rounded-full border hover:border-blue-600 border-purple-200 hover:text-white hover:bg-blue-600'>Join Now</button>
        </div>
      </div>
    </>
      )
}
