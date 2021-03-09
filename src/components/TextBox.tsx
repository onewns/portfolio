import styled from 'styled-components';


interface TextBoxPropsType {
  margin?: string,
  width?: string,
};

const TextBox = styled.div<TextBoxPropsType>`
  display: inline-block;
  width: ${props => props.width ? props.width : ''};
  margin: ${props => props.margin ? props.margin : ''};
`

export default TextBox