import { ReactNode } from "react";

export interface ButtonType {
    icon?:ReactNode,
    iconPostion?:"left" | "right",
    title:string,
    type:"submit" | "button",
    extraClass?:string,
    variant:"filled" | "outlined"
}