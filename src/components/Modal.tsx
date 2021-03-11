import styled from "styled-components"

const ModalOutside = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0 , 2, 2, 0.5);
  z-index:999;  
`

const ModalWrapper = styled.div`
  width: 50vw;
  min-width: 360px;
  height: 80vh;
  min-height: 500px;
  background-color: white;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

interface modalPropsType {
  data?: any,
  onClick?: any,
}


function Modal( {data, onClick } : modalPropsType) {
  console.log(onClick)
  return (
    <ModalOutside onClick={(event) => {
      if (event.target === event.currentTarget) {
        onClick(false)
      }
    }}>
      <ModalWrapper>
        {data.title}
      </ModalWrapper>
    </ModalOutside>
  )
}


export default Modal