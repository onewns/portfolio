import styled from 'styled-components';


interface ImageBoxPropsType {
  ImgUrl?: string,
  width?: string,
  height?: string,
  radius?: boolean,
}


const ImageBox = styled.div<ImageBoxPropsType>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url('${props => props.ImgUrl}');
  background-size: cover;
  background-position: center;
  display: inline-block;
  border-radius: ${props => props.radius ? '100%': ''};
`

export default ImageBox