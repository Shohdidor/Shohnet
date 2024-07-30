import React from 'react'
import "../DuolingoButton/DuolingoButton.css"


function DuolingoButton( { img } ) {
    return (
    <div class="notification w-[100px]">
        <img src={img} className='w-[100px] ml-[7px]' alt="Heart" />
    </div>
)
}

export default DuolingoButton