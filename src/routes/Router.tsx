import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Login } from "../pages/login/Login";
import { Admin } from "../pages/admin/admin";
import { Teacher } from "../pages/teacher/Teacher";
import { ContextAuth } from "../context/auth";
import { Private } from "./private";

export function RouterApp() {
  return (
    <BrowserRouter>
      <ContextAuth>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/diretoria" element={<Admin />} />
          <Route
            path="/teacher"
            element={
              <Private>
                <Teacher />
              </Private>
            }
          />
        </Routes>
      </ContextAuth>
    </BrowserRouter>
  );
}
