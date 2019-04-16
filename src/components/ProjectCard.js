import React from 'react';
import ProjectHeading from './ProjectHeading';
import ProjectDesc from './ProjectDesc';
import ProjectTech from './ProjectTech';
import styled from 'styled-components';

const ProjectCard = ({ projectData, isProjectDetailOpen }) => {
  const { title, desc, tech } = projectData;
  const StyledProjectCard = styled.div`
    display: ${isProjectDetailOpen ? 'block' : 'none'};
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50px;
    left: 50px;
    background-color: white;
    color: black;
    border: solid 1px black;
    box-sizing: border-box;
    padding: 2%;
  `;
  return (
    <StyledProjectCard>
      <ProjectHeading title={title} />
      <ProjectDesc desc={desc} />
      <ProjectTech tech={tech} />
    </StyledProjectCard>
  );
};
export default ProjectCard;
