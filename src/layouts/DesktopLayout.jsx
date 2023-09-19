import React from 'react'
import Navbar from '../components/Navbar'

export default function DesktopLayout(props) {
  return (
    <div className='desktopLayout__container'>
        <Navbar/>
        {props.children}
    </div>
  )
}
