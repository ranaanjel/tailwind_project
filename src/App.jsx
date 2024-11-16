import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SideBar } from './components/sidebar'

function App() {
  return <div className='bg-primary-light-300 h-screen font-[DMSans]'>
  <SideBar></SideBar> 
  </div>
}

export default App
