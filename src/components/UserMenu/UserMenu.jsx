import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const heandleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>Welcom, {user.name}</p>
      <button type="button" onClick={heandleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
