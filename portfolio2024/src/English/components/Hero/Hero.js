import React from "react";
import styled from "styled-components";
import Logo from "../../../Logo/Logo"

const Hero = () => {
  return (
    <HeroSection>
      <HeroImage></HeroImage>
      <Wrapper>
        <Wrapper className="logo">
       <Logo />
        </Wrapper>
      </Wrapper>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  position: fixed;
  width: 100%;
`;

const HeroImage = styled.div`
  height: 100vh;
  background-color: #272b30;
`;

const Wrapper = styled.div`
  .logo {
    position: absolute;
    top: 0%;
    left: 25%;
    z-index: 1;
    margin: auto;
    animation: logo ease-in-out 10s;
    opacity: 0;
  }

  .logo svg {
    width: inherit;
  }

  /* Scale the logo down and maintain it centered */
  @keyframes logo {
    0% {
      width: 1em;
      transform: scale(2);
      opacity: 0.5;
    }
    50% {
      opacity: 0.5;
      width: 1em;
    }
    100% {
      opacity: 0;
      transform: scale(20);
      width: 1em;
    }
  }
`;

export default Hero;
