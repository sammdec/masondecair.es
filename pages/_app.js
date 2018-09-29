import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import SiteLayout from '../components/SiteLayout'
import GlobalStyles from '../styles/global'
import BorderStyles from '../styles/border'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Sam Mason, Developer</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <GlobalStyles />
        <BorderStyles />
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </Container>
    )
  }
}
