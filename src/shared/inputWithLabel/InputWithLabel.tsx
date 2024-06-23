import { LoginProps } from "../../assets/interface/interfaces";
import './InputWithLabel.css'

export function InputWithLabel({
    nameId,
    type,
    placeholder,
    text,
    value,
    onchange,
}: LoginProps) {
    return (
        <div className="container__input">
            <label htmlFor={nameId} className="labelShared">{text}</label>
            <input
                className="inputShared"
                id={nameId}
                type={type}
                value={value}
                onChange={onchange}
                placeholder={placeholder}
            />
        </div>
    );
}
