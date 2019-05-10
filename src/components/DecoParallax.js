import React from 'react';

import styled from 'styled-components';

const DecoParallax = ({ height, width, bgurl }) => {
  const StyledDiv = styled.div`
    background: url(${bgurl});

    background-attachment: fixed;

    background-repeat: no-repeat;

    background-size: cover;

    height: ${height};

    width: ${width};
    margin: 100px auto;
    @media (max-width: ${width}) {
      width: 100%;
    }
  `;

  return <StyledDiv />;
};

export default DecoParallax;
