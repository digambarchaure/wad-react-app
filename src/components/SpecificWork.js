import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SpecificWorks.css";

export default function SpecificWork() {
  const params1 = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(params1.id);
    axios({
      url: "http://localhost:3001/api/dailyWage/getSpecificTypeWorks",
      method: "get",
      params: {
        id: params1.id,
      },
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data.obj);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Request");
    axios({
      url: "http://localhost:3001/api/dailyWage/apply",
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: {
        workid: e.target.value,
      },
    })
      .then((Response) => {
        alert(Response.data.msg);
      })
      .catch((Response) => {
        console.log(Response);
        alert(Response.response.data.msg);
      });
  };

  // things for form
  const [showForm, setShowForm] = useState(false);

  const [inputData, setInputData] = useState({
    address: "",
    pay: "",
    description: "",
    workingHours: "",
    worktypeid : params1.id,
  });

  const handleClickForForm = () => {
    setShowForm(true);
  };

  const handelData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmitForForm = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/dailyWage/createNewJob", inputData, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((Response) => {
        console.log(Response);
        if (Response.status === 201) alert("Work Added Successfully");
      })
      .catch((error) => alert(error.message));

    setShowForm(false);
  };

  return (
    <>
      <div class="workcards">
        {data.map((singleData) => {
          return (
            <div class="work">
              <div class="topsection">
                <div class="address">
                  <h3>Location: {singleData.location}</h3>
                </div>
                <div class="Name">
                  <h3>Job Geever Name: ____</h3>
                </div>
                <div class="pay">
                  <h3>Pay Per Day: {singleData.payPerDay}</h3>
                </div>
                <div class="Duration">
                  <h3> Duration of work: {singleData.workingHours}</h3>
                </div>
              </div>

              <div class="bottomsection">
                <button
                  type="submit"
                  id="btn"
                  value={singleData._id}
                  onClick={handleSubmit}
                >
                  Apply
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <button type="submit" id="btn2" onClick={handleClickForForm}>
          Add New Work
        </button>
      </div>

      <div>
        {showForm && (
          <form onSubmit={handleSubmitForForm}>
            
            <label for="address">Address</label>
            <input
              type="text"
              name="address"
              value={inputData.address}
              onChange={handelData}
              required
              id=""
            />

            <label for="pay">Pay Per Hour</label>
            <input
              type="number"
              name="pay"
              value={inputData.pay}
              onChange={handelData}
              required
              id=""
            />

            <label for="workingHours">Duration</label>
            <input
              type="number"
              name="workingHours"
              value={inputData.workingHours}
              onChange={handelData}
              id=""
            />

            <label for="description">Description</label>
            <input
              type="text"
              name="description"
              value={inputData.description}
              onChange={handelData}
              id=""
            />

            <button type="submit" id="btn2" onClick={handleSubmitForForm}>
              Add New Work
            </button>
          </form>
        )}
      </div>
    </>
  );
}