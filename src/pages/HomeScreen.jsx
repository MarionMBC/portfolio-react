import React, { useRef } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { DiBootstrap, DiCss3, DiHtml5, DiJavascript, DiMsqlServer, DiMysql, DiNodejs, DiPython, DiReact } from 'react-icons/di'
import { SiFirebase, SiGithub, SiLinkedin, SiTailwindcss } from 'react-icons/si'
import img2 from '../img/code1.svg'

import { motion } from 'framer-motion'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import AppParallax from '../components/Scroll/ImageScroll'
import CustomizedTimeline from '../components/TimeLine/TimeLine'
export const HomeScreen = () => {
    const constraintsRef = useRef(null);

    const navigate = useNavigate()

    return (
        <>
            <main className='h-fit overflow-hidden bg-white dark:bg-gray-900 dark:text-white'>
                <div className='px-5 mt-10 lg:px-40'>
                    <div className='grid-cols-1 grid md:grid-cols-2 items-center justify-between'>
                        <div className=''>
                            <p className='text-5xl mb-5 dark:text-cyan-300'>
                                Hi
                            </p>
                            <section className='border-l-2 mt-4 lg:text-2xl border-black ps-2 dark:border-white'>
                                <p className='break-words'>
                                    My name is Marion Bustamante, I'm a <span className='text-cyan-300'>systems engineering </span>
                                    student and a <span className='text-cyan-300'>full-stack developer</span>.
                                    I'm from Francisco Morazán, Honduras. I have developed several
                                    software solutions. I am deeply passionate about software development.
                                </p>
                                <p className='break-words mt-2'>
                                    Over the past two years, I have gained extensive <span className='text-cyan-300'>experience</span>. working
                                    with a broad range of web technologies, which has equipped
                                    me with valuable skills for approaching new challenges
                                    and creating innovative solutions in the future.
                                </p>
                            </section>
                            <motion.div
                                ref={constraintsRef}
                                className='flex place-items-center overflow-hidden'
                            >
                                <motion.div

                                    drag dragConstraints={constraintsRef}
                                >
                                    <button
                                        onDrag={() => navigate('/contact')}
                                        className='m-5 text-xl px-3 py-2 border  hover:bg-cyan-500 flex transition-all border-cyan-300 rounded ease-linear hover:duration-150 hover:scale-105'>Contact me!</button>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div>

                            <img alt='' className=" text-white font-bold py-2 px-4 animate-floating" src={img2}></img>
                        </div>

                    </div>

                    <p className='text-2xl mt-[53px] mb-10 dark:text-cyan-300 self-center'>
                        Technologies
                    </p>
                    <div className="relative flex overflow-x-hidden text-2xl lg:text-4xl">
                        <div className="animate-marquee py-4 flex whitespace-nowrap transition-all">
                            <AiFillGithub className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiReact className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiMsqlServer className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiMysql className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiHtml5 className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiCss3 className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiBootstrap className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiNodejs className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiJavascript className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiPython className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <SiTailwindcss className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <SiFirebase className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />

                        </div>
                        <div className="absolute top-0 py-4 flex animate-marquee2 whitespace-nowrap transition-all">
                            <AiFillGithub className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiReact className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiMsqlServer className='mx-4 lg:mx-10  cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiMysql className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiHtml5 className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiCss3 className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiBootstrap className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiNodejs className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiJavascript className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <DiPython className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <SiTailwindcss className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                            <SiFirebase className='mx-4 lg:mx-10 cursor-pointer dark:hover:text-cyan-300 hover:scale-150 transition-all easy-in-out' />
                        </div>

                    </div>
                </div>

                <p className='px-5 lg:px-40 text-2xl text-cyan-300'>Projects</p>
                <AppParallax />



                {/*           <div className='flex justify-center h-96 mt-10 mb-10 relative bg-black '>
                    <img className='md:absolute h-72 right-28 col-span-1 md:h-96 md:w-[600px] object-cover animate-pulse' alt='...' src={layeredStep} />
                    <div className=''>
                        <div className='absolute group left-1/2 top-1/4'>
                            <img alt='' className="relative flex -left-1/2 -top-1/2 md:left-1/2 group-hover:backdrop-blur-lg shadow-2xl sm:h-52 shadow-cyan-950 rotate-12 md:top-32 md:group-hover:h-full group-hover:right-10 group-hover:rotate-0 transition-all ease-in-out duration-700  font-bold" src={journal}></img>
                            <span className='absolute  group-hover:block -left-1/4 top-1/3  rounded-full px-10 py-3 text-xl bg-gray-900 hover:bg-blue-900 text-white cursor-pointer group-hover:scale-100  transition-all hover:shadow-lg hover:shadow-cyan-900' >Visit</span>
                        </div>
                    </div>
                </div>

                <div className='h-96 mb-10 relative'>
                    <img className='w-screen rotate-180 h-96 object-cover animate-pulse' alt='...' src={layeredStep} />
                    <div className='group'>
                        <img alt='' className="absolute group-hover:backdrop-blur-lg shadow-2xl shadow-blue-900  h-52 -rotate-12 top-24 group-hover:h-full group-hover:right-10 group-hover:top-8 group-hover:rotate-0 transition-all ease-in-out left-64 duration-700  font-bold" src={heroes}></img>
                        <span className='absolute scale-0 rounded-full px-10 py-3 text-xl bg-blue-900 hover:bg-blue-800 text-white cursor-pointer group-hover:scale-100 left-[590px] transition-all hover:shadow-lg hover:shadow-cyan-900 top-52' >Visit</span>
                    </div>
                </div>

                <div className='h-96 mb-20 relative'>

                    <img className='w-screen h-96 object-cover animate-pulse' alt='...' src={layeredStep} />
         
                    <div className='group'>
                        <img alt='' className="absolute group-hover:backdrop-blur-lg shadow-2xl shadow-cyan-950  h-52 rotate-12 top-32 group-hover:h-full group-hover:right-10 group-hover:top-8 group-hover:rotate-0 transition-all ease-in-out right-64 duration-700  font-bold" src={syncPro}></img>
                        <span className='absolute scale-0 rounded-full px-10 py-3 text-xl bg-gray-900 hover:bg-blue-900 text-white cursor-pointer group-hover:scale-100 right-80 transition-all hover:shadow-lg hover:shadow-cyan-900 top-52' >Visit</span>
                    </div>
                </div> */}



            </main>
            <footer className='flex py-10 space-y-2 flex-col justify-center items-center dark:bg-gray-900 bg-white dark:text-white'>
                <div className='flex justify-center items-center'>
                    <p className='text-lg'>Marion Bustamante</p>
                    <p className='text-lg mx-2'>|</p>
                    <p className='text-lg'>{new Date().getFullYear()}</p>
                </div>
                <div className='flex justify-center items-center'>
                    <SiLinkedin className='text-3xl mx-2 cursor-pointer' />
                    <SiGithub className='text-3xl mx-2 cursor-pointer' />
                </div>
            </footer>


        </>
    )
}
