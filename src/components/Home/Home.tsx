import React from 'react';
import styled from 'styled-components';
import ImageBox from '../ImageBox';
import TextBox from '../TextBox';


const HomeWrapper = styled.section`
  background-color: rgb(123, 134, 90);
`



function Home(): React.ReactElement {
  return (
    <HomeWrapper>
      <ImageBox width="30%" height="400px" ImgUrl="GitHub.png" />
      <TextBox width="30%">
        소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개
        소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개
        소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개
      </TextBox>
    </HomeWrapper>
  )
}

export default Home