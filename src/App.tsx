import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./layouts/Header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("brewie_type")) {
      return localStorage.setItem("brewie_type", "list");
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
