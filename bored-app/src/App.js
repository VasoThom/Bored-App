import "./App.css";
import Home from "./views/Home";
import Activities from "./views/Activities";
import Nav from "./components/Nav";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
