// // import React from "react";
// import construction from "./img/construction.jpeg";
// import plumber from "./img/plumber.jpg";
// import housekeeping from "./img/housekeeping.jpg";

// NO USE

// const [data, setData] = useState([]);


// const CardData = [
//   {
//     img: construction,
//     title: "Construction (Johny)",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A harum perferendis sint nulla sapiente ratione, voluptate laborum rerum eos vero iure expedita soluta facilis fugit beatae sequi dolorum repellendus!",
//   },
//   {
//     img: plumber,
//     title: "Plumber (Sins)",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A harum perferendis sint nulla sapiente ratione, voluptate laborum rerum eos vero iure expedita soluta facilis fugit beatae sequi dolorum repellendus!",
//   },
//   {
//     img: housekeeping,
//     title: "House Keeping (Johny Sins)",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A harum perferendis sint nulla sapiente ratione, voluptate laborum rerum eos vero iure expedita soluta facilis fugit beatae sequi dolorum repellendus!",
//   },
//   {
//     img: housekeeping,
//     title: "House Keeping (Johny Sins)",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A harum perferendis sint nulla sapiente ratione, voluptate laborum rerum eos vero iure expedita soluta facilis fugit beatae sequi dolorum repellendus!",
//   },{
//     img: housekeeping,
//     title: "House Keeping (Johny Sins)",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A harum perferendis sint nulla sapiente ratione, voluptate laborum rerum eos vero iure expedita soluta facilis fugit beatae sequi dolorum repellendus!",
//   },
// ];

// export default CardData;


import axios from "axios";
import { useState, useEffect } from "react";
import { Buffer } from "buffer";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:3001/api/dailyWage/uploadWorkImage",
      method: "get",
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      {data.map((singleData) => {
        console.log(singleData);
        const buffer = Buffer.from(singleData.imageBuffer.data);
        const base64String = buffer.toString("base64");
        console.log(base64String);
        return (
            <div className="card">
              <div className="top">
                <img
                  className="image"
                  src={`data:image/png;base64,${base64String}`}
                  alt="no image"
                />
              </div>
              <div className="bottom">
                <div className="ref">
                  <p id="text">{singleData.description}</p>
                </div>
                <div className="button">
                  <button id="btn1">{singleData.name}</button>
                </div>
              </div>
            </div>
          
        );
      })}
    </div>
  );
}

export default data;