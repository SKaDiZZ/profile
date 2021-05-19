import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="container mx-auto px-6 sm:px-0">
      <header className="h-32 flex justify-between items-center border-b">
        <nav>
          <ul className="flex gap-6 text-xl font-medium">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/home">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/home">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/home">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/home">Contact Me</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
