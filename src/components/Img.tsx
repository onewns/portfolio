import styled from 'styled-components';


interface imgPropsType {
  src: string,
  width?: string,
  height?: string,
}

const Img = styled.img<imgPropsType>`
  width: ${(props) => props.width ? props.width : ''};
  height: ${(props) => props.height ? props.height : ''};
`

export default Img