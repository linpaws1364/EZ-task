import React from "react";
import ez from '../assets/ez.jpg'
import "../styles/SideLogobar.css";

function SideLogoBar() {
  return (
    <div className="sidelogobar">
      <div className="ez">
        <img style={{marginBottom:'20px'}} src={ez} className='logo'/>
      </div>
      <div className="pinkBox"></div>
      <div className="pinkBox"></div>
      <div className="pinkBox"></div>
    </div>
  );
}

export default SideLogoBar;
