import React, { Component } from 'react';
import ProjectGrid from './components/ProjectGrid';
import AnimatedTitle from './components/AnimatedTitle';
import styled from 'styled-components';
import './App.css';

const App = () => {
  const StyledDiv = styled.div`
    margin: auto;
    margin-top: 50px;
    width: 500px;
  `;
  return (
    <StyledDiv>
      <AnimatedTitle title="portfolio-" />
      <ProjectGrid />
    </StyledDiv>
  );
};

export default App;
/*
-header footer logo?
-background image?
-add cv
-add onClick for animatedName to open about me  
-replace slackD with RSVP for now
-add 'this' as project
-make responsive
-npm build and deploy to porfolio on github
*/
