interface ButtonProps {
    name: string
}



const Button = ({name}: ButtonProps) => {
    return(
        <span className="btn cursor-default px-[10px] py-[5px] rounded-[10px]">{name}</span>
    )
}

export default Button