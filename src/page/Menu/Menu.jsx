import React, { useRef, useState } from 'react'
import "../../App.css"
import DuolingoButton from '../../assets/components/DuolingoButton/DuolingoButton'

// IMG 
import HalalBoy from "/src/assets/img/Без названия (65).jpeg"
import Heart from "/src/assets/img/pngwing.com (9).png"
import WebSpider from "/src/assets/img/pngwing.com (11).png"
import Jupiter from "/src/assets/img/pngwing.com (12).png"
import Cake from "/src/assets/img/pngwing.com (15).png"

// AUDIO 
import Music from "/src/assets/components/audio/Shawn Mendes, Camila Cabello - Señorita (Lyrics) Letra.mp3"


// MUI 

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import { Link } from 'react-router-dom'


function Menu() {
    
    // MUI 
    const theme = useTheme();

    // AUDIO IDEA 
    const [ ButtonMusic , setButtonMusic ] = useState(true)

    const audioRef = useRef(null);
    const handlePlay = () => {
        if (audioRef.current && ButtonMusic == true ) {
            audioRef.current.play();
    }
    else {
      audioRef.current.pause()
    }
    setButtonMusic(!ButtonMusic)
  };
    
  return (
    <>
    <div className='bg-[#BA0203] border-t-[1px] border-black'>
        <h1 className='text-white text-[25px] py-[15px] px-[15px] font-medium'>
            Select Memory 
            <br />
            <span className='text-[18px] text-gray-300 font-normal'>
            and let happiness begin
            </span>
            
        </h1>
        
    </div>
    
    <div className='MenuDuo'>
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            MJ 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            P.Parker
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" style={{ display : ButtonMusic == true ? "block" : "none"}} onClick={handlePlay}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }}  />
          </IconButton>
          <IconButton aria-label="play/pause" style={{ display : ButtonMusic == true ? "none" : "block"}} onClick={handlePlay}>
            <PauseIcon sx={{ height: 38, width: 38 }}  />
          </IconButton>
          <audio ref={audioRef} src={Music} />
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        className='ml-[70px]'
        sx={{ width: 161 }}
        image={HalalBoy}
        alt="Live from space album cover"
      />
    </Card>
        <div className='flex justify-center'>
                <div className='pl-[25px] mt-[20px]'>
                  <Link to={"/memoryone"}>
        <DuolingoButton img={Heart} />
                  </Link>
                </div>
        </div>
        
        <div>
                <div className='px-[50px] py-[20px]'>
                  <Link to={"/memorytwo"}>
        <DuolingoButton img={WebSpider} />
                  </Link>
                </div>
        </div>

        <div>
                <div className='ml-[220px] py-[20px]'>
                  <Link to={"/memorythree"}>
        <DuolingoButton img={Jupiter} />
                  </Link>
                </div>
        </div>
        <div>
                <div className='ml-[110px] py-[40px]'>
                  <Link to={"/memoryfour"}>
        <DuolingoButton img={Cake}/>
                  </Link>
                </div>
        </div>
    
    </div>
    
    </>
    
  )
  
}




export default Menu