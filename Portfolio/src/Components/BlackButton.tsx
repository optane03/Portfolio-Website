import type { ButtonProps } from "../Common/AllInterfaces"


const Button = ({name}: ButtonProps) => {
    return(
        <span className="btn cursor-pointer px-[10px] py-[5px] rounded-[10px]">{name}</span>
    )
}


export default Button