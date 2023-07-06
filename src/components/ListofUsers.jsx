import React, { useEffect, useState } from 'react'
import Card from './Card';

  

export default function ListofUsers() {
    
    
     const [users,setusers]=useState();
     useEffect(()=>{
        now1();
     },[]);
    const now1=async  ()=>{
      const res =await fetch("https://reqres.in/api/users?page=2", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    // console.log(res);
    const y =await  res.json();
    console.log(y);
    const now=y.data.map((element)=>{
        return (
           <Card user={element} />
        )
      })
      setusers(now);
}

  return (
    <div style={{    display: "flex",
        flexDirection: "column",
        alignItems: "center"}}>{users}</div>
  )
}
