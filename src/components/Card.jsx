import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
  

export default function Card(Props) {
    const navigate = useNavigate();
    const [user,setuser]=useState();
    useEffect(()=>{
        // console.log(Props.user);
        setuser(Props.user);
        // console.log(user);
    },[]);
    
  return (
    <div   style={{backgroundColor:"#377dc1",display:"flex",justifyContent:"space-around",
    alignItems: "center",width:"600px",height:"150px",marginTop:"50px"}} onClick={()=>navigate("/Oneuser",{state:{user1:{user}}})} >
        <div>
        <img src={Props.user.avatar} />
        </div>
        <div>
            <h3>{Props.user.first_name}</h3>
            <h5>{Props.user.email}</h5>
        </div>
    </div>
  )
}
