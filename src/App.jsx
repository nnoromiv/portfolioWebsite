import './App.css'
import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import HomePage from './pages/HomePage';

function App() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoad(false);
  }, 2000);

  return () => clearTimeout(timer);
  }, []);

  return (
    <>
     <Preloader load={load}/>
     {
      !load &&
      <>
        <HomePage />
      </>
     }
    </>
  )
}

export default App
