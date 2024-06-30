import React from "react";
import '../App.css'

const Header = () => {
   return(
    <nav id="desktop-nav">
        <div className="logo">Portfolio</div>
        <div>
            <ul className="nav-links">
                <li><a href="#About" onClick={()=>{window.location.href="./#about"}}>About</a></li>
                <li><a href="#Experience" onClick={() => window.location.href='./#experience'}>Experience</a></li>
                <li><a href="#Project" onClick={() => window.location.href='./#projects'}>Project</a></li>
                <li><a href="#Contact" onClick={() => window.location.href='./#contact'}>Contact</a></li>
            </ul>
        </div>
    </nav>
   )
}

export default Header;