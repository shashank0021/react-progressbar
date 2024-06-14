import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import ProgressBar from './progressbar'

function App() {
const [count,setcount] = useState(0)

useEffect(()=>{
  const time= setInterval(()=>{
    if(count<100)
      {
        setcount(count+1)
      }

  },100)

  return()=>{
    clearInterval(time)
  }
  
},[count])


  return (
    <div className='app'>
      <ProgressBar
      progress = {count}
      color = {'lightgreen'}/>
    </div>


  )
}

export default App