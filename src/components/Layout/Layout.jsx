import React, { Suspense } from "react";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense>{children}</Suspense>
    </div>
  );
};

export default Layout;
