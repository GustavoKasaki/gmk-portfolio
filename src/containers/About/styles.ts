import styled from 'styled-components'

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 160px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`
