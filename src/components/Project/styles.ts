import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`

export const Button = styled.a`
  color: ${(props) => props.theme.bgColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.btnBgColor};
  text-decoration: none;
  cursor: pointer;
  padding: 8px;
  margin-top: 24px;
  display: inline-block;
`
