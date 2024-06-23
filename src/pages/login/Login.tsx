import React, { useContext, useState } from "react";
import { InputWithLabel } from "../../shared/inputWithLabel/InputWithLabel";
import background from "../../assets/images/background.png";
import styles from "./Login.module.css";
import { Button } from "../../shared/button/Button";
import { ContextAuthProvider } from "../../context/auth";

export function Login() {
    const { login, errorLogin } = useContext(ContextAuthProvider)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(email, password)
    };

    return (
        <div className={styles.containerHome}>
            <div className={styles.containerLogin}>
                <form onSubmit={handleLogin} className={styles.formLogin}>
                    <h2>ENTRAR</h2>
                    <InputWithLabel
                        nameId="LoginInputEmail"
                        placeholder="exemplo@exemplo.com"
                        text="Email"
                        type="text"
                        value={email}
                        onchange={(e) => setEmail(e.target.value)}
                    />
                    <InputWithLabel
                        nameId="LoginInputPassword"
                        placeholder="********"
                        text="Senha"
                        type="password"
                        value={password}
                        onchange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" text="CONFIRMAR" onclick={() => { }} />
                </form>
                <img
                    src={background}
                    alt="Imagem de background"
                    className={styles.imgLogin}
                />
            </div>
            <div className={styles.sideBar}>
                <a href="" className={styles.linkSideBar}>Github</a>
                <span></span>
                <a href="" className={styles.linkSideBar}>LinkedIn</a>
            </div>
        </div>
    );
}
