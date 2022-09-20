import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/";
import { Home, SignIn, SignUp } from "./pages/";

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={
                <Home />
            } />
            <Route path="/signin" element={
                <SignIn />
            } />
            <Route path="/signup" element={
                <SignUp />
            } />
        </Routes>
    </div>
  );
}

export default App;
