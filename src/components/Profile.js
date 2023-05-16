import axios from 'axios';
import { useEffect, useState } from 'react';
import Seeker from './seeker';
import Giver from './Giver';

function Profile() {
  const [data, setData] = useState([]); // basic 
  const [isSeeker, setIsSeeker] = useState(false);
  const [data1, setData1] = useState([{}]); // job/ applied.
  const [isGiver, setIsGiver] = useState(false);
  useEffect(() => {
    setIsGiver(false);
    setIsSeeker(false);
    axios({
      url: "http://localhost:3001/api/dailyWage/profile",
      method: 'get',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res);
      setData(res.data.data.basic_detail);
      if (res.data.data.basic_detail.usertype === 'seeker') {
        setData1(res.data.data.jobs_applied);
        setIsSeeker(true);
        setIsGiver(false);
        console.log(res);
        console.log(isGiver);
      } else {
        console.log(res.data.data);
        setData1(res.data.data.applied_users);
        setIsSeeker(false);
        setIsGiver(true);
        
      }
    }).catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="Appp">
      
        <div className="user1">
          <div className="first">
            <input type="text" className="inp2" placeholder={ data.name}></input>
          </div>
          <div className="second">
          <input className="inp2" type="text" placeholder={ data.usertype}></input>
            
          </div>
          <div className="third">
          <input className="inp2" type="text" placeholder={ data.email}></input>
            
          </div>
          <div className="fourth">
          <input className="inp2" type="text" placeholder={ data.phoneno}></input>
            
          </div>
        </div>

        {isSeeker && <Seeker jobs={data1} />}
        {isGiver && <Giver users={data1} />}

    </div>
  );
}

export default Profile;
