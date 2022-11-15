import React from "react";
import carlbotImage from "./../img/batmancarl.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={carlbotImage} alt="An image of Batman CarlBot" />
    </React.Fragment>
  );
}

export default Header;