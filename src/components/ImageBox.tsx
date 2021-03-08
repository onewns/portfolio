import styled from 'styled-components';


interface ImageBoxPropsType {
  ImgUrl?: string
}


const ImageBox = styled.div<ImageBoxPropsType>`
  width: 50px;
  height: 50px;
  background-image: url('${(props) => props.ImgUrl}');
  background-size: cover;
  display: inline-block;
  border-radius: 100%;
`

export default ImageBox