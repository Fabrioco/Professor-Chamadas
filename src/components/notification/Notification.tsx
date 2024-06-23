import { NotificationProps } from "../../assets/interface/interfaces";
import "./notification.css";
import { FaCheck } from "react-icons/fa";
import { MdError } from "react-icons/md";

export function Notification({ message, type }: NotificationProps) {
  return (
    <div className={`notification ${type}`}>
      {type === "success" ? <FaCheck /> : <MdError />}
      <span> {message}</span>
    </div>
  );
}
