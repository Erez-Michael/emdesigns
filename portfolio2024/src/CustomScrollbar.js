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
    border-radius: 20px; /* roundness of the scroll thumb */
    border: solid 2px yellow;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-image: linear-gradient(45deg, #fdb731, #f3ec78);
    border: none;
  }

`;


export default CustomScrollbar;
