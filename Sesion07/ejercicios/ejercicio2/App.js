import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <UserProfile />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
