import React from 'react'
import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { Description, ThemeBtn, SidebarContainer } from './styles'

type Props = {
  themeChange: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Gustavo Kasaki</Title>
      <Paragraph fontSize={16} type="secondary">
        gustavokasaki
      </Paragraph>
      <Description type="main" fontSize={12}>
        Front-end Developer
      </Description>
      <ThemeBtn onClick={props.themeChange}>Change theme</ThemeBtn>
    </SidebarContainer>
  </aside>
)

export default Sidebar
