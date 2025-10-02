import Button from './Button'

const Navbar = () => {
    return (
        <>
            {/* Header Section */}
            <div id="navbar" className="flex items-start justify-between">
                <span className='text-[22px] text-left'><b>Portfolio</b></span>

                {/* Top navbar */}
                <div className='text-[20px] flex justify-end items-center gap-[15px] font-medium'>
                    <span className='hover:text-red-400 cursor-default transition-all duration-600' onClick={()=>{}}>Home</span>
                    <span className='hover:text-red-400 cursor-default transition-all duration-600'>About Me</span>
                    <span className='hover:text-red-400 cursor-default transition-all duration-600'>Projects</span>
                    <span className='hover:text-red-400 cursor-default transition-all duration-600'>Contact Me</span>
                    <Button name={"Resume"}/>
                </div>
            </div>
        </>
    )
}


export default Navbar