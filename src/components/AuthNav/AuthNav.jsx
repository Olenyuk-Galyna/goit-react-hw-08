import React from "react";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.text} to="/register">
        Register
      </NavLink>
      <NavLink className={css.text} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
