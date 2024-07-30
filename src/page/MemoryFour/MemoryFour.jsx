import React from 'react'
import ".././MemoryFour/MemoryFour.css"

// Video 
import TheWeeknd from "/src/assets/img/TheWeeknd.mp4"

// IMG 
import Cake from "/src/assets/img/34+ Birthday Cakes That Will Bake Your Day Unbelievably Special - TheFab20s.jpeg"

function MemoryFour() {
  return (
    <>
    <div className='flex HP'>
      <div className='text-right px-[25px] py-[50px]'>
        <h1 className='text-[60px] font-bold text-black'>
          Happy <br /> <span className='HappyBRTH font-normal text-[80px]'>
             Birthday
            </span>
        </h1>
        <p className='text-center mb-[40px] font-semibold bg-[#00000063] text-white rounded-[5px] p-[10px] py-[20px] text-[20px]'>
        С Днем Рождения! 🎉 Пусть твой особенный день будет наполнен любовью, радостью и всеми твоими любимыми вещами. Желаю бесконечного счастья, крепкого здоровья и множества прекрасных моментов. Наслаждайся каждым мгновением!
        </p>
        <video className='w-[250px] m-auto' src={TheWeeknd} controls></video>
      </div>
    </div>
    </>
  )
}

export default MemoryFour