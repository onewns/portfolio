import React from 'react';
import styled from 'styled-components';
import ImageBox from '../ImageBox';
import Text from '../Text';


const AboutWrapper = styled.section`
  background-color: rgb(123, 134, 90);
`



function About(): React.ReactElement {
  return (
    <AboutWrapper>
      <ImageBox width="30%" height="400px" ImgUrl="GitHub.png" />
      <Text width="30%">
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me
        About me        
      </Text>
      <div className="icons">
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
      </div>
    </AboutWrapper>
  )
}

export default About