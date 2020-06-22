import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Edit from "./pages/Edit";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route exact path="/edit/:id/" component={Edit} />
    </BrowserRouter>
  );
}
