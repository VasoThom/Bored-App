import "./App.css";
import Home from "./views/Home";
import Activities from "./views/Activities";
import Nav from "./components/Nav";
import ActivitiesContext from "./context/ActivitiesContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ActivitiesContext>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activities" element={<Activities />} />
            </Routes>
          </ActivitiesContext>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
