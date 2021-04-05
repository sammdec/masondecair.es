import React from 'react'
import styled from 'styled-components'
import { colours } from '../styles/vars'

const Wrapper = styled.article`
  padding-bottom: 24px;

  a {
    color: ${colours.black};
  }
`

const Photo = styled.div`
  margin-bottom: 24px;
  text-align: center;

  img {
    max-width: 100%;
  }
`

export default () => (
  <Wrapper>
    <Photo>
      <img className="me" src="/me.jpg" alt="me - Sam Mason" />
    </Photo>

    <p>
      My name is Sam, I am a UX Engineer in London, currently working at
      Cloudflare.
    </p>

    <p>
      You can find me on <a href="http://twitter.com/sammdec">Twitter</a> and
      at <a href="http://github.com/sammdec">GitHub</a>.
    </p>

    <p>I live in South London with my family, and our surly cat, Rufus.</p>

    <p>
      I'm always up for meeting and chatting. If you want to talk, drop me an
      email at <a href="mailto:sam.jbmason@gmail.com">sam.jbmason@gmail.com</a>.
    </p>
  </Wrapper>
)
