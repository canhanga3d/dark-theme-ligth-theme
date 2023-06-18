import { MoonStars, SunDim } from "@phosphor-icons/react";
import styled from "styled-components";

export const ThemeToggleButtonContainer = styled.div`
  background: transparent;
  position: absolute;
  top: 18px;
  right: 2px;
  cursor: pointer;
`;

export const Box = styled.div`
  background: transparent;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: transform 600ms ease-in-out;
  &:hover {
    outline: 5px solid rgba(0, 0, 0, 0.5);
  }
  .dark &:hover {
    outline: 5px solid rgba(255, 255, 255, 0.5);
  }
  .dark & {
    transform: rotateY(180deg);
    transition: transform 600ms ease-in-out;
  }
`;

export const Front = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
`;

export const SunIcon = styled(SunDim)`
  width: 100%;
  height: 100%;
  color: #1a1a1a;
`;

export const MoonIcon = styled(MoonStars)`
  width: 100%;
  height: 100%;
  color: white;
`;


export const ThemeOptionsContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;
export const SrOnly = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
