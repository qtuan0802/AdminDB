import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Video() {
  const [video, setvideo] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.pexels.com/videos/search?query=nature&per_page=2", {
        headers: {
          Authorization:
            "563492ad6f91700001000001e1cfb70ed64349ef95d5a1aa3753dd50",
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setvideo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return video ? (
    <div>
      {video.videos.map((item, index) => {
        return item.video_files.map((item2, index) => {
          return (
            <video
              controls
              src={item2.link}
              style={{
                width: "400px",
                height: "400px",
                border: "5px solid white",
              }}
            ></video>
          );
        });
      })}
    </div>
  ) : // <div>{video.url}</div>
  null;
}
