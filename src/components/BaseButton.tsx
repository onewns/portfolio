import styled from 'styled-components';


const Button = styled.div`
  width: 200px;
  border: 1px solid black;
  padding: 10px;
  color: black;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: white;
    background-color:black;
  }
`

function BaseButton({ onClick, text }: any) {
  return (
    <Button onClick={onClick}>{text}</Button>
  )
}


export default Button