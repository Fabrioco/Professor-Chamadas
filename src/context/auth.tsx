import { createContext, useState } from "react";
import {
  AuthContextType,
  ChildrenContextType,
} from "../assets/interface/interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConnection";
import { useNavigate } from "react-router-dom";
import { Notification } from "../components/notification/Notification";

export const ContextAuthProvider = createContext({} as AuthContextType);

export function ContextAuth({ children }: ChildrenContextType) {
  const navigate = useNavigate();

  const [errorLogin, setErrorLogin] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const showNotification = (message: string, type: string) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  const login = async (email: string, password: string) => {
    if (email === "" && password === "") {
      showNotification("Preencha todos os campos", "error");
      return;
    }
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        showNotification("Bem vindo de volta!", "success");
        navigate("/diretoria");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email") {
          showNotification("Email inválido", "error");
        } else if (error.code === "auth/wrong-password") {
          showNotification("Senha incorreta", "error");
        } else if (error.code === "auth/user-not-found") {
          showNotification("Usuário não encontrado", "error");
        } else {
          showNotification("Erro ao realizar login", "error");
        }
        setErrorLogin(error.message);
      });
  };

  return (
    <ContextAuthProvider.Provider
      value={{ login, errorLogin, showNotification }}
    >
      {children}
      {notification.message && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </ContextAuthProvider.Provider>
  );
}
