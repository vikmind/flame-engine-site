import styled from "styled-components"

export const FullWidthContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 0.8rem;
`

export const ButtonLink = styled.a`
  font-size: 1.25rem;
  display: block;
  text-decoration: none;
  color: ${props => props.theme.accentColor};
  font-weight: 800;
  border: ${props => (props.border ? "1px" : "0")} solid;
  padding: 0.6em 1.8125em;
  border-radius: 1.575rem;
  display: flex;
  align-items: center;
  ${props => props.mobileOnly ? '@media (min-width: 521px) { display: none; }': ''}
  ${props => props.desktopOnly ? '@media (max-width: 520px) { display: none; }': ''}
`

export const DocsStructure = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 2em;
  max-width: 100%;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`

export const Ghlogo = styled.img`
  width: 1em;
`
