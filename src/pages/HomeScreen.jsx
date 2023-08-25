import React, { useEffect, useRef, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { DiBootstrap, DiCss3, DiHtml5, DiJavascript, DiMsqlServer, DiMysql, DiNodejs, DiPython, DiReact } from 'react-icons/di'
import { SiFirebase, SiGithub, SiLinkedin, SiTailwindcss } from 'react-icons/si'
import img2 from '../img/code1.svg'
import layeredStep from '../img/layered-step-2.1.svg'
import journal from '../img/journal.png'
import syncPro from '../img/Syncpro.png'
import heroes from '../img/heroes.png'
import { motion } from 'framer-motion'
import { Link, Navigate, useNavigate } from 'react-router-dom'
export const HomeScreen = () => {
    const constraintsRef = useRef(null);

    const navigate = useNavigate()


   


    return (
        <>
            <main className='h-fit  overflow-hidden bg-white dark:bg-gray-900 dark:text-white'>
                <div className='px-5 mt-10 lg:px-40'>
                    <div className='grid grid-cols-2 items-center justify-between'>
                        <div>
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
                                    Over the past two years, I have gained extensive experience working
                                    with a broad range of web technologies, which has equipped
                                    me with valuable skills for approaching new challenges
                                    and creating innovative solutions in the future.
                                </p>
                            </section>
                            <motion.div
                                ref={constraintsRef}
                                className='flex place-content-center place-items-center overflow-hidden'
                            >
                                <motion.div

                                    drag dragConstraints={constraintsRef}
                                >
                                    <button 
                                    onClick={()=>navigate('/contact')}
                                
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

                <div className='h-96 mt-10 mb-20 relative'>
                    <p className='px-5 lg:px-40 text-2xl text-cyan-300'>Projects</p>
                    <img className='w-screen h-96 object-cover animate-pulse' alt='...' src={layeredStep} />
                    {/*                     <span className='absolute text-cyan-300 font-medium delay-700 animate-pulse duration-700 text-xl right-[615px] top-14'>Hover Me!</span>
 */}
                    <div className='group'>
                        <img alt='' className="absolute group-hover:backdrop-blur-lg shadow-2xl shadow-cyan-950  h-52 rotate-12 top-32 group-hover:h-full group-hover:right-10 group-hover:top-8 group-hover:rotate-0 transition-all ease-in-out right-64 duration-700  font-bold" src={journal}></img>
                        <span className='absolute scale-0 rounded-full px-10 py-3 text-xl bg-gray-900 hover:bg-blue-900 text-white cursor-pointer group-hover:scale-100 right-80 transition-all hover:shadow-lg hover:shadow-cyan-900 top-52' >Visit</span>
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
                    {/*                     <span className='absolute text-cyan-300 font-medium delay-700 animate-pulse duration-700 text-xl right-[615px] top-14'>Hover Me!</span>
 */}
                    <div className='group'>
                        <img alt='' className="absolute group-hover:backdrop-blur-lg shadow-2xl shadow-cyan-950  h-52 rotate-12 top-32 group-hover:h-full group-hover:right-10 group-hover:top-8 group-hover:rotate-0 transition-all ease-in-out right-64 duration-700  font-bold" src={syncPro}></img>
                        <span className='absolute scale-0 rounded-full px-10 py-3 text-xl bg-gray-900 hover:bg-blue-900 text-white cursor-pointer group-hover:scale-100 right-80 transition-all hover:shadow-lg hover:shadow-cyan-900 top-52' >Visit</span>
                    </div>
                </div>
                
                

            </main>


            <footer>
                <div className='flex space-y-2 pb-10 flex-col justify-center items-center h-20 bg-gray-900 text-white'>
                    <div className='flex justify-center items-center'>
                        <p className='text-lg'>Marion Bustamante</p>
                        <p className='text-lg mx-2'>|</p>
                        <p className='text-lg'>{new Date().getFullYear()}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <SiLinkedin className='text-3xl mx-2 cursor-pointer' />
                        <SiGithub className='text-3xl mx-2 cursor-pointer' />
                    </div>
                </div>
            </footer>
        </>
    )
}
