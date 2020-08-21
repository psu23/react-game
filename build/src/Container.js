import React from "react";

//Container component for page
const Container = props =>
  <div className= "container" >
    {props.children}
  </div>;

export default Container;