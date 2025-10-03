import type { ButtonProps } from "../Common/AllInterfaces"


const Button = ({name}: ButtonProps) => {
    return(
        <span className="btn1 text-white font-medium text-[18px] cursor-pointer px-[15px] py-[10px]">{name}</span>
    )
}


export default Button