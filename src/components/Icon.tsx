import styled from 'styled-components';

const Icon = styled.img`
  height: ${(props) => props.height};
  border-radius: 4px;
  margin: 5px 7px;
`

function iconsBuilder({height, src}: any) {
  return (
    <Icon src={src} height={height} />
  )
}

export default iconsBuilder