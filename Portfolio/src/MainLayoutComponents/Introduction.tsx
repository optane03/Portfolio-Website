import { useEffect, useState } from 'react';
import profile from '../Pictures/gettyimages-519532628-612x612.jpg'


const Introduction = () => {
    const [opacity , setOpacity] = useState(false)
    useEffect(() => {setOpacity(true)}, [])

    // JSX to render the introduction section (About component)
    return(
        <div id='introduction' className={`relative w-[55%] h-[600px] m-auto mt-[150px] text-left text-[108px] font-bold font-mono transition-all duration-500 flex justify-between items-center`}>
            <div className='absolute z-10'>
                <div><i>Tanay Kumar</i></div>
                <div className="text-[56px] pl-[100px]">... Full Stack Developer</div>
                <div className='text-[28px] w-gull text-right mr-[100px]'><i>From India</i></div>
            </div>
            <img src={profile} alt="Profile" className={`z-0 transition-all duration-2000 h-full w-auto rounded-[15px] absolute right-0 ${opacity ? 'opacity-100': 'opacity-10'}`}/>
        </div>
    )
}


export default Introduction;