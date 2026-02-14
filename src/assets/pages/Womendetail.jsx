import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Womendetail() {
  const { state } = useLocation();
  const navigate=useNavigate();

  const ageKeys = Object.keys(state.ages);
  const [selectedAge, setSelectedAge] = useState(ageKeys[0]);

  const current = state.ages[selectedAge];

  return (
    <div className="men-detail">
      
      
      <div className="men-cardimg">
        <img src={state.img} alt="product"/>
        <br /><br />
        <button className='order-btn' onClick={()=>navigate("/Success")}>Order Now</button>
       
      </div>
       

      
      <div className="center">
        <h2>{state.name}</h2>
        <p>{state.description}</p>

        <h3>Select Age</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          {ageKeys.map((age) => (
            <button key={age} onClick={() => setSelectedAge(age)}>
              {age}
            </button>
          ))}
        </div>

        <h3>Price: {current.price}</h3>
        <h3>Rating: <span className="filled">{current.rating}</span></h3>
        <p>Review: {current.review}</p>
      </div>
    </div>
  );
}

// import { useState } from 'react';
// import{useLocation}from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// export default function Womendetail(){
//     const {state:product }=useLocation();
//     const navigate=useNavigate();

//     const [sizeData,setSizeData] =useState({
//         color:"normal",
//         price:699,
//         review:"beast cloth",


//     });
//      const handlesize=(type)=>{
//         switch(type){
//             case"design":
//             setSizeData({
//                  color:"red",
//                  price:2299,
//                  review:"beast fashion style",

//             });
//             break;
//             case"fashion":
//              setSizeData({
//                  size:"blue",
//                  price:799,
//                  review:"beast collections",

//             });
//             break;
//             case"premium":
//              setSizeData({
//                  size:"pink",
//                  price:1299,
//                  review:"beast for boys fashion",

//             });
//             break;
//             default:
//                 break;

//         }
//     };
//     if(!product)return<h2>No Product Found</h2>

        
//     return(
//         <div className='womendetail'>
//             <h2>{product.name}</h2>
//             <img src={product.img}width="250" alt='kids wear'/>
//             <h3>Material</h3>
//             <button onClick={()=>handlesize("normal")}>normal</button>
//              <button onClick={()=>handlesize("fashion")}>fashion</button>
//               <button onClick={()=>handlesize("premium")}>premium</button>
//                <button onClick={()=>handlesize("design")}>design</button>

//               {/* <h3>size:{sizeData.sizeData}</h3> */}
//                <h3>Price: ₹{sizeData.price}</h3>
//                <p>{sizeData.review}</p>
//                <button onClick={()=>navigate("/Success")}>Order Now</button>
          
            
           
            

 


//         </div>
//     );

// }

