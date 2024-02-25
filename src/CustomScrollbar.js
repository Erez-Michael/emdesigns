import React from "react";
import { createGlobalStyle } from "styled-components";

const CustomScrollbar = () => {
  return <ScrollbarStyles />;
};

const ScrollbarStyles = createGlobalStyle`
  /* Works for Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 20px; /* width of the entire scrollbar */
  background-image: linear-gradient(45deg, #fdb731, #f3ec78);

  }

  ::-webkit-scrollbar-track {
  background: #272B30;
  
  }

  ::-webkit-scrollbar-thumb {
  background-image: linear-gradient(45deg, #fdb731, #f3ec78);
    border-radius: 20px; /* roundness of the scroll thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: transparent; /* color of the scroll thumb on hover */
    border: solid 1px yellow;
    
  }

`;


export default CustomScrollbar;
