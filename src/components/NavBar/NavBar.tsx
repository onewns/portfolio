import React from 'react';
import ImageBox from '../ImageBox';
import Text from '../Text';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';


interface ContinerPropsType {
  position: string
}

interface NavPropsType {
  isHome: boolean,
}


const Nav = styled.nav<NavPropsType>`
  position: sticky;
  top: 0;
  height: 70px;
  width: 100%;
  background-color:#E8C0FF;
  display: ${props => props.isHome ? 'none' : ''};
  z-index: 10;
`

const Container = styled.div<ContinerPropsType>`
  height: 50px;
  float: ${props => props.position};
`

const NavText = styled(Text)`
  margin: 0px 10px;
  font-size: 20px;
  line-height: 70px;
`

function NavBar({ location }: any) : React.ReactElement {
  console.log('path: ', location)
  return (
    <Nav isHome={location.pathname === '/'}>
      <Container position="left">
        <Link to='/'>
          <NavText>Home</NavText>
        </Link>
        <Link to='/projects'>
          <NavText>Projects</NavText>
        </Link>
        <Link to='/about'>
          <NavText>AboutMe</NavText>
        </Link>
      </Container>
      <Container position="right">
        <a href="https://github.com/wonjun9090" target="_blank">
          <ImageBox radius="100%" width="70px" height="70px" ImgUrl="GitHub.png"/>
        </a>
        <a href="mailto:wonjun9090@naver.com">
          <ImageBox radius="100%" width="70px" height="70px" ImgUrl="mail.png"/>
        </a>
      </Container>
    </Nav>
  )
}

export default withRouter(NavBar)