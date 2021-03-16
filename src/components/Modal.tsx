import styled from "styled-components"
import IconsBuilder from './Icon';
import BaseButton from './BaseButton';
import Text from './Text';
import Img from './Img';


interface modalPropsType {
  data?: any,
  onClick?: any
}

const ModalOutside = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0 , 2, 2, 0.5);
  z-index:999;  
`

const ModalWrapper = styled.div`
  width: 50vw;
  min-width: 280px;
  max-width: 720px;
  background-color: white;
  position: absolute;
  max-height:80vh;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
`

const LinkButton = styled(BaseButton)`
  width: 80%;
  margin-bottom: 1rem;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  height: 120px;
`;

function Modal( {data, onClick } : modalPropsType) {
  const Icons = data.icons.map((icon:string, index:number) :any => 
      <IconsBuilder key={index} src={icon} height='50px' alt="" />)
  return (
    <ModalOutside onClick={(event) => {
      if (event.target === event.currentTarget) {
        onClick(false);
        document.querySelector('body')?.classList.remove('not-scroll')
      }
    }}>
      <ModalWrapper>
        <Text as='h2'>{data.title}</Text>
        <Img src={data.imgUrl} width='100%' alt="" />
        <Text as='h5'>{data.date.start} ~ {data.date.end}</Text>
        <IconWrapper>
          {Icons}
        </IconWrapper>
        <Text style={{whiteSpace: 'pre-wrap', textAlign:'initial', padding:'1rem'}}>{data.text}</Text>
        <a href={data.repoUrl} target='_blank'>
          <LinkButton>전체코드보기</LinkButton>
        </a>
      </ModalWrapper>
    </ModalOutside>
  )
}


export default Modal