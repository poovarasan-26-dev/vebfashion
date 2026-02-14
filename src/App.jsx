import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./assets/pages/Login";
import Signin from "./assets/pages/Signin";
import Admin from "./assets/pages/Admin";

import Home from "./assets/pages/Home";
import Menu from "./assets/pages/Menu";
import Product from "./assets/pages/Product";
import Contact from "./assets/pages/Contact";
import Kids from "./assets/pages/Kids";
import Kidsdetail from "./assets/pages/Kidsdetail";
import Mens from "./assets/pages/Mens";
import Mendetail from "./assets/pages/Mendetail";
import Womens from "./assets/pages/Womens";
import Womendetail from "./assets/pages/Womendetail";
import Success from "./assets/pages/Success";

import "./App.css";

function App() {
  // const [savedUser, setSavedUser] = useState(()=>{
  //    const user = localStorage.getItem("savedUser");
  //    return user ? JSON.parse(user):null;
  // });

  // useEffect(() => {
  //   if(savedUser){
  //   localStorage.setItem("savedUser",JSON.stringify(savedUser));
  // }
  // else{
  //   localStorage.removeItem("savedUser");

  // }
  // },[savedUser])
 

  return (
    <div>
    
      <header className="header">
        <div className="logo">
          <img src="/images/P V r (1).png" alt="logo" />
        </div>

        <nav className="header-button">
            
              <Link to="/Home"><button>Home</button></Link>
              <Link to="/menu"><button>Menu</button></Link>
              <Link to="/product"><button>Product</button></Link>
              <Link to="/contact"><button>Contact</button></Link>
          
        </nav>
      </header>

      {/* ROUTES */}
      <Routes>
         <Route
          path="/"
          element= {<Login />}/>
        

        <Route
          path="/signin"
          element={<Signin/>}

        />

      <Route
        path="/admin"
        element={<Admin/>}/>

      <Route
        path="/Home"
        element={<Home/>}/>

      <Route
        path="/menu"
        element={<Menu/>}/>
        
      <Route
        path="/product"
        element={<Product/>}/>
        
      <Route
        path="/contact"
        element={<Contact/>}/>
        
      <Route
        path="/kids"
        element={<Kids/>}/>
        
      <Route
        path="/kidsdetail"
        element={<Kidsdetail/>}/>

      <Route
        path="/mens"
        element={<Mens/>}/>

      <Route
        path="/mendetail"
        element={<Mendetail/>}/>

      <Route
        path="/womens"
        element={<Womens/>}/>

      <Route
        path="/womendetail"
        element={<Womendetail/>}/>

      <Route
        path="success"
        element={<Success/>}/>
      </Routes>
        



       
      
       <footer className="footer">
        <div className="footer-logo">
          <img src="/images/P V r (1).png" alt="footer-logo" />
        </div>

        <div className="footer-col">
          <h2>Collections</h2>
          <p ><a href="/mens">Mens Wear</a></p>
          <p><a href="/womens">Womens Wear</a></p>
          <p><a href="/kids">Kids Wear</a></p>
        </div>

        <div className="footer-par">
          <h2>Address</h2>
          <p>23, Veeramamunivar St,</p>
          <p>Teachers Colony,</p>
          <p>Erode - 638011</p>
          <p>Phone: +91-6379636564</p>
          <p>Email: contact@erospark.in</p>
        </div>
      </footer>

      <p className="footer-last">
        <hr />
        © 2025 Eroskillup All Rights Reserved
      </p> 
    </div>
  );
}

export default App;
 