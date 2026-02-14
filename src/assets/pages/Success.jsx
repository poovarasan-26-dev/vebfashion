import React from "react";
import { useState,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Success(){
    const images=["/images/thankimg.jpg"];
    const[index,setIndex]=useState(0);
    const timerRef=useRef(null);
    const navigate=useNavigate();

    useEffect(()=>{ timerRef.current=setInterval(()=>{
       setIndex((prev)=>(prev+1)%images.length);
    },2000 );
    return ()=>clearInterval(timerRef.current);
   
},[]);

useEffect(()=>{

const redirectTimer=setTimeout (()=>{
    navigate("/");

},3000);
return()=>clearTimeout(redirectTimer);
},[navigate]);


    

        
    
    return(
        <div className="success">
            <div><img src={images[index]} alt="success"/>
            <div className="welcome">
            <h2>Your Order Successful</h2>
            <p>Thank You For Visit</p>

        </div>
        </div>
        </div>
    );
}