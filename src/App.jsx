
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import { AppRouter } from './Routes/AppRouter';
import { SiGithub, SiLinkedin } from 'react-icons/si';


function App() {
  const [darkToggle, setDarkToggle] = useState(true)
  return (
    <div className={`dark:bg-gray-900 bg-white ${darkToggle && 'dark'}`}>
      <NavBar setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
      
      <AppRouter />
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

    </div>
  )
}

export default App;
