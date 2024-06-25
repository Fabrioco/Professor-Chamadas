import React from "react";
import { ButtonSharedProps } from "../../assets/interface/interfaces";
import "./ButtonShared.css";

export function Button({ type, onClick, text }: ButtonSharedProps) {
  return (
    <button type={type} onClick={onClick} className="buttonShared">
      {text}
    </button>
  );
}
