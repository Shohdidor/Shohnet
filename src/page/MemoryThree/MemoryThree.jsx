import React, { useRef } from 'react'
import { useState } from 'react'

// VIDEO 
import MySituation from "/src/assets/img/MySituation.mp4"
import MyMind from "/src/assets/img/MyMind2.mp4"
import Cr7 from "/src/assets/img/Cr7.mp4"

function MemoryThree() {

  return (
    <>
    <div className='bg-[#B5BFA1]'>
      <h1 className='text-[20px] font-semibold text-center py-[21px] bg-[#F9EBC7] text-gray-800'>
        Это я каждый день жду твоё сообщение
      </h1>
      <div className='w-[300px] m-auto pt-[25px] pb-[120px]'>
      <video src={MySituation} className='mb-[50px] rounded-[20px] shadow-2xl shadow-[#000000ea]'  controls></video>
      <video src={MyMind} className=' rounded-[20px] mb-[50px] shadow-2xl shadow-[#000000ea]' controls></video>
      <video src={Cr7} className=' rounded-[20px] shadow-2xl shadow-[#000000ea]' controls></video>
      </div>
      <h1>
        
      </h1>
    </div>
    </>
  )
}

export default MemoryThree