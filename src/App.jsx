import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SideBar } from './components/sidebar'
import {MainContent} from "./components/mainContent"
import tailwindConfig from '../tailwind.config'

function App() {

  const [openSide, setOpenSide] = useState(true);
  const [tabPhone, setTabPhone] = useState(false);

   useEffect(function (){
        const tbPhDevice = window.matchMedia("(min-width:1100px)");



        if(!tbPhDevice.matches) {
            setOpenSide(c => !c)
          }

        const listenHandle = tbPhDevice.addEventListener("change", function () {
          setTabPhone(c => !c)
        })

        return function () {
          tbPhDevice.removeEventListener("change", listenHandle)
        }

    },[tabPhone])

  return <div className='bg-primary-light-300 h-screen font-[DMSans] flex overflow-x-hidden dark:bg-primary-dark dark:text-primary-light-100'>
  <SideBar openSide={openSide} setOpenSide={setOpenSide}></SideBar> 
  <MainContent openSide={openSide} setOpenSide={setOpenSide}/>
  </div>
}

export default App
