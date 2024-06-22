import React from "react";

export interface LoginProps {
  nameId: string;
  type: string;
  placeholder: string;
  text: string;
  value: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
