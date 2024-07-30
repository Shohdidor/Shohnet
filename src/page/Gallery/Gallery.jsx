import React from 'react'
import "../../App.css"

import IMG1 from '/src/assets/img/IMG_20230306_135533.jpg'
import IMG2 from '/src/assets/img/IMG_20240515_201604_394.jpg'
import IMG3 from '/src/assets/img/IMG_20230223_143409.jpg'
import IMG4 from '/src/assets/img/IMG_20230210_193908.jpg'
import IMG5 from '/src/assets/img/4937.jpg'
import IMG6 from '/src/assets/img/1427.jpg'
import IMG7 from '/src/assets/img/IMG_20240517_152543_064.jpg'
import IMG8 from '/src/assets/img/IMG_20240526_120849_288.jpg'
import IMG9 from '/src/assets/img/IMG_20240526_120844_754.jpg'
import IMG10 from '/src/assets/img/IMG_20240515_221415_573.jpg'
import IMG11 from '/src/assets/img/IMG_20240403_133938_219.jpg'
import IMG12 from '/src/assets/img/1000000574.jpg'

// MUI 

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function Gallery() {
  return (
    <>
    <div className='bg-[#A9B388]'>

    <h1 className='Jenet text-[50px] text-center py-[20px] font-semibold'>
        Photo
    </h1>
    <div className='grid grid-cols-2 overflow-y-scroll h-[50vh] gap-[10px] bg-black'>
        <img src={IMG1} alt="PeterParker" />
        <img src={IMG2} alt="MarryJame" />
        <img src={IMG3} alt="MarryJame" />
        <img src={IMG4} alt="PeterParker" />
        <img src={IMG5} alt="PeterParker" />
        <img src={IMG6} alt="MarryJame" />
        <img src={IMG7} alt="PeterParker" />
        <img src={IMG8} alt="MarryJame" />
        <img src={IMG9} alt="PeterParker" />
        <img src={IMG10} alt="MarryJame" />
        <img src={IMG11} alt="MarryJame" />
        <img src={IMG12} alt="PeterParker" />

    </div>
    <br /><br />
    <h1 className='font-semibold text-center py-[18px] text-[16px]'>
    Эти фотографии напоминает мне о том, как важно ценить моменты, которые мы проведили вместе. Я храню этот кадр как напоминание о том что как я сильно любил тебя — только ради Аллаха.
    </h1>
    </div>
    </>
  )
}

export default Gallery