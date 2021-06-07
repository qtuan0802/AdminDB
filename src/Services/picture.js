import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Picture() {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.pexels.com/v1/search?query=nature&per_page=18", {
        headers: {
          Authorization:
            "563492ad6f91700001000001e1cfb70ed64349ef95d5a1aa3753dd50",
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setPicture(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // phải gọi api ra xong thì mới render ra màn hình
  return picture ? (
    <div>
      {picture.photos.map((item, index) => {
        return (
          <img
            key={index}
            src={item.src.large}
            style={{
              width: "200px",
              height: "200px",
              border: "5px solid white",
            }}
          />
        );
      })}
    </div>
  ) : null;
}
