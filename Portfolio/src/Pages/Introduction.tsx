import { useEffect, useState } from "react";


const Introduction = () => {
    const [fontColor, setFontColor] = useState(0);


    // Function to change font color every 2.5 seconds
    useEffect(()=>{
        const interval = setInterval(()=>{
            setFontColor((prevColor) => (prevColor + 1) % 5);
        }, 2500);

        return () => clearInterval(interval);
    }, [])


    // Array of colors to cycle through
    const colors = [
        "text-white", 
        "text-[#A8FBD3]", 
        "text-[#F6FF99]", 
        "text-[#FFC7A7]", 
        "text-[#E8FFD7]"
    ]


    // JSX to render the introduction section (About component)
    return(
        <div className={`w-[60%] m-auto mt-[150px] text-left text-[72px] font-bold font-mono`}>
            <div className={`${colors[fontColor]} transition-all duration-500`}><i>Tanay Kumar</i></div>
            <div className="text-[44px]">... Full Stack Developer</div>
        </div>
    )
}


export default Introduction;