import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
            <img 
            onClick={
                () => navigate("/", {replace: true})
                    }
            className="nav__logo" src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
            alt='netflix logo'
            />
            <img className="nav__avatar" 
            onClick={() => {
                navigate("/profile", {replace: true});
            }}
             src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
            alt=''
            />
        </div>
    </div>
  )
}

export default Nav
