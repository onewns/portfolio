import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import ImageBox from '../ImageBox';
import BaseButton from '../BaseButton';
import Wrapper from '../Wrapper';
import { Link } from 'react-router-dom';


const Icon = styled(ImageBox)`
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 300px;
  max-height: 300px;
`

const HomeWrapper = styled(Wrapper)`
  width: auto;
  height: 100vh;
  padding: 0 10%;
`

const IconWrapper = styled(Wrapper)<any>`
  height:100vh;
  position: relative;
  display:${props => props.isVisible ? 'flex' : 'none'};
  justify-content: space-evenly;
  align-items: center;
`


const DetailButton = styled(BaseButton)<any>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${props => props.isVisible ? 'none' : ''};
  background: black;
  color: white;
  font-size: 50px;
  width: auto;
  &:hover {
    background: white;
    color: black;
  }
`


function Home(): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <HomeWrapper>
      <DetailButton onClick={() => { setIsVisible(true) } } isVisible={isVisible}>Click Me</DetailButton>
      <IconWrapper isVisible={isVisible}>
        <Link to='/projects'>
          <Icon ImgUrl="projects.png" width="30vw" height="30vw"/>
          <p>Projects</p>
        </Link>
        <a href="https://github.com/wonjun9090" target="_blank">
          <Icon ImgUrl="GitHub.png" width="30vw" height="30vw"/>
          <p>My GitHub</p>
        </a>
        <Link to='/about'>
          <Icon ImgUrl="about.png" width="30vw" height="30vw"/>
          <p>About Me</p>
        </Link>
      </IconWrapper>
    </HomeWrapper>
  )
}


export default Home