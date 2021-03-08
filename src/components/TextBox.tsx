import styled from 'styled-components';


interface TextBoxPropsType {
  width?: string,
}

const TextBox = styled.div<TextBoxPropsType>`
  display: inline-block;
  width: ${props => props.width ? props.width : ''};
  margin: 20px;
`

export default TextBox