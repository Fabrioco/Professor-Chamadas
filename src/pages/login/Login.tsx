import { useState } from "react";
import { InputWithLabel } from "../../shared/inputWithLabel/InputWithLabel";
import background from '../../assets/images/background.png'
import styles from './Login.module.css'

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        alert()
    }

    return (
        <div className={styles.containerLogin}>
            <form onSubmit={handleLogin}>
                <h2>Entrar</h2>
                <InputWithLabel
                    nameId="LoginInputEmail"
                    placeholder="exemplo@exemplo.com"
                    text="Email:"
                    type="text"
                    value={email}
                    onchange={(e) => setEmail(e.target.value)}
                />
                <InputWithLabel
                    nameId="LoginInputPassword"
                    placeholder="********"
                    text="Senha:"
                    type="password"
                    value={password}
                    onchange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">CONFIRMAR</button>
            </form>
            <img src={background} alt="Imagem de background" />
        </div>
    );
}
