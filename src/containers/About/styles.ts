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

export const Technologies = styled.p`
  img {
    height: 24px;
  }

  p {
    color: ${(props) => props.theme.mainColor};
    font-size: 14px;
    margin-top: 12px;
    margin-bottom: 8px;
    font-weight: bold;
  }
`
