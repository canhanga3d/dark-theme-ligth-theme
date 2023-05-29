import { MoonStars, SunDim } from '@phosphor-icons/react';
import styled from 'styled-components';

export const ThemeToggleButton = styled.div`
  background: transparent;
  position: absolute;
  top: 10px;
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
  color: #1A1A1A;
`;

export const MoonIcon = styled(MoonStars)`
  width: 100%;
  height: 100%;
  color: white;
`;
