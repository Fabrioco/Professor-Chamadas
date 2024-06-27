import { useEffect, useState } from "react";
import { PrivateProps } from "../assets/interface/interfaces";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConnection";

export function Private({ children }: PrivateProps) {
  const [signed, setSigned] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSigned(true);
        console.log(user);
      } else {
        navigate("/");
      }
    });
    return () => unsub();
  }, [navigate]);

  if (!signed) {
    return null;
  }

  return <>{children}</>;
}
