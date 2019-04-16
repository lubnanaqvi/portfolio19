import React from 'react';
import styled from 'styled-components';
const ProjectHeading = ({ title }) => {
  const StyledHeading = styled.h2`
    transform: rotate(-90deg);
    position: relative;
    top: 150px;
    left: -220px;
    color: #2e2b24;
  `;
  return <StyledHeading>{title}</StyledHeading>;
};
export default ProjectHeading;
