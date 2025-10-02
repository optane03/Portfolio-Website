import download from '../Pictures/download.png'

const Navbar = () => {
    return (
        <>
            {/* Header Section */}
            <div id="navbar" className="flex items-start justify-between">
                <span className='text-[20px] text-left'><b>Portfolio</b></span>

                {/* Top navbar */}
                <div className='text-[20px] flex justify-end items-center gap-[15px]'>
                    <span className='hover:text-red-400 cursor-default'>Home</span>
                    <span className='hover:text-red-400 cursor-default'>About Me</span>
                    <span className='hover:text-red-400 cursor-default'>Projects</span>
                    <span className='hover:text-red-400 cursor-default'>Contact Me</span>
                    <span className="btn cursor-default px-[10px] py-[5px] rounded-[10px] flex gap-[3px] items-center">Resume <img src={download} className='w-[20px] h-[20px]'></img></span>
                </div>
            </div>
        </>
    )
}


export default Navbar