import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container, Ghlogo } from "./UI"

import ghlogo from "../images/ghlogo.png"

import { AnimatedLogo } from "./AnimatedLogo"
import { ButtonLink } from "./UI"

const HeaderStyled = styled.header`
  position: ${props => (props.isHome ? "absolute" : "relative")};
  top: 75px;
  left: 0;
  right: 0;
  font-size: 1.2rem;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: ${props => (!props.isHome ? "1em 0" : "2em 0")};

  @media (max-width: 520px) {
    flex-direction: column-reverse;
  }
`

export const NavLinkText = styled.span`
  * + & {
    margin-left: 0.6em;
  }
`;

const LogoLink = styled(Link)`
  display: ${props => (props.showLogo ? "flex" : "none")};
  align-items: center;
  transition: all 0.1s;
  @media (max-width: 520px) {
    margin-bottom: 1.5rem;
  }
`

const NavLinks = styled.div`
  display: flex;
`

const NavLink = styled(ButtonLink)`
  padding: 0.5rem 1.5rem;
  font-size: 0.8em;
  text-decoration: none;
  font-weight: 800;
  color: ${props => props.theme.accentColor};
  @media (max-width: 520px) {
    padding: 0.5rem 1.2rem;
  }
`

const Logo = ({ showLogo }) => (
  <LogoLink showLogo={showLogo} to="/">
    <AnimatedLogo small />
  </LogoLink>
)

export const Header = ({ isHome, hideHeader }) => {
  if (hideHeader) {
    return ""
  }

  return (
    <HeaderStyled isHome={isHome}>
      <Container>
        <Nav isHome={isHome}>
          <NavLinks>
            <NavLink as={Link} to="/docs">
              Docs
            </NavLink>
            <NavLink
              as="a"
              href="https://pub.dartlang.org/documentation/flame/latest/"
            >
              API
            </NavLink>
            <NavLink as="a" href="https://discord.gg/pxrBmy4">
              Discord
            </NavLink>
            <NavLink desktopOnly border href="https://github.com/luanpotter/flame/" >
              <Ghlogo src={ghlogo} alt="github" />
              <NavLinkText>Github</NavLinkText>
            </NavLink>
            <NavLink mobileOnly href="https://github.com/luanpotter/flame/">
              <Ghlogo src={ghlogo} alt="github" />
            </NavLink>
          </NavLinks>
          <Logo showLogo={!isHome} />
        </Nav>
      </Container>
    </HeaderStyled>
  )
}
