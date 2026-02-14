import { useEffect,useRef,useState} from "react";
import { useNavigate,Link } from "react-router-dom";
export default function Home(){
    const images=["/images/sample.png",
        "/images/Your paragraph text.png",
        "/images/Your paragraph text (1).png",
        "/images/Your paragraph text (2).png",
        ];
        const navigate =useNavigate();
    const[index,setIndex]=useState(0);
    const timerRef=useRef(null);


    const logout=()=>{
        localStorage.removeItem("loggedUser");
        navigate("/Login");
        
    };

    useEffect (()=>{
        timerRef.current=setInterval(()=>{
            setIndex((prev)=>(prev+1)%images.length);

        },2000);
        return ()=>clearInterval(timerRef.current)
    })
    return(
        <div className="banner">
            <img src={images[index]} alt="banner"/>
            <div className="conten">
                <h2>Discover Your Perfect Style</h2>
                <p>Explore the latest trends in women’s and men’s fashion. Premium quality dresses designed to make you look elegant and confident every day.</p>
               

            </div>

            <div className="container">
                <div><img src="/images/kidscor.webp" alt="kidslo"></img>
                <h2>50% Offer<Link to="/kids"><button>Buy Now</button></Link></h2></div>
                 <div><img src="/images/prisho-blog-3.webp" alt="logos"></img><h2>40% Offer<Link to="/womens"><button>Buy Now</button></Link></h2></div>
                  <div><img src="/images/smalban.jpg" alt="boylo"></img><h2>55% Offer <Link to="/mens"><button>Buy Now</button></Link></h2></div>
            </div> 
        </div>
    );
}