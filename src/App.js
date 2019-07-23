import React from "react";
import "./App.css";
import EditTitle from "./components/EditTitle";
import EditChapeau from "./components/EditChapeau";
import EditText from "./components/EditText";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Early edition</h1>
      </header>
      <section className="editing-article">
        <div className="whole-article">
          <div className="title" id="title-container">
            <EditTitle />
          </div>
          <div className="chapeau" id="chapeau-container">
            <EditChapeau />
          </div>
          <div className="article-content" id="content-container">
            <EditText />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
