import React from 'react';
import ImageBox from '../ImageBox';
import TextBox from '../TextBox';
import styled from 'styled-components';


interface ContinerPropsType {
  position: string
}


const Nav = styled.nav`
  height: 50px;
  width: 100%;
  background-color:rgb(245, 242, 212);
`

const Container = styled.div<ContinerPropsType>`
  height: 50px;
  float: ${props => props.position};
`

function NavBar() : React.ReactElement {
  return (
    <Nav>
      <Container position="left">
        <TextBox>Home</TextBox>
        <TextBox>Projects</TextBox>
        <TextBox>Diary</TextBox>
      </Container>
      <Container position="right">
        <ImageBox ImgUrl="GitHub.png"/>
        <ImageBox ImgUrl="mail.png"/>
      </Container>
    </Nav>
  )
}

export default NavBar