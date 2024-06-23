import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface LoginProps {
  nameId: string;
  type: string;
  placeholder: string;
  text: string;
  value: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonSharedProps {
  type: "button" | "submit" | "reset";
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export type ChildrenContextType = {
  children: ReactNode;
};

export type AuthContextType = {
  login: (email: string, password: string) => Promise<void>;
  errorLogin: string;
};

export interface NotificationProps {
  message: string;
  type: string;
}
