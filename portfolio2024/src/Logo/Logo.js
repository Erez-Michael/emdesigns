import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Logo = ({ className }) => {
  const [scale, setScale] = useState("1.2");

  // When the user scrolls down 50px from the top of the document, resize logo
  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 50) {
        setScale("0.6");
      } else {
        setScale("1.2");
      }
    };

    window.addEventListener("scroll", scrollFunction);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const style = {
    transition: "1s",
    transform: `scale(${scale})`, // Apply dynamic scale
  };

  return (
    <Container id="logo" style={style} className={className}>
      <Wrapper className="logo">
        <Logos style={style}>
          <div>
            <h2>EM</h2>
            <h2>EM</h2>
            <h3>DESIGN.</h3>
          </div>
        </Logos>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 999 !important;
  font-weight: 900;
  cursor: crosshair;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  @media screen and (max-width: 767px) {
    transform: scale(0.7);
  }
  img {
    height: 60px;
  }
`;

const Logos = styled.div`
  /* border: solid red 2px; */

  position: fixed;
  top: 3%;
  left: 3%;
  height: 8vh;
  display: flex;
  justify-content: flex-start;
  font-size: 3rem;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    left: 5%;
    width: 30%;
    transform: scale(0.8);
  }
  @media screen and (max-width: 400px) {
    transform: scale(0.6);
  }

  div {
    display: flex;
    flex-direction: column;
  }
  h3 {
    color: #fde61e;
    font-size: 24px;
    margin-top: -100px;
    margin-left: 15px;
  }
  h2 {
    background-color: transparent;
  }
  /* ///////// Double wave animation //////////*/
  div h2:nth-child(1) {
    cursor: crosshair;
    background-image: linear-gradient(45deg, #fdb731, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  div h2:nth-child(2) {
    cursor: crosshair;
    color: #364853;

    transform: translate(0, -90px);
    animation: animate 4s ease-in-out infinite;
  }
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`;

export default Logo;
