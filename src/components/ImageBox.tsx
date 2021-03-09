import styled from 'styled-components';


interface ImageBoxPropsType {
  ImgUrl?: string,
  width?: string,
  height?: string,
  radius?: string,
}


const ImageBox = styled.div<ImageBoxPropsType>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url('${props => props.ImgUrl}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  border-radius: ${props => props.radius};
`

export default ImageBox