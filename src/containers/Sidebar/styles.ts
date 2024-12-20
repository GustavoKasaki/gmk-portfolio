import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 12px;
  margin-bottom: 12px;
`

export const ThemeBtn = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.bgColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 32px;
  }
`
