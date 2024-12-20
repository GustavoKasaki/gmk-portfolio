import React from 'react'
import Title from '../Title'
import Paragraph from '../Paragraph'
import { Card, Button } from './styles'

const Project = () => (
  <Card>
    <Title>Project 1</Title>
    <Paragraph type="secondary">Project description</Paragraph>
    <Button>View</Button>
  </Card>
)

export default Project
