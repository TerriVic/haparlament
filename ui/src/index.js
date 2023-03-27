import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Call from "./video/";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/call" element={<Call/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
    ,
    document.getElementById("root")
)