import React from 'react'
import { Outlet } from "react-router-dom";

import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

export default function Layout() {  
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}