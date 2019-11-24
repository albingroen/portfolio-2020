import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Start from "./views/start";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Start} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
