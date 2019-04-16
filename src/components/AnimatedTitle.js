import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.div`
  font-size: 2em;
  cursor: pointer;
  background-color: #174a45;
  color: white;
  width: 500px;
  transition: transform 1s linear;
  border: solid 1px black;
  &:hover {
    transform: rotate(-90deg) translate(-275px, -275px);
  }
`;
const AnimatedTitle = ({ title }) => <StyledSpan>{title}</StyledSpan>;
export default AnimatedTitle;
