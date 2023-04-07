import React, { PropsWithChildren } from "react";
import { Navbar, NavBar } from "..";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar/>
        <div className="min-h-screen bg-gray-100 mb-10">
            {children}
            </div>
    </>
  );
};
export default Layout;
