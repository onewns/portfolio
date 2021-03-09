import styled from "styled-components";
import ImageBox from './ImageBox';
import Text from './Text';

interface CardPropsType {
  ImgUrl: string,
  ImgWidth: string, 
  ImgHeight: string,
  TextWidth: string,
  text: string,
}

const Card = styled.div`
  position: relative;
  min-width: 360px;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  width: 15rem;
  height: auto;
  margin: 1rem;
`

const Img = styled.img`
  width: 100%;
  height: 50%;
`

const CardBody = styled.div`
  padding: 1rem 1rem;
`

function card( { ImgWidth, ImgHeight, TextWidth, text, ImgUrl }: CardPropsType ) {
  return (
    <Card>
      <Img src={ImgUrl} />
      <CardBody>
        <Text width={TextWidth}>{text}</Text>
      </CardBody>
    </Card>
  )
}


export default card