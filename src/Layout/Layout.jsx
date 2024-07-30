import React from 'react'
import { Link , Outlet , useLocation } from "react-router-dom"
import "../App.css"

// IMG 
import IconHome from "/src/assets/img/pngwing.com (8).png"
import IconGallery from "/src/assets/img/pngwing.com (16).png"
import IconMusic from "/src/assets/img/pngwing.com (18).png"
import IconPeterParker from "/src/assets/img/Spider-Man icon.jpeg"

function Layout() {
    let { pathname } = useLocation ()
  return (
    <>
            <div className='bg-[#BA0203]' style={{ display : pathname === "/" ? "none" : "block"}}>
                <h1 className='Jenet text-white font-semibold text-[30px] text-center py-[15px] tracking-[6px]'>
                    Jenet
                </h1>
            </div>
            <div>
            <Outlet />
            </div>
            <div className='bg-[#BA0203] py-[15px] px-[30px]' style={{display : pathname === "/" ? "none" : "block"}}>
            <ul className='flex gap-[50px] justify-around'>
            <Link to={"/menu"}>
            <li style={{display: pathname !== "/" ? "block" : "none" , color : pathname === "/menu" ? "white" : "black" }}>
                <div className='w-[50px] rounded-[5px] p-[1.6px]' style={{background : pathname !== "/" ? "white" : "#BA0203"}}>
                <img src={IconHome} alt="IconHome" />
                </div>
            </li>
            </Link>
            <Link to={"/gallery"}>
            <li style={{display: pathname !== "/" ? "block" : "none" , color : pathname === "/menu" ? "white" : "black" }}>
                <div className='w-[51px] rounded-[5px]' style={{background : pathname !== "/" ? "white" : "#BA0203"}}>
                <img src={IconGallery} alt="IconHome" />
                </div>
            </li>
            </Link>
            <Link to={"/peterparker"}>
            <li style={{display: pathname !== "/" ? "block" : "none" , color : pathname === "/menu" ? "white" : "black" }}>
                <div className='w-[50px] rounded-[5px] p-[1.6px]' style={{background : pathname !== "/" ? "white" : "#BA0203"}}>
                <img src={IconPeterParker} alt="IconHome" />
                </div>
            </li>
            </Link>
            </ul>

            </div>
    </>
  )
}

export default Layout