import './header.css'
import { PiStudent } from "react-icons/pi";

export const Header = () => {
    return (
        <div className='header'>
            <div className="content__left">
                <PiStudent />
                <h1>EMEF JOÃO PAULO</h1>
            </div>
            <div className="content__right">
                <p>01/01/2001</p>
                <p>00:00</p>
            </div>
        </div>
    );
};
