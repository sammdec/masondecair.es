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
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`

export default () => (
  <Wrapper>
    <Photo>
      <img className="me" src="/static/images/me.jpg" alt="me - Sam Mason" />
    </Photo>

    <p>
      My name is Sam, I am a developer/ designer in London, UK. I build things
      for the web. These things range from services to help people to geeky
      tools.
    </p>

    <p>
      I'm currently an engineer at Rapha bringing cycling and technology closer
      together. You can hear my ramblings on{' '}
      <a href="http://twitter.com/samjbmason">Twitter</a> and all of the code I
      write and open source is on{' '}
      <a href="http://github.com/samjbmason">GitHub</a>.
    </p>

    <p>
      The source code for this site can be found{' '}
      <a href="https://github.com/samjbmason/samjbmason.github.io">here</a>.
      Feel free to suggest fixes for bugs or improvements.
    </p>

    <p>I live in North London with my family, and our surly cat, Rufus.</p>

    <p>
      I'm always up for meeting and speaking to people, old & new. If you want
      to talk, drop me an email at{' '}
      <a href="mailto:sam.jbmason@gmail.com">sam.jbmason@gmail.com</a>.
    </p>
  </Wrapper>
)