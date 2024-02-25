import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentRow = styled.div`
  display: flex;
  margin: 200px -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: -50px;
  }
  `;

export const ContentColumn = styled(motion.div)`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > img {
    width: 300px;
    margin-left: -3px;
  }
`;

export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: "flex-end";
  max-height: 700px;
  justify-content: center;
  position: relative;
  z-index: -1;
`;

export const StyledMap = styled(motion.div)`
  width: 40vw;
  height: 50vh;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const TopLine = styled(motion.div)`
  font-size: 0.9rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color:whitesmoke;
`;

export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  max-width: 80%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  z-index: 1;
`;


export const Heading = styled(motion.h2)`
  background-image: linear-gradient(45deg, #fdb731, #f3ec78);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ inverse }) => (inverse ? "#FDE61E" : "whitesmoke")};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled(motion.p)`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  color: ${({ inverse }) => (inverse ? "white" : "#979797")};
`;



export const ContentButton = styled(motion.button)`
  /* Positioning */
  position: relative;
  overflow: hidden;

  /* Box Model */
  height: 3rem;
  border-radius: 6px;
 

  /* Typography */
  font-weight: 700;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  color: ${({ inverse }) => (inverse ? "#0c4577" : "white")};

  /* Visual */
  background: none;
  cursor: pointer;
  white-space: nowrap;
  outline: none;

  /* Pseudo-elements & Interactions */
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 0%;
    background: ${({ inverse }) => (inverse ? "#FDE61E" : "#FDE61E")};
    opacity: 0.5;
    transform: translate(-50%, -50%) rotate(45deg);
    z-index: -1;
    transition: all 0.25s ease;
  }

  &:hover:before {
    height: 500%;
  }
`;

