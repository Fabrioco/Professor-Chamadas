import { ButtonSharedProps } from "../../assets/interface/interfaces";
import './ButtonShared.css'

export function Button({ type, onclick, text }: ButtonSharedProps) {
    return <button type={type} onClick={onclick} className="buttonShared">{text}</button>
}