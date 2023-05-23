 import React from 'react';
 import Header from "./components.js/Header";
import Home from "./components.js/Home";
import Login from "./components.js/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components.js/Details";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 export default function App() {
   return (
     < >
     <BrowserRouter> 

      <Header/>

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      </BrowserRouter>

     </>
   );
 }
 