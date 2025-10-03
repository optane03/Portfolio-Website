import Button from './BlackButton'

const Navbar = () => {
    return (
        <>
            {/* Header Section */}
            <div id="navbar" className="z-20 w-full bg-[#010101] px-[30px] py-[20px] flex items-start justify-between fixed top-0">
                <span className='text-[22px] text-left'><b>Portfolio</b></span>

                {/* Top navbar */}
                <div className='text-[20px] flex justify-end items-center gap-[15px] font-medium'>
                    <span className='hover:text-[#EB252F] cursor-default transition-all duration-600' onClick={() => { }}><a href='#introduction'>Home</a></span>
                    <span className='hover:text-[#EB252F] cursor-default transition-all duration-600'><a href='#about'>About Me</a></span>
                    <span className='hover:text-[#EB252F] cursor-default transition-all duration-600'>Projects</span>
                    <span className='hover:text-[#EB252F] cursor-default transition-all duration-600'>Contact Me</span>
                    <Button name={"Resume"} />
                </div>
            </div>
        </>
    )
}


export default Navbar