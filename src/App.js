import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import NavBar from "./shared/layout-components/NavBar";

function App() {
  return (
    <div className="container mx-auto max-w-screen-lg px-6">
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
