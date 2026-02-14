import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Kidsdetail() {
  const { state } = useLocation();
  const navigate=useNavigate();

  const ageKeys = Object.keys(state.ages);
  const [selectedAge, setSelectedAge] = useState(ageKeys[0]);

  const current = state.ages[selectedAge];

  return (
    <div className="kid-detail">
      
      
      <div className="kid-cardimg">
        <img src={state.img} alt="product"/>
        <br /><br />
         <button className='order-btn' onClick={()=>navigate("/Success")}>Order Now</button>
      </div>

      
      <div className="kid-con">
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

        <h3>Price:{current.price}</h3>
        <h3>Rating: <span className="filled">{current.rating}</span></h3>
        <p>Review: {current.review}</p>
      </div>
    </div>
  );
}

// import { useState } from 'react';
// import{useLocation}from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// export default function kidsdetail(){
//     const {state:product }=useLocation();
//     const navigate=useNavigate();
//     const [sizeData,setSizeData] =useState({
//         size:"0-1 year",
//         price:499,
//         review:"beast cloth",
//         par:"perfect",
//         Rating:"★★★★(4.7/5)"


//     });
//     const handlesize=(type)=>{
//         switch(type){
//             case"1":
//             setSizeData({
//                  size:"0-1 year",
//                  price:499,
//                  review:"beast ",
//                 par:"perfect combo",
//                  Rating:"★★★★(4.7/5)"

                 

//             });
//             break;
//             case"2":
//              setSizeData({
//                  size:"0-1 year",
//                  price:599,
//                  review:"beast collections",
//                  par:"perfect combo",
//                  Rating:"★★★★(4.7/5)"

//             });
//             break;
//             case"3":
//              setSizeData({
//                  size:"0-1 year",
//                  price:799,
//                  review:"beast for boys fashion",
//                 Rating:"★★★★(4.7/4)",
//                 par:"",

//             });
//             break;
//              case"4":
//              setSizeData({
//                  size:"0-1 year",
//                  price:599,
//                  review:"beast for boys fashion",
//                 Rating:"★★★★(4.4/4)",
//                 par:"the kids perfect match"

//             });
//             break;

//             default:
//                 break;

//         }
//     };
//     if(!product)return<h2>No Product Found</h2>

        
//     return(
//         <>
//          <h2 className='p-name'>{product.name}</h2>
//         <div className='kidsdetail'>
         

//         <div className='kid-cardimg'> 
//            <img src={product.img}width="250" alt='kids wear'/>
//             <button className='order-btn' onClick={()=>navigate("/Success")}>Order Now</button>
//         </div>
       

//         <div className='kids-list'>
//           <p style={{textAlign:"center"}}>{sizeData.par}</p>
//           <h3>Size:{sizeData.sizeData}</h3>
             
//             <button onClick={()=>handlesize("1")}>0-1 year</button>
//             <button onClick={()=>handlesize("2")}>1-2 year</button>
//             <button onClick={()=>handlesize("3")}>2-3 year</button>
         
              
            
//             <h3>Price: ₹{sizeData.price}</h3>
//             <p>{sizeData.review}</p>
//             <p>{sizeData.par}</p>
//             <p>{sizeData.Rating}</p> 
         
            

//         </div> 
//          </div>
//         </>
//     );

// }