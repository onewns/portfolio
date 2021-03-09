import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import Card from '../Card';


const ProjectsWrqpper = styled(Wrapper)`
`

const Title = styled.h1`
  margin: 2rem 0;
`


const CardWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`


function Projects(): React.ReactElement {
  return (
    <ProjectsWrqpper>
      <Title>My Projects</Title>
      <CardWrapper>
        <Card ImgWidth="100%" ImgHeight="50%" TextWidth="100%" text="프로젝트 설명" ImgUrl="Tailor.png"/>
        <Card ImgWidth="100%" ImgHeight="50%" TextWidth="100%" text="프로젝트 설명" ImgUrl="UWantBeer.jpg"/>
        <Card ImgWidth="100%" ImgHeight="50%" TextWidth="100%" text="프로젝트 설명" ImgUrl="FaceOFF.png"/>
      </CardWrapper>
    </ProjectsWrqpper>
  )
}


export default Projects