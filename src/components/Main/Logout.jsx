import React from "react";
import { Link } from "react-router-dom";
import ProductTab from "./ProductTab";
import "./css/login.css";

function Logout(props) {
  function handlerLogout() {
    window.localStorage.removeItem("ID");
  }
  return (
    <div className="logoutForm">
      <button onClick={handlerLogout}>
        <Link to="/" element={<ProductTab />}>
          ๋ก๊ทธ์์
        </Link>
      </button>
    </div>
  );
}

export default Logout;
