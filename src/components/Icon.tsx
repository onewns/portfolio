import styled from 'styled-components';

const Img = styled.img`
  height: ${(props) => props.height};
  border-radius: 4px;
`

function Icon({height, src}: any) {
  return (
    <Img src={src} height={height} />
  )
}

export default Icon