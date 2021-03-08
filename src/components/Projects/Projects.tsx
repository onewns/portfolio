import React from 'react';
import styled from 'styled-components';
import ImageBox from '../ImageBox';
import TextBox from '../TextBox';
import Card from '../Card';


const ProjectsWrqpper = styled.div`
  background-color: rgb(28, 191, 123);
`


function Projects(): React.ReactElement {
  return (
    <ProjectsWrqpper>
      <TextBox>인사인사인사</TextBox>
      <div>
        <Card>
          <ImageBox width="100%" height="30%" ImgUrl="GitHub.png"/>
          <TextBox>간단소개</TextBox>
        </Card>
        <Card>
          <ImageBox width="100%" height="30%" ImgUrl="GitHub.png"/>
          <TextBox>간단소개</TextBox>
        </Card>
        <Card>
          <ImageBox width="100%" height="30%" ImgUrl="GitHub.png"/>
          <TextBox>간단소개</TextBox>
        </Card>
        <Card>
          <ImageBox width="100%" height="30%" ImgUrl="GitHub.png"/>
          <TextBox>간단소개</TextBox>
        </Card>
        <Card>
          <ImageBox width="100%" height="30%" ImgUrl="GitHub.png"/>
          <TextBox>간단소개</TextBox>
        </Card>
        <Card>
          <ImageBox width="100%" height="30%" ImgUrl="GitHub.png"/>
          <TextBox>간단소개</TextBox>
        </Card>
      </div>
    </ProjectsWrqpper>
  )
}


export default Projects