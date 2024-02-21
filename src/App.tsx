import React from 'react'
import { Route, Routes } from "react-router-dom"
//import logo from './logo.svg';
import './globals.css'

// Layout
import Layout from "./layout"

//회원가입
import SignUp from "./auth/SignUp"
import Service from "./auth/Service" //이용약관
import Privacy from "./auth/Privacy" //개인정보취급방침

//예약(날짜/시간 선택)
import Reserve from "./reserve/Reserve"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reserve" element={<Reserve />} />
      </Route>
    </Routes>
  );
}

export default App;
