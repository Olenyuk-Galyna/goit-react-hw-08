import React from "react";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
