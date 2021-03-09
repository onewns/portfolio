import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import Card from '../Card';


const ProjectsWrqpper = styled.div`
  background-color: rgb(28, 191, 123);
`


function Projects(): React.ReactElement {
  return (
    <ProjectsWrqpper>
      <Text>인사인사인사</Text>
      <div>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="프로젝트 설명"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="프로젝트 설명"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="프로젝트 설명"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="프로젝트 설명"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="프로젝트 설명"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="프로젝트 설명"/>

      </div>
    </ProjectsWrqpper>
  )
}


export default Projects