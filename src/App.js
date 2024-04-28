import React from 'react';
import './App.css';
import Home from "./routes/Home";
import Description from "./routes/Description";
import JoinTrip from "./routes/Join_Trip";
import Contact from "./routes/Contact";
import Singup from "./routes/Singup";
import Login from "./routes/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Description" element={<Description />} />
        <Route exact path="/Join-Trip" element={<JoinTrip />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Singup" element={<Singup />} />
        <Route exact path="/Login" element={<Login />} />
        <Route path="*" element={<p>not found page</p>} />
      </Routes>
    </div>
  );
}

export default App;
