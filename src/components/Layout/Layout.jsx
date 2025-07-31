import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";

export function Layout({myData}) {
  return (
    <>
      <Nav myData={myData}/>
      <Outlet />
      <Footer />
    </>
  );
}
