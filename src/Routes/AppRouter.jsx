import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../pages/HomeScreen'
import { AboutScreen } from '../pages/AboutScreen'
import Contact from '../pages/Contact'
import { AnimatePresence } from 'framer-motion'

export const AppRouter = () => {
    return (
        <AnimatePresence mode="wait" initial={false}>
        <Routes>
            <Route path='/home' element={<HomeScreen />}></Route>
            <Route path='/about' element={<AboutScreen />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/' element={<HomeScreen />}></Route>
        </Routes>
        </AnimatePresence>
    )
}
