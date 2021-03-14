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
  height: 50px;
  width: 100%;
  background-color:#E8C0FF;
  display: ${props => props.isHome ? 'none' : ''};
`

const Container = styled.div<ContinerPropsType>`
  height: 50px;
  float: ${props => props.position};
`

function NavBar({ location }: any) : React.ReactElement {
  console.log('path: ', location)
  return (
    <Nav isHome={location.pathname === '/'}>
      <Container position="left">
        <Link to='/'>
          <Text>Home</Text>
        </Link>
        <Link to='/projects'>
          <Text>Projects</Text>
        </Link>
        <Link to='/about'>
          <Text>About</Text>
        </Link>
      </Container>
      <Container position="right">
        <ImageBox radius="100%" width="50px" height="50px" ImgUrl="GitHub.png"/>
        <ImageBox radius="100%" width="50px" height="50px" ImgUrl="mail.png"/>
      </Container>
    </Nav>
  )
}

export default withRouter(NavBar)