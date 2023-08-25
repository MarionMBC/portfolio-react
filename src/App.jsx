
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import { AppRouter } from './Routes/AppRouter';


function App() {
  const [darkToggle, setDarkToggle] = useState(true)
  return (
    <div className={`dark:bg-gray-900 bg-white ${darkToggle && 'dark'}`}>
      <NavBar setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
      
      <AppRouter />
    </div>
  )
}

export default App;
