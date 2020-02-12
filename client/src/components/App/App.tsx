import * as React from "react";
import { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Login from "../Auth/Login";
import Registration from "../Auth/Registration";

const App: React.FunctionComponent = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </Router>
  );
};

function Home() {
  return <div></div>;
}

export default App;
