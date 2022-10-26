import React from "react";
import Logout from "./logout";
import {motion} from 'framer-motion'

const Nav = () => {

  const render = ()=>{
    if (window.sessionStorage.getItem('loggedAppUser')!="{}"){
        return(
            Logout()
         )
    }else{
        return(
            <div></div>
        )
    }    
}

  return (
    <motion.div
    initial={{ width:  0 }}
    animate={{  width:  "100%" }}
    exit={{ width: window.innerWidth, duration: 2}}
    >
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Asistance Control
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="product">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="private">
                Private
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home">
               List of User
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="add">
               Add User
              </a>
            </li>
          </ul>
        </div>
        {
            render()
           }
      </div>
    </nav>
    </motion.div>
  );
};

export default Nav;
