import React, { useEffect, useState } from "react";
import SlideHeader from "./antComponent/SlideHeader";
import Picture from "./Services/picture";
import Video from "./Services/video";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./Services/test";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={SlideHeader} />
        </Switch>
      </Router>
      {/* <Test /> */}
    </>
  );
}

export default App;
