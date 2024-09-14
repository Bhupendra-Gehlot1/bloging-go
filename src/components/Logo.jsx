import React from "react";
import  image  from "../assets/Logo.png";

function Logo({width = "100px"}) {
  return (
    <div className="w-full h-full p-4 m-2 bg-transparent">
      <img src={image}  style={{ width: width }}/>
    </div>
  );
}

export default Logo;
