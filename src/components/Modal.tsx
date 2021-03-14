import styled from "styled-components"

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

interface modalPropsType {
  data?: any,
  onClick?: any
}


function Modal( {data, onClick } : modalPropsType) {
  console.log(typeof(onClick))
  const Icons = data.icons.map((icon:string, index:number) :any => 
      <img key={index} src={icon} style={{
        height:'50px',
        borderRadius: '4px',
        border: '1px',
        margin: '2px'
      }} alt="" />)
  return (
    <ModalOutside onClick={(event) => {
      if (event.target === event.currentTarget) {
        onClick(false);
        document.querySelector('body')?.classList.remove('not-scroll')
      }
    }}>
      <ModalWrapper>
        <button onClick={() => {onClick(false)
        document.querySelector('body')?.classList.remove('not-scroll')
        
        }}>닫기</button>
        <img src={data.imgUrl} style={{width:'100%'}} alt="" />
        <h2>{data.title}</h2>
        <p>{data.date.start} ~ {data.date.end}</p>
        {Icons}
        <p>{data.text}</p>
        <a href={data.repoUrl} target='_blank'><button>repo</button></a>
      </ModalWrapper>
    </ModalOutside>
  )
}


export default Modal