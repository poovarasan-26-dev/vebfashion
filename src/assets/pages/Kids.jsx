import { useNavigate } from "react-router-dom";

export default function Kids() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      img: "/images/babysimg.webp",
      alt:"blank",
      name: "Kids Wear",
      description: "Soft cotton kids wear",
      ages: {
        "0-1": { price: "₹499", rating: "⭐⭐⭐⭐☆", review: "Nice for kids" },
        "1-2": { price: "₹599", rating: "⭐⭐⭐⭐⭐", review: "Very comfortable" },
        "2-3": { price: "₹699", rating: "⭐⭐⭐⭐☆", review: "Good quality" },
      },
    },
    {
      id: 2,
      img: "/images/goodsfel.webp",
      name: "Kids Wear",
      description: "Soft cotton kids wear",
      ages: {
        "0-1": { price: "₹500", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "1-2": { price: "₹699", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
         "2-3": { price: "₹799", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
          "3-4": { price: "₹899", rating: "⭐⭐⭐⭐", review: "Nice for fabric" },
      },
    },

    {
      id: 3,
      img: "/images/imskid1.jpg",
      name: "Kids Wear",
      description: "Soft cotton kids casual wear",
      ages: {
        " 1": { price: "₹699", rating: "⭐⭐⭐⭐⭐☆", review: "Nice for Stylish look" },
        "1-2": { price: "₹799", rating: "⭐⭐⭐⭐", review: " fabric Good quality" },
        "2-3": { price: "₹899", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
        "3-4": { price: "₹999", rating: "⭐⭐⭐⭐☆", review: "Good quality fabric" },
      },
    },

    {
      id: 4,
      img: "/images/ledbabys.avif",
      name: "Kids Wear Casual",
      description: "Trendy Kids casual wear",
      ages: {
        "2": { price: "₹899", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "3": { price: "₹999", rating: "⭐⭐⭐⭐", review: "Premium quality" },
        "4": { price: "₹1199", rating: "⭐⭐⭐☆", review: "good product" },
        "5": { price: "₹1299", rating: "⭐⭐⭐⭐☆", review: "Premium look" },
      },
    },

    {
      id: 5,
      img: "/images/lovelyimgs.avif",
      name: "babys Casual",
      description: "Trendy boys casual wear",
      ages: {
        "3": { price: "₹1299", rating: "⭐⭐⭐⭐⭐☆", review: " Premium Look" },
        "4": { price: "₹1399", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
         "5": { price: "₹1499", rating: "⭐⭐⭐⭐", review: "Stylish look" },
        "6": { price: "₹1599", rating: "⭐⭐⭐⭐☆", review: "good quality" },
      },
    },

    {
      id: 6,
      img: "/images/chils ims.webp",
      name: "Kids Casual",
      description: "Trendy Kids casual wear",
      ages: {
       "3": { price: "₹1199", rating: "⭐⭐⭐⭐⭐☆", review: " Nice color" },
        "4": { price: "₹1299", rating: "⭐⭐⭐⭐☆", review: "Stylish fashion" },
         "5": { price: "₹1399", rating: "⭐⭐⭐⭐", review: "Smooth look" },
        "6": { price: "₹1499", rating: "⭐⭐⭐⭐☆", review: "good cotton" },
      },
    },

    {
      id: 7,
      img: "/images/noyyal-kids-.jpg",
      name: "kids Casual",
      description: "festival kids casual wear",
      ages: {
        "6": { price: "₹1399", rating: "⭐⭐⭐⭐⭐", review: "classic design" },
        "7": { price: "₹1499", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
        "8": { price: "₹1599", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "9": { price: "₹1699", rating: "⭐⭐⭐⭐⭐", review: "good product" },
      },
    },

    {
      id: 8,
      img: "/images/Kurti-Pant-.avif",
      name: "kids Casual",
      description: "Trendy kids casual wear",
      ages: {
        "5": { price: "₹999", rating: "⭐⭐⭐⭐⭐", review: "casual dress" },
        "6": { price: "₹1199", rating: "⭐⭐⭐⭐☆", review: "good quality" },
         "7": { price: "₹1299", rating: "⭐⭐⭐⭐⭐", review: "nice color" },
        "8": { price: "₹1399", rating: "⭐⭐⭐⭐☆", review: "pure cotton" },
      },
    },


    {
      id: 9,
      img: "/images/kids-leather-jacket.webp",
      name: "Boys Casual",
      description: "Trendy boys casual wear",
      ages: {
        "5": { price: "₹1499", rating: "⭐⭐⭐⭐⭐", review: "good leather" },
        "6": { price: "₹1599", rating: "⭐⭐⭐⭐☆", review: "good quality" },
        "7": { price: "₹1699", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "8": { price: "₹1799", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
      },
    },

    {
      id: 10,
      img: "/images/fasimg.webp",
      name: "Boys Casual",
      description: "Trendy boys casual wear",
      ages: {
        "6": { price: "₹999", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "7": { price: "₹1299", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
         "8": { price: "₹1399", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "9": { price: "₹1499", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
      },
    },

    {
      id: 11,
      img: "/images/kids-suit-.webp",
      name: "kids Casual",
      description: "festival kids casual wear",
      ages: {
        "4": { price: "₹1299", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "5": { price: "₹1399", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
        "6": { price: "₹1499", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "7": { price: "₹1599", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
        
      },
    },

    {
      id: 12,
      img: "/images/kurta-pajama-.webp",
      name: "kids Casual",
      description: "Trendy kids casual wear",
      ages: {
        "4": { price: "₹1199", rating: "⭐⭐⭐⭐⭐", review: "festival dress" },
        "5": { price: "₹1299", rating: "⭐⭐⭐⭐☆", review: "nice cotton" },
        "6": { price: "₹1399", rating: "⭐⭐⭐⭐", review: "Stylish color" },
        "7": { price: "₹1499", rating: "⭐⭐⭐⭐⭐☆", review: "Premium fabric" },
      },
    },

    {
      id: 13,
      img: "/images/localboys.avif",
      name: "kids Casual",
      description: "Trendy boys casual wear",
      ages: {
        "4": { price: "₹899", rating: "⭐⭐⭐⭐⭐", review: "normal color" },
        "5": { price: "₹999", rating: "⭐⭐⭐⭐☆", review: "good product" },
        "6": { price: "₹1199", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "7": { price: "₹1299", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
      },
    },

    {
      id: 14,
      img: "/images/-Baby-boy-.webp",
      name: "kids Casual",
      description: "Trendy boys casual wear",
      ages: {
        "5": { price: "₹799", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "6": { price: "₹859", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
         "7": { price: "₹999", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "8": { price: "₹1159", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },

      },
    },

    {
      id: 15,
      img: "/images/dressfot.webp",
      name: "Boys Casual",
      description: "Trendy boys casual wear",
      ages: {
        "5": { price: "₹1499", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "6": { price: "₹1599", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
        "7": { price: "₹1699", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "8": { price: "₹1799", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
      },
    },

    {
      id: 16,
      img: "/images/dressfoot.jpg",
      name: "Boys Casual",
      description: "Trendy boys casual wear",
      ages: {
        "5": { price: "₹1699", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "6": { price: "₹1799", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" },
        "7": { price: "₹1899", rating: "⭐⭐⭐⭐⭐", review: "Stylish look" },
        "8": { price: "₹1999", rating: "⭐⭐⭐⭐☆", review: "Premium fabric" }
      },
    },
    
  ];

  const handleAdd = (product) => {
    navigate("/kidsdetail", { state: product });
  };

  return (
    <div className="kids-container">
      
      {products.map((item) => (
        <div className="kids-img" key={item.id}>
           <h3>{item.name}</h3><img src={item.img} alt="kids" width="200" />
         
          <button onClick={() => handleAdd(item)}>Add now</button>
        </div>
      ))}
    </div>
  );
}



// import{useNavigate} from "react-router-dom";
// export default function Kids() {
//     const navigate=useNavigate();
       
    
//     const handleAdd=(product)=>{
//         navigate("/kidsdetail",{state:product});

//     };
//      return (
//      <div>
//         <h2>Babys collections</h2>
//         <div className="img-kid">
//         <div><img src="/images/babysimg.webp" alt="child"/><h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/babysimg.webp",
//                 name:"Babys collections",
//                 size:"0-1 year",
//                 price:"₹799",
//                 review:"soft & comfortable",
//                 id:"1",
//                 par:"perfect combo",
//                 Rating:"★★★★(4.7/5)"
               
//             })
//         }
//         >Add
//          </button>
//          </h2>
//         </div>

       
           
//         <div>
//             <img src="/images/goodsfel.webp" alt="bobys"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/goodsfel.webp",
//                 name:"Babys collections",
//                 size:"0-1 year",
//                 price:"₹599",
//                 review:"soft & comfortable",
//                 id:"4",
//                 Rating:"★★★★(4.4/5)",
//                 par:"the kids perfect match color"
//             })
//         }
//         >Add
//         </button></h2>
//         </div>
//             <div><img src="/images/imskid1.jpg" alt="vits"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/imskid1.jpg",
//                 name:"Babys collections",
//                 size:"0-1 year",
//                 price:"₹799",
//                 review:"soft & comfortable",
//             })
//         }
//         >Add</button></h2>
//         </div>
//             <div>
//                 <img src="/images/ledbabys.avif" alt="thes"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/ledbabys.avif",
//                 name:"Babys collections",
//                 size:"0-1 year",
//                 price:"₹899",
//                 review:"soft & comfortable",
//             })
//         }
//         >Add</button></h2>
//            </div>
//         </div>
//          <h2>Kids collections</h2>
// <div className="img-kid">

//         <div><img src="/images/lovelyimgs.avif" alt="girls"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/lovelyimgs.avif",
//                 name:"Kids collections",
//                 size:"3-4 year",
//                 price:"₹999",
//                 review:"soft & comfortable",
//             })
//         }
//         >
//             Add
//             </button>
//         </h2>
//         </div>
//            <div>
//             <img src="/images/chils ims.webp" alt="blank"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/chils ims.webp",
//                 name:"Kids collections",
//                 size:"3-4 year",
//                 price:"₹2999",
//                 review:"good cloth",
//             })
//         }
//         >
//             Add
//             </button>
//           </h2>
//         </div>
//            <div>
//             <img src="/images/diwali img.jpg" alt="blank"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/diwali img.jpg",
//                 name:"children collections",
//                 size:"6-7 year",
//                 price:"₹1599",
//                 review:"soft & comfortable",
//             })
//         }
//         >Add</button></h2>
//            </div>
//             <div>
//                 <img src="/images/Kids-Wearims.png" alt="blank"/><h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/Kids-Wearims.png",
//                 name:"Kids collections",
//                 size:"0-1 year",
//                 price:"₹899",
//                 review:"soft & comfortable",
//             })
//         }
//         >
//             Add
//             </button>
//         </h2>
//            </div>
//            </div>
        
        

//                <h2>Kids collections</h2>

        
//          <div className="img-kid">
//              <div><img src="/images/kids-leather-jacket.webp" alt="blank"/><h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/kids-leather-jacket.webp",
//                 name:"Kids collections",
//                 size:"4-5 year",
//                 price:"₹999",
//                 review:"soft & comfortable",
//             })
//         }
//         >Add</button></h2>
//         </div>
//              <div><img src="/images/fasimg.webp" alt="blank"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/fasimg.webp",
//                 name:"Kids collections",
//                 size:"0-1 year",
//                 price:"₹899",
//                 review:"soft & comfortable",
//             })
//         }
//         >Add</button></h2>
//         </div>
//              <div><img src="/images/kids-suit-.webp" alt="blank"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/kids-suit-.webp",
//                 name:"kids wear",
//                 size:"5-6 year",
//                 price:"₹999",
//                 review:"soft & comfortable",
//             })
//         }
//         >Add</button></h2>
//         </div>
//               <div><img src="/images/kurta-pajama-.webp" alt="blank"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/kurta-pajama-.webp",
//                 name:"Boys wear",
//                 size:"4-5 year",
//                 price:"₹999",
//                 review:"soft & comfortable",
//             })
//         }
//         >Add</button></h2>
//         </div>
//         </div>
        

//          <div className="img-kid">
//             <div><img src="/images/localboys.avif" alt="blank"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/localboys.avif",
//                 name:"Boys Collection",
//                 size:"2-3 year",
//                 price:"₹599",
//                 review:"soft & comfortable",
//             })
//         }
//         >Add</button></h2>
//         </div>
//             <div><img src="/images/-Baby-boy-.webp" alt="blank"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/-Baby-boy-.webp",
//                 name:"Boys collection",
//                 size:"2-3 year",
//                 price:"₹899",
//                 review:" comfortable",
//             })
//         }
//         >Add</button></h2>
//         </div>
//             <div><img src="/images/dressfot.webp" alt="blank"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/dressfot.webp",
//                 name:"Boys colleaction",
//                 size:"5-6 year",
//                 price:"₹999",
//                 review:"good cloth",
//             })
//         }
//         >
//             Add
//             </button>
//             </h2>
//         </div>

//         <div><img src="/images/dressfoot.jpg" alt="blank"/> <h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/dressfoot.jpg",
//                 name:"Boys colleaction",
//                 size:"6-7 year",
//                 price:"₹2999",
//                 review:"soft and perfect ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>     
//     </div>
//  </div>
//  );

// }
       
               
   