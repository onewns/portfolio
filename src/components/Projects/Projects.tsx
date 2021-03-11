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


function Projects({ state }: any): React.ReactElement {
  const { projects } = state;
  
  return (
    <ProjectsWrqpper>
      <Title>My Projects</Title>
      <CardWrapper>
        {projects.map((project: any, index: number) => 
          <Card key={index} data={project} />
        )}
      </CardWrapper>
    </ProjectsWrqpper>
  )
}


export default Projects