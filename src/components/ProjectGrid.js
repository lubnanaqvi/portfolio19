import React from 'react';
import styled from 'styled-components';
import projects from '../projects.json';
import ProjectLink from './ProjectLink';
import gridLayout from '../gridLayout.json';
import AnimatedName from './AnimatedName';

const ProjectGrid = () => {
  const projectsList = projects.map((p, i) => {
    if (p.title === 'Me') return <AnimatedName grid={gridLayout[i]} />;
    return <ProjectLink projectData={p} key={i} grid={gridLayout[i]} />;
  });

  const StyledGrid = styled.div`
    height: 500px;
    width: 500px;
    display: grid;
    position: relative;
    border: solid 1px black;
    grid-template-columns: 1fr 35px 1fr 1fr 1fr 20px 20px 1fr 1fr 1fr;
    grid-template-rows: 1fr 25px 1fr 1fr 1fr 20px 1fr 15px 1fr 30px;
    background-color: #fa7268;
    color: white;
  `;
  return (
    <div>
      <StyledGrid>{projectsList}</StyledGrid>
    </div>
  );
};
export default ProjectGrid;
