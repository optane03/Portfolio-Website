import Button from "../Components/YellowButton";
import aboutme from "../Pictures/aboutme.jpg";


const About = () => {
    return (
        <div id="about" className="mt-[150px] bg-white text-black text-left p-[100px] px-[300px]">
            <div className="text-[72px] font-bold font-serif mb-[70px]">About Me</div>
            <div className="w-full flex justify-between h-auto px-[50px] gap-[50px]">
                <img src={aboutme} className="w-[500px]" />
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="mb-[25px] font-medium text-[18px] text-[#525252]">I'm a passionate full stack developer with over a year of experience crafting beautiful, user-centered websites and applications</div>
                        <div className="text-[32px] font-bold">My focus is on crafting impactful products that combine design, technology, and functionality.</div>
                    </div>
                    <Button name={`More About Me ->`}/>
                </div>
            </div>
        </div>
    )
}


export default About;