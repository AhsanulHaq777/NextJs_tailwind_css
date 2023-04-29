import React from 'react'

export default function contact() {
  return (
    <div>
        <div className="bg-[url('/cntct.png')] bg-cover relative py-48">
            <h1 className=" sm:px-48 px-32 sm:text-5xl text-3xl sm:font-bold font-semibold font-serif text-white">Contact Us</h1>
        </div>
        <div className="bg-[url('/contact.png')] bg-cover bg-fixed bg-center py-[200px] xl:-mt-[200px] -mt-[235px] ">
            <div className="flex flex-col lg:flex-row w-[80%] m-auto py-8 lg:py-16 space-y-10 bg-transparent shadow-lg shadow-white">
                <div className="lg:w-1/2 mt-10">
                    <div className=" sm:px-10 px-5 mx-auto">
                        <form className="space-y-8" action="#">
                            <div>
                                <label className="block mb-2 text-md font-medium text-white">Name</label>
                                <input className=" bg-[#11111100] text-white  text-md block w-full p-3 border-b-2 border-b-white placeholder:text-gray-400" type="text" placeholder="Ahsan Ul Haq" id="name" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-md font-medium text-white">Email</label>
                                <input className=" bg-[#11111100] text-white  text-md block w-full p-3 border-b-2 border-b-white placeholder:text-gray-400" type="email" placeholder="ulhaq.ahsan777@gmail.com" id="email" />
                            </div>
                            <div>
                                <label className="block mb-2 text-md font-medium text-white">Message</label>
                                <textarea className=" bg-[#11111100] text-white text-md block w-full p-3 pb-[60px] border-b-2 border-b-white placeholder:text-gray-400" placeholder="Your Message" id="message" >
                                </textarea>
                            </div>
                            <button className="py-3 px-5 text-md text-center text-blue-600 font-bold w-full rounded-full bg-white hover:bg-blue-600 hover:text-white" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="lg:w-2/5 text-white m-auto lg:border-l-2 border-white md:pl-12 pl-6 lg:pt-2 pt-14">
                    <p>Hey There</p>
                    <h1 className=" lg:text-5xl sm:text-4xl text-3xl font-semibold md:pr-0 pr-2">LETS GET IN TOUCH</h1>
                    <p className=" my-4 md:text-lg text-base md:pr-0 pr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellat architecto at doloremque a. 
                        Obcaecati ipsam soluta alias aliquam voluptatem blanditiis
                    </p>
                    <p className=" flex gap-3 items-center mb-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg>  +92 300 123 4567</p>
                    <p className=" flex gap-3 items-center mb-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8.063c-1.691 0-3.063-1.371-3.063-3.063s1.371-3.063 3.063-3.063 3.063 1.371 3.063 3.063-1.371 3.063-3.063 3.063zM6.063 5c0-1.070 0.867-1.938 1.938-1.938s1.938 0.867 1.938 1.938c0 1.070-0.867 1.938-1.938 1.938s-1.938-0.867-1.938-1.938z"></path></svg> ABC Street Karachi, Pakistan</p>
                    <p className=" flex gap-3 items-center mb-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path></svg> panaverse@abc.com</p>
                    <div className="flex text-4xl mt-8 gap-4"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
