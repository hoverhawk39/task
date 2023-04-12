// console.log("Setup Environment 123");

import "./style.css";
import Main from "./Main";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />}/>
    </Routes>
</BrowserRouter>
);