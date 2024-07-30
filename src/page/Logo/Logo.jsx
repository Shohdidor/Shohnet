import React from 'react'
// IMG 
import LogoSpiderMan from "/src/assets/img/LogoSpiderMan.jpg"
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <>
    <Link to={"/menu"}>
    <div className='w-[100%] h-[100vh] overflow-hidden'>
    <img src={LogoSpiderMan} alt="Logo" className='m-auto' />
    </div>
    </Link>
    </>
  )
}

export default Logo