import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const heandleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p className={css.text}>Welcom, {user.name}</p>
      <button className={css.btn} type="button" onClick={heandleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
