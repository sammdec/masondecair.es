import React from 'react'
import App, { Container } from 'next/app'
import SiteLayout from '../components/SiteLayout'
import GlobalStyles from '../styles/global'
import BorderStyles from '../styles/border'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyles />
        <BorderStyles />
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </Container>
    )
  }
}
