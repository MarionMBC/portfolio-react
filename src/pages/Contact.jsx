import {motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import React from "react";
export default function Contact() {

    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
    const isPresent = useIsPresent();



    
    return (
        <>
            <div className="py-4 lg:py-8  relative bg-gray-900">
                <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" />
                <div className="xl:mx-auto xl:container  relative ">
                    <div className="flex flex-wrap xl:mx-auto xl:container">
                        <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
                            <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" alt="map" />
                            <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                                <div className="w-full 2xl:pl-48 xl:pt-1">
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">We’re Here</h1>
                                    <div className="w-full md:w-10/12 mt-3">
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">We believe digital innovation is at the heart of every business success</h2>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Address</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">Office #13, NSTP, NUST University H-12 Sector, Islamabad</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Contact</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 051 4567890 (Phone)</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 123 4567890 (Cell)</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Email</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">alphasquad@example.com</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                            <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-white">Let's talk!</h1>
                                <div className="w-full 2xl:w-8/12 mt-3">
                                    <h2 className="text-cyan-500 text-base md:text-lg leading-8 tracking-wider">Get in touch ant let me know how I can contribute to your project or team.</h2>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Nombre</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Justin Timberlake" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Correo electrónico</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none border-black py-5 pl-4 text-gray-800" type="email" placeholder="example@mail.com" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Message</p>
                                        <textarea className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-cyan-500 focus:border-cyan-500 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800" type="text" placeholder="Write us something..." defaultValue={""} />
                                    </div>
                                    <div className="py-5">
                                    <button className='text-xl px-3 py-2 border  hover:bg-cyan-500 flex transition-all border-cyan-300 rounded ease-linear hover:duration-150 hover:scale-105'>Contact me!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
        </>
    );
}
