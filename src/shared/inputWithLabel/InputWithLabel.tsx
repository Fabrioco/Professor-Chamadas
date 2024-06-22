import { LoginProps } from "../../assets/interface/interfaces";

export function InputWithLabel({
    nameId,
    type,
    placeholder,
    text,
    value,
    onchange,
}: LoginProps) {
    return (
        <div>
            <label htmlFor={nameId}>{text}</label>
            <input
                id={nameId}
                type={type}
                value={value}
                onChange={onchange}
                placeholder={placeholder}
            />
        </div>
    );
}
