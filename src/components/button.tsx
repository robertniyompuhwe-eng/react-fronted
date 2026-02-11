import React from 'react'
interface Props{
    children:string;
    onClick:()=>void;
    color?:"primary"|"secondary"|"warning"|"danger";
}

function Button({children,onClick,color="primary"}:Props) {
  return (
    <button type="button" className={"btn btn-"+color}   onClick={onClick} color={color}>{children}</button>
  )
}

export default Button