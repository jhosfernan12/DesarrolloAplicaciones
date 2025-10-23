import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Nav />
        <main>
          <Home />
        </main>
      </div>
    </Router>
  );
}
