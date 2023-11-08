import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

export const MotionBTN = (
    {  to }
) => {
    const constraintsRef = useRef(null);



    return (


        <motion.div
            ref={constraintsRef}
            className='flex place-items-center overflow-hidden'>
            <motion.div drag dragConstraints={constraintsRef}>
                <Link    
                    to={to}
                    className='m-5 text-xl px-3 py-2 border  hover:bg-cyan-500 flex transition-all border-cyan-300 rounded ease-linear hover:duration-150 hover:scale-105'>Contact me!
                </Link>
            </motion.div>
        </motion.div>
    )
}
