import { useNavigate } from "react-router-dom";

export default function Mens() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      img: "/images/WhatsApp-Image.webp",
      alt:"blank",
      name: "Mens Wear",
      description: "Modern casual style, suitable for office and daily use",
      ages: {
        "S": { price: "₹459", rating: "⭐⭐⭐⭐☆", review: "Classic collar for a smart appearance" },
        "L": { price: "₹530", rating: "⭐⭐⭐⭐⭐", review: "Very comfortable" },
        "M": { price: "₹599", rating: "⭐⭐⭐⭐☆", review: "Modern casual style" },
         "XL": { price: "₹620", rating: "⭐⭐⭐⭐☆", review: "gives a neat and stylish look" },
      },
    },

    {
      id: 2,
      img: "/images/istockphoto.jpg",
      alt:"blank",
      name: "Mens Wear",
      description: "Light blue – clean, calm, and professional look",
      ages: {
         "S": { price: "₹450", rating: "⭐⭐⭐⭐☆", review: "looks smooth and breathable" },
        "L": { price: "499", rating: "⭐⭐⭐⭐⭐", review: "Regular to slim fit – gives a sharp, office-ready appearance" },
        "M": { price: "540", rating: "⭐⭐⭐⭐☆", review: "suitable for tie or open-collar style" },
         "XL": { price: "699", rating: "⭐⭐⭐⭐☆", review: "Standard length – can be worn tucked in or out" },
      },
    },

    {
      id: 3,
      img: "/images/deep-rust-flatlay.webp",
      alt:"blank",
      name: "Mens Wear",
      description: "Deep rust / chocolate brown – rich, classy, and premium look",
      ages: {
        "S": { price: "₹530", rating: "⭐⭐⭐⭐", review: "Full sleeves with clean buttoned cuffs" },
        "L": { price: "579", rating: "⭐⭐⭐⭐⭐", review: "Structured classic collar" },
        "M": { price: "599", rating: "⭐⭐⭐⭐☆", review: "works well for both formal and casual wear " },
         "XL": { price: "619", rating: "⭐⭐⭐⭐☆", review: "Standard length – can be worn tucked in or out" },
      },
    },

    {
      id: 4,
      img: "/images/shirt_3off.avif",
      alt:"blank",
      name: "Mens Wear",
      description: "Soft light blue – fresh, clean, and professional look",
      ages: {
        "S": { price: "₹439", rating: "⭐⭐⭐⭐☆", review: "gives a neat and modern appearance" },
        "L": { price: "₹499", rating: "⭐⭐⭐⭐⭐", review: "uitable for tie or open-collar style" },
        "M": { price: "₹520", rating: "⭐⭐⭐⭐☆", review: "Classic spread collar" },
         "XL": { price: "₹599", rating: "⭐⭐⭐⭐☆", review: "can be worn tucked in or untucked" },
      },
    },

    {
      id: 5,
      img: "/images/Trouserpant.webp",
      alt:"blank",
      name: "Mens Wear",
      description: "Men’s Formal / Smart Casual Trousers",
      ages: {
        "30": { price: "₹699", rating: "⭐⭐⭐⭐⭐☆", review: "High-waist tailored trousers" },
        "32": { price: "₹999", rating: "⭐⭐⭐⭐⭐", review: "Slim–tailored fit (clean lines, not tight)" },
        "34": { price: "₹1,199", rating: "⭐⭐⭐⭐☆", review: "Button fastening with belt loops" },
        "36": { price: "1,499", rating: "⭐⭐⭐⭐☆", review: "Pleated front for comfort and classy appearance" },
      },
    },

    {
      id: 6,
      img: "/images/pantsw.webp",
      alt:"blank",
      name: "Mens Wear",
      description: "Men’s Printed Slim-Fit Pants",
      ages: {
         "30": { price: "₹899", rating: "⭐⭐⭐⭐⭐☆", review: "Unique all-over print (not plain Pants)" },
        "32": { price: "₹999", rating: "⭐⭐⭐⭐⭐", review: "Slim–tailored cut" },
        "34": { price: "₹1,199", rating: "⭐⭐⭐⭐☆", review: "Suitable for party / casual-formal wear" },
        "36": { price: "1,299", rating: "⭐⭐⭐⭐☆", review: "Premium look compared to regular formal pants" },
      },
    },

    {
      id: 7,
      img: "/images/lookpants.webp",
      alt:"blank",
      name: "Mens Wear",
      description: "Men’s Slim-Fit Formal Pants",
      ages: {
         "29": { price: "₹899", rating: "⭐⭐⭐⭐⭐☆", review: "modern, clean, and versatile" },
        "30": { price: "₹999", rating: "⭐⭐⭐⭐⭐", review: "sharp look, leg-tapered (not tight)" },
        "32": { price: "₹1,159", rating: "⭐⭐⭐⭐☆", review: "Flat front (no pleats) for a neat finish" },
        "34": { price: "1,299", rating: "⭐⭐⭐⭐☆", review: "Button closure with zip fly" },
      },
    },

    {
      id: 8,
      img: "/images/jeenpan.jpg",
      alt:"blank",
      name: "Mens Wear",
      description: "Men’s Blue Denim Jeans",
      ages: {
         "30": { price: "₹899", rating: "⭐⭐⭐⭐☆", review: "Blue & dark blue wash" },
        "32": { price: "₹999", rating: "⭐⭐⭐⭐⭐", review: "Casual denim jeans" },
        "34": { price: "₹1,159", rating: "⭐⭐⭐⭐☆", review: "Slim fit / Tapered fit" },
        "36": { price: "1,299", rating: "⭐⭐⭐⭐⭐☆", review: "Full length (ankle fold shown for style)" },
      },
    },

    {
      id: 9,
      img: "/images/product-jpeg.webp",
      alt:"blank",
      name: "Mens T-Shirt Collections",
      description: "Soft cotton Mens wear",
      ages: {
        "S": { price: "₹369", rating: "⭐⭐⭐⭐☆", review: "Modern casual style" },
        "L": { price: "₹469", rating: "⭐⭐⭐⭐⭐", review: "Very comfortable" },
        "M": { price: "₹569", rating: "⭐⭐⭐⭐☆", review: "gives a neat and stylish look" },
        "XL": { price: "₹669", rating: "⭐⭐⭐⭐☆", review: "Good quality" },
      },
    },

    {
      id: 10,
      img: "/images/printed-men-sport-.avif",
      alt:"blank",
      name: "Mens T-Shirt Collections",
      description: "Soft cotton Mens wear",
      ages: {
       "S": { price: "₹350", rating: "⭐⭐⭐⭐☆", review: "Modern casual style" },
        "L": { price: "₹459", rating: "⭐⭐⭐⭐⭐", review: "Very comfortable" },
        "M": { price: "₹540", rating: "⭐⭐⭐⭐☆", review: "gives a neat and stylish look" },
        "XL": { price: "₹550", rating: "⭐⭐⭐⭐☆", review: "Good quality" },
      },
    },

    {
      id: 11,
      img: "/images/tshirt.webp",
      alt:"blank",
      name: "Mens T-Shirt Collections",
      description: "Soft cotton Mens wear",
      ages: {
        "S": { price: "₹369", rating: "⭐⭐⭐⭐⭐☆", review: "Nice for cotton" },
        "L": { price: "₹420", rating: "⭐⭐⭐⭐", review: "Very comfortable" },
        "M": { price: "₹469", rating: "⭐⭐⭐⭐☆", review: "Good quality" },
         "XL": { price: "₹499", rating: "⭐⭐⭐⭐⭐☆", review: "Good quality" },
      },
    },

    {
      id: 12,
      img: "/images/tshit3.webp",
      alt:"blank",
      name: "Mens T-Shirt Collections",
      description: "Soft cotton Mens wear",
      ages: {
        "S": { price: "₹369", rating: "⭐⭐⭐☆", review: "Nice for look" },
        "L": { price: "₹420", rating: "⭐⭐⭐⭐⭐", review: "Very comfortable" },
        "M": { price: "₹469", rating: "⭐⭐⭐⭐☆", review: "Premium Stylish" },
         "XL": { price: "₹499", rating: "⭐⭐⭐⭐⭐☆", review: "Modern casual style" },
      },
    },
];
const handleAdd = (product) => {
    navigate("/Mendetail", { state: product });
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

// export default function Mens(){
//      const navigate=useNavigate();
       
    
//     const handleAdd=(product)=>{
//         navigate("/Mendetail",{state:product});

//     };

//     return(
//         <div className="men">
//             <h2>Mens  Shirt collections</h2>
//              <div className="img-mens">
//             <div><img src="/images/WhatsApp-Image.webp" alt="blank"/><h2>Buy now  {""}<button onClick={()=>handleAdd({img:"/images/WhatsApp-Image.webp",
//                 name:"Boys colleaction",
//                 size:"S",
//                 price:"₹499",
//                 review:"soft and perfect ",
//                 par:"This is a stylish striped shirt with a white base and vertical navy blue and brown lines. The color combination gives it a clean and modern look.",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
//             <div><img src="/images/istockphoto.jpg" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/istockphoto.jpg", 
//                 name:"Boys colleaction",
//                 size:"S",
//                 price:"₹599",
//                 review:"good collections ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>

//             <div><img src="/images/deep-rust-flatlay.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/deep-rust-flatlay.webp", 
//                 name:"Boys colleaction",
//                 size:"S",
//                 price:"₹499",
//                 review:"soft and perfect ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
        
//             <div><img src="/images/shirt_3off.avif" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/shirt_3off.avif", 
//                 name:"Boys colleaction",
//                 size:"S",
//                 price:"₹499",
//                 review:"soft and perfect ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
        
//         </div>
//         <h2>Mens Pants Collections</h2>

//          <div className="img-mens">
//             <div><img src="/images/Trouserpant.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/Trouserpant.webp", 
//                 name:"Boys pants",
//                 size:"29",
//                 price:"₹699",
//                 review:"soft and perfect ",
//                 par:"The pants feature a high-waist style with a buttoned waistband and neat front pleats. This design adds comfort while maintaining a sharp silhouette.",
//                 Rating:"(4.8/5)",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
//             <div><img src="/images/pantsw.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/pantsw.webp", 
//                 name:"Boys pants",
//                 size:"30",
//                 price:"₹799",
//                 review:"soft and perfect ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
//             <div><img src="/images/lookpants.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/lookpants.webp", 
//                 name:"Boys colleaction",
//                 size:"32",
//                 price:"₹999",
//                 review:"soft and perfect ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
//             <div><img src="/images/jeenpan.jpg" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/jeenpan.jpg", 
//                 name:"Boys colleaction",
//                 size:"32",
//                 price:"₹999",
//                 review:"soft and jeens ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
//         </div>
//         <h2>Mens T-shirt Collections</h2>

//          <div className="img-mens">
//              <div><img src="/images/product-jpeg.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/product-jpeg.webp", 
//                 name:"Boys T-shirt",
//                 size:"38",
//                 price:"₹799",
//                 review:"good t-shirt ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
//             <div><img src="/images/printed-men-sport-.avif" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/printed-men-sport-.avif", 
//                 name:"Boys T-shirt",
//                 size:"32",
//                 price:"₹999",
//                 review:"soft and perfect ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
//             <div><img src="/images/tshirt.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/tshirt.webp", 
//                 name:"Boys T-shirt",
//                 size:"32",
//                 price:"₹399",
//                 review:"soft and good ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
//             <div><img src="/images/tshirt.webp" alt="blank"/><h2>Buy Now {""}<button onClick={()=>handleAdd({img:"/images/tshit3.webp", 
//                 name:"Boys t-shirt",
//                 size:"32",
//                 price:"₹599",
//                 review:"soft cloth ",
//             })
//         }
//           >
//             Add
        
//            </button>
//         </h2>
//         </div>
//         </div>

//         </div>
//     );
// }