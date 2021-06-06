import React, { useEffect, useState } from "react";
import SlideHeader from "./antComponent/SlideHeader";
import Picture from "./Services/picture";
import Video from "./Services/video";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  // const [hinhAnh, setHinhAnh] = useState([]);
  // useEffect(() => {
  //   async function fetchImg() {
  //     const requestUrl = ``;
  //     const response = await fetch(requestUrl);
  //     const responseJSON = await response.json();
  //     console.log({responseJSON});
  //     const {data} = responseJSON
  //     setHinhAnh(data)
  //   }
  //   fetchImg()
  // },[]);
  return (
    <>
      <Router>
        {/* <SlideHeader></SlideHeader> */}
        <Switch>
          {/* <SiderDemo></SiderDemo>;<Picture></Picture> */}
          {/* <Route path="/picture" component={Picture} />
          <Route path="/video" component={Video} /> */}
          <Route path="/" component={SlideHeader} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
