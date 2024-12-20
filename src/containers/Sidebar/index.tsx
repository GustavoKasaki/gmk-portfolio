import React from 'react'
import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { Description, ThemeBtn, SidebarContainer } from './styles'

const Sidebar = () => (
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
      <ThemeBtn>Change theme</ThemeBtn>
    </SidebarContainer>
  </aside>
)

export default Sidebar
