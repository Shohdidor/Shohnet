import React from 'react'

// IMG 
import MJ from "/src/assets/img/IMG_20240515_201604_394.jpg"
import MotMota from "/src/assets/img/Moto Moto.jpeg"
import MarryJame from "/src/assets/img/- Spider-Man_ Into the Spider-Verse (2018).jpeg"
import MarryJame2 from "/src/assets/img/Без названия (66).jpeg"



// MUI 
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



function MemoryOne() {
  return (
    <>
    <div className='flex'>
      <div className='bg-[#8f8570] w-[350px] h-[749px]'>
        <h1 className='text-[20px] tracking-[3px] font-serif py-[15px] mb-[30px] text-gray-800 pl-[25px]'>
        Karaeva <br /> Jenet 
        </h1>
        <div className='bg-[#f7f4e6] p-[10px] mb-[10px] pr-[20px] w-[200px]'>
          <h1 className='p-[5px] font-serif text-gray-800'>
          Когда один человек любит другого, пусть он сообщает ему об этом. <br /> (Абу Дауд, Тирмизи)
          </h1>
        </div>
        <h1 className='p-[25px_10px] text-gray-900 font-semibold text-[15px]'>
        Я уважаю твой выбор и верю, что у каждого из нас есть свой путь, который ведет к лучшему. Пусть Аллах ведет нас обоих.
        </h1> 
        
        <div className='bg-[#f7f4e6] p-[10px] mb-[10px] pr-[20px] w-[200px]'>
          <h1 className='p-[5px] font-serif text-gray-800'>
            Ты для меня Дженет <br /> 
            и Мота Мота <br /> и Marry Jame (M.J.) 
          </h1>
        </div>
      </div>
      <div className='w-[500px] p-[20px] bg-[#635d4f]'>
        <img className='w-[500px] mb-[40px]' src={MJ} alt="MJ" />
        <img className='w-[500px] mb-[35px]' src={MotMota} alt="MJ" />
        <img className='w-[500px] mb-[20px]' src={MarryJame} alt="MJ" />
        <img className='w-[500px]' src={MarryJame2} alt="MJ" />
      </div>
    </div>
    </>
  )
}

export default MemoryOne