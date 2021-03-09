import styled from "styled-components";
import ImageBox from './ImageBox';
import TextBox from './TextBox';

interface CardPropsType {
  ImgWidth: string, 
  ImgHeight: string,
  TextWidth: string,
  text: string,
}

const Card = styled.div`
  width: 23%;
  margin: 2%;
  height: 400px;
  display: inline-block;
  background-color: red;
`

function card( { ImgWidth, ImgHeight, TextWidth, text }: CardPropsType ) {
  return (
    <Card>
      <ImageBox width={ImgWidth} height={ImgHeight} ImgUrl='GitHub.png' />
      <TextBox width={TextWidth}>{text}</TextBox>
    </Card>
  )
}


export default card