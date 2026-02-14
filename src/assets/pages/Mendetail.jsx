import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Mendetail() {
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

// export default function Mendetail(){
//     const {state:product }=useLocation();
//     const navigate=useNavigate();
//     const [sizeData,setSizeData] =useState({
//         size:"S",
//         price:499,
//         review:"best cloth",
//         par:"",
      


//     });
//     const handlesize=(type)=>{
//         switch(type){
//             case"L":
//             setSizeData({
//                  size:"L",
//                  price:599,
//                  review:"best fashion style",
//                  par:"",

//             });
//             break;
//             case"2-3":
//              setSizeData({
//                  size:"M",
//                  price:699,
//                  review:"best collections",

//             });
//             break;
//             case"3-4":
//              setSizeData({
//                  size:"XL",
//                  price:1299,
//                  review:"best for boys fashion",

//             });
//             break;
//             default:
//                 break;
//         }
//     };
//     const handlepant=(type)=>{
//         switch(type){

//              case"29":
//              setSizeData({
//                  size:"29",
//                  price:699,
//                  review:"best for boys fashion",

//             });
//             break;

//              case"30":
//              setSizeData({
//                  size:"30",
//                  price:899,
//                  review:"best for boys pants",

//             });
//             break;
//              case"32":
//              setSizeData({
//                  size:"32",
//                  price:999,
//                  review:"best for boys fashion",

//             });
//             break;

//              case"34":
//              setSizeData({
//                  size:"34",
//                  price:1299,
//                  review:"best for boys fashion",




//             });
//             break;


//             default:
//                 break;

//         }
//     };
//     if(!product)return<h2>No Product Found</h2>

        
//     return(
//         <>
//          <h2 className='p-name'>Mens Collections</h2>    
//           {/* {product.name} */}
//         <div className='Mendetail'>
           
//             <div className="men-cardimg">
//                 <img src={product.img} height={300} alt='men wear'/>
//                 <button  className="order-btn"onClick={()=>navigate("/Success")}>Order Now</button>
//             </div>
            
//             <div className='center'>
//                 <p style={{textAlign:"center"}}>{sizeData.par}</p>
//                 <h3>Size:{sizeData.sizeData}</h3>
//                 <button onClick={()=>handlesize("S")}>S</button>
//                 <button onClick={()=>handlesize("L")}>L</button>
//                 <button onClick={()=>handlesize("2-3")}>M</button>
//                 <button onClick={()=>handlesize("3-4")}>XL</button>

//               {/* <button onClick={()=>handlepant("29")}>29</button>
//              <button onClick={()=>handlepant("30")}>30</button>
//               <button onClick={()=>handlepant("32")}>32</button>
//               <button onClick={()=>handlepant("34")}>34</button> */}

//                <h3>Price: ₹{sizeData.price}</h3>
//                <p>{sizeData.review}</p>
//                 <h2>Rating:</h2><p className="rating"><span className="filled">★★★★★</span>(4.8/5)<span className="empty">☆</span> </p>
               
               
               
              
               
//             </div>
//         </div>
//          </>      
          
//     );

// }