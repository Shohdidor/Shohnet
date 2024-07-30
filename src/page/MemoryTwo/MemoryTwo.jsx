import React from 'react'
import Earth from '../../assets/components/Earth/Earth'

function MemoryTwo() {
  return (
    <>
    <div className='bg-gray-900 py-[150px]'>
        <h1 className='p-[20px] font-semibold text-[18px] text-[#B5BFA1]'>
            Google говорит, что на планете 8 миллиардов человек и 195 стран. Наши пути пересеклись, как в классном фильме, и это только начало чего-то нового. Альхамдулиллах за всё. <br /><br /> Как сказал Человек-Паук: "В жизни случаются плохие вещи, они нас закаляют. Но ведь хороших вещей ещё польно"
        </h1>
        <div className='flex justify-center overflow-hidden'>
        <Earth />
        </div>
    </div>
    </>
  )
}

export default MemoryTwo