import React, { useEffect } from "react";
import { NavLink } from "react-router-dom" 
import { Container, HomeSection } from "../../../GlobalStyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn
} from "./ContentStyles.js";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const Content = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
}) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

 const Style = {
   textDecoration: "none",
   color: "whitesmoke",
   padding: "10px 20px",
   background: "#272B30",
 };
  
  const styleTop = {
    marginTop: "200px"
  }


  return (
    <HomeSection inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse} style={styleTop}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.8, duration: 1 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 1, duration: 1.2 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 1.2, duration: 1.4 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              <ContentButton
                initial={initial}
                transition={{ delay: 1.4, duration: 1.6 }}
                animate={animation}
                inverse={inverse}
              >
                <NavLink to="/characters" style={Style}>
                  {buttonLabel}
                </NavLink>
              </ContentButton>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 1.6, duration: 1.8 }}
            animate={animation}
            inverse={inverse}
          >
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </HomeSection>
  );
};
