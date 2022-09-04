// https://javascript.plainenglish.io/animated-text-gradients-with-react-and-styled-components-93891797eaf1

import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

export default function TextGradient() {
  return (
    <>
      <AnimatedGradientText>Sky</AnimatedGradientText>
      <AnimatedGradientText className="bottomtext">Mawle</AnimatedGradientText>
      <AnimatedGradientText className="bottomertext">___________</AnimatedGradientText>
    </>
  );
}

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: 'Lato';
  font-feature-settings: "kern";
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;