import styled from "styled-components"
import Icon from './Icon';
import BaseButton from './BaseButton';

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
  min-width: 360px;
  background-color: white;
  position: absolute;
  max-height:80vh;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
`

const CloseButton = styled(BaseButton)`
  position: sticky;
  width: auto;
  height: auto;
  border-radius: 100%;
`


function Modal( {data, onClick } : modalPropsType) {
  const Icons = data.icons.map((icon:string, index:number) :any => 
      <Icon key={index} src={icon} height='50px' alt="" />)
  return (
    <ModalOutside onClick={(event) => {
      if (event.target === event.currentTarget) {
        onClick(false);
        document.querySelector('body')?.classList.remove('not-scroll')
      }
    }}>
      <ModalWrapper>
        <h2>{data.title}</h2>
        <img src={data.imgUrl} style={{width:'100%'}} alt="" />
        <p>{data.date.start} ~ {data.date.end}</p>
        {Icons}
        <p style={{whiteSpace: 'pre-wrap'}}>{data.text}</p>
        <a href={data.repoUrl} target='_blank'>
          <BaseButton>전체코드보기</BaseButton>
        </a>
      </ModalWrapper>
    </ModalOutside>
  )
}


export default Modal