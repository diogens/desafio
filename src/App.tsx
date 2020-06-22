import React from "react";
import Router from "./routes";

import GlobalSyles from "./styles/global";

import Layout from "./layout";

function App() {
  return (
    <div>
      <Layout>
        <Router />
      </Layout>
      <GlobalSyles />
    </div>
  );
}

export default App;
