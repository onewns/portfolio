import { useState } from "react";
import styled from "styled-components";
import Modal from './Modal';
import Text from './Text';

interface CardPropsType {
  data: any,
}

const CardWrapper = styled.div`
  position: relative;
  min-width: 360px;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  width: 15rem;
  height: auto;
  margin: 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    z-index: 99;
  }
`

const Img = styled.img`
  width: 100%;
`

const CardBody = styled.div`
  padding: 1rem 1rem;
`

function Card( { data }: CardPropsType ) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  return (
    <>
      <CardWrapper>
        <Img src={data.imgUrl} />
        <CardBody>
          <Text as='h5'>{data.title}</Text>
          <Text width='100%'>{data.summary}</Text>
          <button onClick={() => { setIsVisibleModal(true); 
            document.querySelector('body')?.classList.add('not-scroll')}}>view detail</button>
        </CardBody>
      </CardWrapper>
      {isVisibleModal && <Modal data={data} onClick={setIsVisibleModal}/>}
    </>
    
  )
}


export default Card