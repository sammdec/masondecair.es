import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { colours } from '../styles/vars'

const Header = styled.header`
  display: flex;
  max-width: 720px;
  padding: 0 24px;
  margin: 0 auto 24px;
  align-items: baseline;
  border-bottom: 1px solid ${colours.grey};
`

const Name = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;

  a {
    text-decoration: none;
    color: ${colours.black};
  }
`

const Nav = styled.div`
  margin-left: auto;

  a {
    text-decoration: none;
    color: ${colours.black};
    text-transform: uppercase;
    font-weight: 900;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Main = styled.section`
  max-width: 720px;
  padding: 0 24px;
  margin: 0 auto;
`

export default ({ children }) => (
  <>
    <Header>
      <Name>
        <Link href="/">
          <a>Sam Mason de Caires</a>
        </Link>
      </Name>
      <Nav>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </Nav>
    </Header>

    <Main>{children}</Main>
  </>
)
