import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="text-center">
        <Header />
      </div>
      <Main />
    </>
  );
}

export default App;