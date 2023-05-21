import React, { useState } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/elements/Jumbotron";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import "./components/components.css";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <Jumbotron />

      <CardList inputValue={inputValue} />
      <Footer />
    </div>
  );
}

export default App;
