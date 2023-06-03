import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import NavBar from "./shared/layout-components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
