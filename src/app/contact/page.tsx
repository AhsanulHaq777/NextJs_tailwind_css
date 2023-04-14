import React from 'react'
import {BsFillTelephoneFill, BsFillEnvelopeFill} from 'react-icons/bs'
import {ImLocation2, ImFacebook2, ImLinkedin, ImTwitter} from 'react-icons/im'

export default function Contact() {
  return (
    <div >
        <div className="bg-[url('/cntct.png')] bg-cover relative py-48">
            <h1 className=' sm:px-48 px-32 sm:text-5xl text-3xl sm:font-bold font-semibold font-serif text-white'>Contact Us</h1>
        </div>
        <div className="bg-[url('/contact.png')] bg-cover bg-fixed bg-center py-[200px] xl:-mt-[200px] -mt-[235px] ">
            <div className='flex flex-col lg:flex-row w-[80%] m-auto py-8 lg:py-16 space-y-10 bg-transparent shadow-lg shadow-white'>
                <div className='lg:w-1/2 mt-10'>
                    <div className=' sm:px-10 px-5 mx-auto'>
                        <form className='space-y-8' action='#'>
                            <div>
                                <label className='block mb-2 text-md font-medium text-white'>Name</label>
                                <input className=' bg-[#11111100] text-white  text-md block w-full p-3 border-b-2 border-b-white placeholder:text-gray-400' type='text' placeholder='Ahsan Ul Haq' id='name' required/>
                            </div>
                            <div>
                                <label className='block mb-2 text-md font-medium text-white'>Email</label>
                                <input className=' bg-[#11111100] text-white  text-md block w-full p-3 border-b-2 border-b-white placeholder:text-gray-400' type='email' placeholder='ulhaq.ahsan777@gmail.com' id='email'/>
                            </div>
                            <div>
                                <label className='block mb-2 text-md font-medium text-white'>Message</label>
                                <textarea className=' bg-[#11111100] text-white text-md block w-full p-3 pb-[60px] border-b-2 border-b-white placeholder:text-gray-400' placeholder='Your Message' id='message'/>
                            </div>
                            <button className='py-3 px-5 text-md text-center text-blue-600 font-bold w-full rounded-full bg-white hover:bg-blue-600 hover:text-white' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='lg:w-2/5 text-white m-auto lg:border-l-2 border-white md:pl-12 pl-6 lg:pt-2 pt-14'>
                <p>Hey There</p>
                    <h1 className=' lg:text-5xl sm:text-4xl text-3xl font-semibold md:pr-0 pr-2'>LETS GET IN TOUCH</h1>
                    <p className=' my-4 md:text-lg text-base md:pr-0 pr-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellat architecto at doloremque a. Obcaecati ipsam soluta alias aliquam voluptatem blanditiis</p>
                    <p className=' flex gap-3 items-center mb-2'><BsFillTelephoneFill/>  +92 300 123 4567</p>
                    <p className=' flex gap-3 items-center mb-2'><ImLocation2/> ABC Street Karachi, Pakistan</p>
                    <p className=' flex gap-3 items-center mb-2'><BsFillEnvelopeFill/> panaverse@abc.com</p>
                <div className='flex text-4xl mt-8 gap-4'>
                    <ImFacebook2/>
                    <ImLinkedin/>
                    <ImTwitter/>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
