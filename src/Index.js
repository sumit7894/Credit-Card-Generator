import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
const Container =()=>{
  return(
    <div className="app">
      <CardBack/>
      <CardFront/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);