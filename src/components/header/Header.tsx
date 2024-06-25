import { useEffect, useState } from "react";
import "./header.css";
import { PiStudent } from "react-icons/pi";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [userSigned, setUserSigned] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setUserSigned("signed");
    } else {
        setUserSigned('notSigned')
    }
  }, []);

  return (
    <div className={`header ${userSigned}`}>
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
