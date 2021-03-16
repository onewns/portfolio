import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import Wrapper from '../Wrapper';
import IconsBuilder from '../Icon';


const AboutWrapper = styled(Wrapper)`
  margin-top: 3rem;
`

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

function About( { profile }:any): React.ReactElement {
  const Icons = profile.techStacks.map((icon:string, index:number):any => <IconsBuilder key={index} src={icon} height='60px' />)
  return (
    <AboutWrapper>
      <img src="me.jpg" alt="me" style={{width:"40%"}}/>
      <div style={{display:'inline-block', width:"40%"}}>
        <Text as='h4' width="100%">
          {profile.title}
        </Text>
        <IconContainer>
          {Icons}
        </IconContainer>
      </div>
    </AboutWrapper>
  )
}

export default About