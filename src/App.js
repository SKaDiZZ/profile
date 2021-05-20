import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="container mx-auto max-w-screen-lg  px-6">
      <header className="h-24 flex justify-between items-center my-10">
        <div>
          <h3 className="font-logo text-5xl text-white">
            <span className="text-main-brand">S</span>amir
          </h3>
          <h4 className="text-xs tracking-widest">
            <span className="text-white">KAHVEDZIC</span>/SKADIZZ
          </h4>
        </div>
        <nav>
          <ul className="main-nav">
            <li>
              <NavLink to="/" exact={true} activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/home" activeClassName="active">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/home" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/home" activeClassName="active">
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/home" activeClassName="active">
                Contact Me
              </NavLink>
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
