import React from 'react'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection, Technologies } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About</Title>
    <Paragraph type="main">
      I am a Full Stack Developer in training at EBAC, with solid experience in
      mechanical engineering and process analysis. Throughout my career, I have
      developed an analytical, results-oriented profile, combined with quick
      learning and ease in working with multidisciplinary teams.
    </Paragraph>
    <Technologies>
      <p>Front-end:</p>
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
      <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
      <img src="https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" />
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
    </Technologies>
    <Technologies>
      <p>Back-end:</p>
      <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
      <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
      <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />
    </Technologies>
    <Technologies>
      <p>Tools:</p>
      <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
      <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
      <img src="https://img.shields.io/badge/Gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white" />
      <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
    </Technologies>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=gustavokasaki&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gustavokasaki&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
