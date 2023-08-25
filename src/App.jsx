
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import { AppRouter } from './Routes/AppRouter';


function App() {
  const [darkToggle, setDarkToggle] = useState(false)
  return (
    <div className={`bg-blue-400 dark:bg-red-300 ${darkToggle && 'dark'}`}>
      <NavBar setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
      
      <AppRouter />
    </div>
  )
}

export default App;
