import React from 'react';
import styled from 'styled-components';
import TextBox from '../TextBox';
import Card from '../Card'


const DiaryWrapper = styled.div`
  background-color: rgb(175, 28, 212);
`

function Diary(): React.ReactElement {
  return (
    <DiaryWrapper>
      <TextBox>인사 인사 인사</TextBox>
      <div>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
      </div>
    </DiaryWrapper>
  )
}


export default Diary