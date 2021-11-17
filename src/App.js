import "./styles.css";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dash from "./Pages/dash";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Dash} />
      </Switch>
    </BrowserRouter>
  );
}
