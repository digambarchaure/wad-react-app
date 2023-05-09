import "./card.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Buffer } from "buffer";
import SpecificWork from "./SpecificWork";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log(localStorage);
    axios({
      url: "http://localhost:3001/api/dailyWage/uploadWorkImage",
      method: "get",
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then((res) =>{
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  
  // const convertToSlug = (Text) => {
  //   return Text.toLowerCase()
  //     .replace(/ /g, "-")
  //     .replace(/[^\w-]+/g, "");
  // };

  return (

    <div className="container">

      {data.length !== 0 && data.map((singleData) => {

        const buffer = Buffer.from(singleData.imageBuffer.data);
        const base64String = buffer.toString("base64");
        <SpecificWork />;

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
                
                <a href={`/specificWork/${singleData.id}`}>
                  <button id="btn1" value={singleData.id}>
                    {singleData.name}
                  </button>
                </a>
              </div>
            </div>
            
          </div>
        );

      })}
    </div>
  );
}

export default App;
