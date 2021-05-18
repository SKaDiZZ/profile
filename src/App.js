import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
