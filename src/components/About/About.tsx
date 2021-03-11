import React from 'react';
import styled from 'styled-components';
import ImageBox from '../ImageBox';
import Text from '../Text';
import Wrapper from '../Wrapper';


const AboutWrapper = styled(Wrapper)`
  margin-top: 3rem;
`



function About(): React.ReactElement {
  return (
    <AboutWrapper>
      <img src="me.jpg" alt="me"/>
      <Text width="30%">
        About me
      <div className="icons">
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
        <ImageBox width="40px" height="40px" ImgUrl="GitHub.png" />
      </div>
      </Text>
    </AboutWrapper>
  )
}

export default About