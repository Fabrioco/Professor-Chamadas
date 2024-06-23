import { createContext, useState } from "react";
import {
  AuthContextType,
  ChildrenContextType,
} from "../assets/interface/interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConnection";
import { useNavigate } from "react-router-dom";

export const ContextAuthProvider = createContext({} as AuthContextType);

export function ContextAuth({ children }: ChildrenContextType) {
  const navigate = useNavigate();

  const [errorLogin, setErrorLogin] = useState('')

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/diretoria");
      })
      .catch((error) => {
        if (error === 'auth/invalid-credential') setErrorLogin("Email ou senha inválido")
      });
  };

  return (
    <ContextAuthProvider.Provider value={{ login, errorLogin }}>
      {children}
    </ContextAuthProvider.Provider>
  );
}
