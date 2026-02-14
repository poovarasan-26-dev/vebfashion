import { useNavigate } from "react-router-dom";

export default function Womens() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      img: "/images/girlimg.jpg",
      alt:"blank",
      name: "womens elegant midi dress",
      description: "Elegant & feminine, suitable for casual and semi-formal wear",
      ages: {
        "S": { price: "₹1,500", rating: "⭐⭐⭐⭐☆", review: "V-neck cross wrap style" },
        "L": { price: "₹2,500", rating: "⭐⭐⭐⭐⭐", review: "gives a slim and stylish look" },
        "M": { price: "₹3,500", rating: "⭐⭐⭐⭐☆", review: "Modern casual style" },
         "XL": { price: "₹4,500", rating: "⭐⭐⭐⭐☆", review: "highlights the waist shape" },
      },
    },

    {
      id: 2,
      img: "/images/blush-formal-dress-for-girls.webp",
      alt:"blank",
      name: "Womens Wear",
      description: "Women’s Salwar Kameez / Kurta Set",
      ages: {
         "S": { price: "₹2,000", rating: "⭐⭐⭐⭐☆", review: "Teal blue / Peacock green ,Festive wear" },
        "L": { price: "3,000", rating: "⭐⭐⭐⭐⭐", review: "Regular to slim fit – gives a sharp, office-ready appearance" },
        "M": { price: "4,000", rating: "⭐⭐⭐⭐☆", review: "party wear, wedding functions" },
         "XL": { price: "5,000", rating: "⭐⭐⭐⭐☆", review: "Elegant, royal, and traditional with a modern touch" },
      },
    },

    {
      id: 3,
      img: "/images/norimg.jpg",
      alt:"blank",
      name: "Womens Ethnic Anarkali",
      description: "Festive wear, Haldi function, wedding events, party wear",
      ages: {
        "S": { price: "₹2,500", rating: "⭐⭐⭐⭐⭐☆", review: "traditional with a modern silhouette" },
        "L": { price: "3,500", rating: "⭐⭐⭐⭐", review: "Lightweight net or chiffon" },
        "M": { price: "3,999", rating: "⭐⭐⭐⭐☆", review: "works well for both formal and casual wear " },
         "XL": { price: "4,499", rating: "⭐⭐⭐⭐☆", review: "Matching flared inner / palazzo-style base" },
      },
    },

    {
      id: 4,
      img: "/images/Pakistaniforma.webp",
      alt:"blank",
      name: " Pakistani Style Salwar Suit",
      description: "Soft light blue – fresh, clean, and professional look",
      ages: {
        "S": { price: "₹4,000", rating: "⭐⭐⭐⭐☆", review: "gives a neat and modern appearance" },
        "L": { price: "₹5,000", rating: "⭐⭐⭐⭐⭐", review: "Antique gold" },
        "M": { price: "₹7,000", rating: "⭐⭐⭐⭐☆", review: "Royal, luxurious, and heavily embellished traditional wear" },
         "XL": { price: "₹8,000", rating: "⭐⭐⭐⭐☆", review: "Soft net with shimmer finish" },
      },
    },

    {
      id: 5,
      img: "/images/sareeimg.avif",
      alt:"blank",
      name: "Womens Traditional Saree",
      description: "Elegant, royal, and classic Indian ethnic style",
      ages: {
        "(32-34)": { price: "₹1,499", rating: "⭐⭐⭐⭐⭐☆", review: "Matching blouse piece included" },
        "36": { price: "₹2,999", rating: "⭐⭐⭐⭐⭐", review: "Banarasi-style fabric" },
        "38": { price: "₹3,499", rating: "⭐⭐⭐⭐☆", review: "Wedding, reception, festival, party wear" },
        "40": { price: "4,999", rating: "⭐⭐⭐⭐☆", review: "Smooth texture with natural shine" },
      },
    },

    {
      id: 6,
      img: "/images/sareeif.jpg",
      alt:"blank",
      name: "womens bridal saree",
      description: "Traditional Indian Bridal Saree",
      ages: {
         "32": { price: "₹4,999", rating: "⭐⭐⭐⭐⭐☆", review: "Classic, royal, and heavily traditional" },
        "36": { price: "₹5,999", rating: "⭐⭐⭐⭐⭐", review: "Wedding, bridal ceremony, reception" },
        "38": { price: "₹5,199", rating: "⭐⭐⭐⭐☆", review: "Suitable for party / casual-formal wear" },
        "40": { price: "5,499", rating: "⭐⭐⭐⭐☆", review: "Lustrous shine suitable for bridal functions" },
      },
    },

    {
      id: 7,
      img: "/images/clothing-ethnic.jpg",
      alt:"blank",
      name: "womens saree",
      description: "Traditional Indian Saree",
      ages: {
         "30": { price: "₹1,499", rating: "⭐⭐⭐⭐⭐☆", review: "Simple, elegant, and graceful" },
        "32": { price: "₹2,999", rating: "⭐⭐⭐⭐⭐", review: "casual functions, light festive wear" },
        "34": { price: "₹3,499", rating: "⭐⭐⭐⭐☆", review: "Small woven motifs across the saree" },
        "38": { price: "4,999", rating: "⭐⭐⭐⭐☆", review: "Lightweight, breathable, smooth finish" },
      },
    },

    {
      id: 8,
      img: "/images/Designer_Saree.webp",
      alt:"blank",
      name: " Womens Lehenga Saree",
      description: "Draped like a saree over the lehenga (half-saree look)",
      ages: {
         "S": { price: "₹3,999", rating: "⭐⭐⭐⭐☆", review: "Classic round neck" },
        "L": { price: "₹3,599", rating: "⭐⭐⭐⭐⭐", review: "Elbow-length sleeves" },
        "M": { price: "₹4,159", rating: "⭐⭐⭐⭐☆", review: "Traditional tailored blouse" },
        "XL": { price: "5,999", rating: "⭐⭐⭐⭐⭐☆", review: "Full length (ankle fold shown for style)" },
      },
    },

    {
      id: 9,
      img: "/images/gettyimages-.jpg",
      alt:"blank",
      name: "Womens wear",
      description: "Soft cotton womens wear",
      ages: {
        "S": { price: "₹3,999", rating: "⭐⭐⭐⭐☆", review: "Modern casual style" },
        "L": { price: "₹4,999", rating: "⭐⭐⭐⭐⭐", review: "Very comfortable" },
        "M": { price: "₹5,999", rating: "⭐⭐⭐⭐☆", review: "gives a neat and stylish look" },
        "XL": { price: "₹6,999", rating: "⭐⭐⭐⭐☆", review: "Good quality" },
      },
    },

    {
      id: 10,
      img: "/images/COTTON_.webp",
      alt:"blank",
      name: "Womens wear",
      description: "Soft cotton Womens wear",
      ages: {
       "S": { price: "₹3,599", rating: "⭐⭐⭐⭐☆", review: "Modern casual style" },
        "L": { price: "₹3,999", rating: "⭐⭐⭐⭐⭐", review: "Very comfortable" },
        "M": { price: "₹4,499", rating: "⭐⭐⭐⭐☆", review: "gives a neat and stylish look" },
        "XL": { price: "₹5,999", rating: "⭐⭐⭐⭐☆", review: "Good quality" },
      },
    },

    {
      id: 11,
      img: "/images/cdfcg_512.webp",
      alt:"blank",
      name: "Womens Collections",
      description: "Soft cotton wear",
      ages: {
        "S": { price: "₹2,999", rating: "⭐⭐⭐⭐⭐☆", review: "Nice for cotton" },
        "L": { price: "₹3,599", rating: "⭐⭐⭐⭐", review: "Very comfortable" },
        "M": { price: "₹4,799", rating: "⭐⭐⭐⭐☆", review: "Good quality" },
         "XL": { price: "₹4,999", rating: "⭐⭐⭐⭐⭐☆", review: "Good quality" },
      },
    },

    {
      id: 12,
      img: "/images/fasimg.jpg",
      alt:"blank",
      name: "Womens Collections",
      description: "Soft cotton Womens wear",
      ages: {
        "S": { price: "₹3,999", rating: "⭐⭐⭐☆", review: "Nice for look" },
        "L": { price: "₹4,999", rating: "⭐⭐⭐⭐⭐", review: "Very comfortable" },
        "M": { price: "₹5,499", rating: "⭐⭐⭐⭐☆", review: "Premium Stylish" },
         "XL": { price: "₹5,999", rating: "⭐⭐⭐⭐⭐☆", review: "Modern casual style" },
      },
    },
];
const handleAdd = (product) => {
    navigate("/Womendetail", { state: product });
  };

  return (
    <div className="kids-container">
      {products.map((item) => (
        <div className="kids-img" key={item.id}>
           <h3>{item.name}</h3><img src={item.img} alt="kids" width="200" />
         
          <button onClick={() => handleAdd(item)}>Add</button>
        </div>
      ))}
    </div>
  );
}

// import{useNavigate} from "react-router-dom";

// export default function Womens(){
//      const navigate=useNavigate();
       
    
//     const handleAdd=(product)=>{
//         navigate("/Womendetail",{state:product});

//     };

//     return(
//         <div className="women">
//             <h2>Womens Collections</h2>
//             <div className="img-women">
//            <div><img src="/images/girlimg.jpg" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/girlimg.jpg",
//             color:"normal",
//             price:"₹2999",
//             review:"nice cloth",
//            })
//            }
//            >Add</button></h2></div>

//             <div><img src="/images/blush-formal-dress-for-girls.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/blush-formal-dress-for-girls.webp",
//             size:"S",
//             price:"₹2999",
//             review:"comfortable",
//            })
//            }
//            >Add</button></h2></div>
//             <div><img src="/images/norimg.jpg" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/norimg.jpg",
//             size:"L",
//             price:"₹2599",
//             review:"good products",
//            })
//            }
//            >Add</button></h2></div>
//             <div><img src="/images/Pakistaniforma.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/Pakistaniforma.webp",
//             size:"M",
//             price:"₹4999",
//             review:"good collection",
//            })
//            }
//            >Add</button></h2></div>
//         </div>
//         <h2>Saree Collections</h2>

//          <div className="img-women">
//             <div><img src="public\images\sareeimg.avif" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/sareeimg.avif",
//             size:"festival saree",
//             price:"₹999",
//             review:"Nice quality saree",
//            })
//            }
//            >Add</button></h2></div>
//             <div><img src="/images/sareeif.jpg" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/sareeif.jpg",
//             size:"saree",
//             price:"₹1999",
//             review:"good",
//            })
//            }
//            >Add</button></h2></div>
//             <div><img src="/images/clothing-ethnic.jpg" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/clothing-ethnic.jpg",
//             size:"saree",
//             price:"₹799",
//             review:"good",
//            })
//            }
//            >Add</button></h2></div>
//             <div><img src="/images/Designer_Saree.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/Designer_Saree.webp",
//             size:"saree",
//             price:"₹2999",
//             review:"good",
//            })
//            }
//            >Add</button></h2></div>
//         </div>
//         <h2>Trending Collections</h2>

//          <div className="img-women">
//             <div><img src="public\images\gettyimages-.jpg" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"",
//             size:"saree",
//             price:"₹2999",
//             review:"good",
//            })
//            }
//            >Add</button></h2></div>
//             <div><img src="public\images\COTTON_.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"",
//             size:"",
//             price:"",
//             review:"",
//            })
//            }
//            >Add</button></h2></div>
//             <div><img src="public\images\cdfcg_512.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"",
//             size:"",
//             price:"",
//             review:"",
//            })
//            }
//            >Add</button></h2></div>
//             <div><img src="public\images\fasimg.jpg" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"",
//             size:"",
//             price:"",
//             review:"",
//            })
//            }
//            >Add</button></h2></div>
//         </div>

//          {/* <div className="img-women">
//             <div><img src="" alt="blank"/><h2>Buy Now <button>Add</button></h2></div>
//             <div><img src="" alt="blank"/><h2>Buy Now <button>Add</button></h2></div>
//             <div><img src="" alt="blank"/><h2>Buy Now <button>Add</button></h2></div>
//             <div><img src="" alt="blank"/><h2>Buy Now <button>Add</button></h2></div>
//         </div> */}
//         </div>
        
//     );
// }