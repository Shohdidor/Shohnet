import React from 'react'
import "../../App.css"

// MUI 

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function Gallery() {
    const itemData = [
        {
          img: '/src/assets/img/IMG_20230306_135533.jpg',
          title: 'Bed',
        },
        {
          img: '/src/assets/img/IMG_20240515_201604_394.jpg',
          title: 'Books',
        },
        {
          img: '/src/assets/img/IMG_20230223_143409.jpg',
          title: 'Sink',
        },
        {
          img: '/src/assets/img/IMG_20230210_193908.jpg',
          title: 'Kitchen',
        },
        {
          img: '/src/assets/img/4937.jpg',
          title: 'Blinds',
        },
        {
          img: '/src/assets/img/1427.jpg',
          title: 'Chairs',
        },
        {
          img: '/src/assets/img/IMG_20240517_152543_064.jpg',
          title: 'Laptop',
        },
        {
            img: '/src/assets/img/IMG_20240526_120849_288.jpg',
            title: 'Doors',
        },
        {
          img: '/src/assets/img/IMG_20240526_120844_754.jpg',
          title: 'Coffee',
        },
        {
          img: '/src/assets/img/IMG_20240515_221415_573.jpg',
          title: 'Storage',
        },
        {
          img: '/src/assets/img/IMG_20240403_133938_219.jpg',
          title: 'Candle',
        },
        {
          img: '/src/assets/img/1000000574.jpg',
          title: 'Coffee table',
        },
      ];
  return (
    <>
    <div className='bg-[#A9B388]'>

    <h1 className='Jenet text-[50px] text-center py-[20px] font-semibold'>
        Photo
    </h1>
     <Box sx={{ width: 410, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    <br /><br />
    <h1 className='font-semibold text-center py-[18px] text-[16px]'>
    Эти фотографии напоминает мне о том, как важно ценить моменты, которые мы проведили вместе. Я храню этот кадр как напоминание о том что как я сильно любил тебя — только ради Аллаха.
    </h1>
    </div>
    </>
  )
}

export default Gallery