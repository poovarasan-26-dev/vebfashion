import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Menu(){
    const navigate=useNavigate();
   
    return(
        <div className="menu-banner">
            <img src="/images/Your paragraph text (3).png" alt="logos"/>
            <div className="con-but">
            <h2>Menu</h2>

            <div className="collec-but">

            <button onClick={()=>navigate("/kids")}>Kids Wear</button>
            <button onClick={()=>navigate("/Mens")}>Mens Wear</button>
            <button onClick={()=>navigate("/womens")}>Womens Wear</button>
            
            
        

         

          </div>
         </div>
        </div>
    );
}