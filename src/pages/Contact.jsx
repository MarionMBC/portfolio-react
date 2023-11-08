/* import {motion, useIsPresent, useScroll, useSpring } from "framer-motion";
 */
import React from "react";
export default function Contact() {

/*     const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
    const isPresent = useIsPresent();

 */


    return (
        <>
            <div className="py-4 lg:py-8  relative dark:bg-gray-900 transition-all ease-in-out h-full">
                <div className="xl:mx-auto xl:container  relative ">
                    <div className="flex flex-wrap xl:mx-auto xl:container">
                        <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
                            <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                                <div className="w-full 2xl:pl-48 xl:pt-1">
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-900 dark:text-white">I'm here</h1>
                                    <div className="w-full md:w-10/12 mt-3">
                                        <p className="text-gray-800 dark:text-white text-base md:text-lg leading-8 tracking-wider">I believe that the best way to learn is by doing, so I'm always looking for new challenges and opportunities to grow as a developer.</p>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base dark:text-cyan-300 font-semibold">Country</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8  tracking-wider dark:text-white mt-2">Honduras</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base dark:text-cyan-300 font-semibold">Phone Number</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 dark:text-white tracking-wider mt-2">+504 97353230</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base dark:text-cyan-300 font-semibold">Email</h2>
                                            <h2 className="dark:text-white text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">melchisedec.bustamante@gmail.com</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                            <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-900 dark:text-white">Let's talk!</h1>
                                <form id="contactForm" className="w-full 2xl:w-8/12 mt-3">
                                    <h2 className="text-cyan-500 text-base md:text-lg leading-8 tracking-wider ">Get in touch ant let me know how I can contribute to your project or team.</h2>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 dark:text-white text-base font-medium">Name</p>
                                        <input id="name" className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 placeholder:text-gray-900 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Marion Bustamante" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 dark:text-white text-base font-medium">Email</p>
                                        <input id="email" className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 placeholder:text-gray-900 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none border-black py-5 pl-4 text-gray-800" type="email" placeholder="example@mail.com" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 dark:text-white text-base font-medium">Message</p>
                                        <textarea id="message" className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 placeholder:text-gray-900 resize-none hover:border-cyan-500 focus:border-cyan-500 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800" type="text" placeholder="Write me something..." defaultValue={""} />
                                    </div>
                                    <div className="py-5">
                                    <button type="submit" className='text-xl px-3 py-2 border dark:text-white hover:bg-cyan-500 flex transition-all border-gray-900 dark:border-cyan-300 rounded ease-linear hover:duration-150 hover:scale-105'>Contact me!</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    );
}
