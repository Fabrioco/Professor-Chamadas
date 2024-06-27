import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface LoginProps {
  nameId: string;
  type: string;
  placeholder?: string;
  text?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonSharedProps {
  type: "button" | "submit" | "reset";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export type ChildrenContextType = {
  children: ReactNode;
};

export type AuthContextType = {
  login: (email: string, password: string) => Promise<void>;
  errorLogin: string;
  showNotification: (message: string, type: string) => void;
};

export interface NotificationProps {
  message: string;
  type: string;
}

export type PrivateProps = {
  children: ReactNode;
};

export interface AllPeopleProps {
  nome: string;
  date: string;
  email: string;
  ra: string;
  imageUrl: string;
}
