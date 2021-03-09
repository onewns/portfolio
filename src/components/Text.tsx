import styled from 'styled-components';


interface TextPropsType {
  margin?: string,
  width?: string,
  height?: string
};

const Text = styled.p<TextPropsType>`
  display: inline-block;
  width: ${props => props.width ? props.width : ''};
  height: ${props => props.height ? props.height : ''};
  margin: ${props => props.margin ? props.margin : ''};
`

export default Text