import React from 'react'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About</Title>
    <Paragraph type="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nemo
      laboriosam amet sunt mollitia, eius blanditiis repellat tempore sed, velit
      cum facilis nihil! Incidunt dicta delectus nihil, sed nemo magni!
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=gustavokasaki&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gustavokasaki&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
