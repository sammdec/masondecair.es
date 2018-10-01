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
          <title>Sam Mason, Developer in London</title>
          <meta name="description" content="A developer based in London building things for the web"/>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
          />
          <link rel="icon" href="/static/images/favicon.png" />

          <script
            dangerouslySetInnerHTML={{
              __html: `!function(g,s,q,r,d){r = g[r] = g[r] || function () {
              (r.q = r.q || []).push(
                arguments)
            }; d=s.createElement(q);q=s.getElementsByTagName(q)[0];
            d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
            insertBefore(d,q)}(window,document,'script','_gs');
          
            _gs('GSN-564854-X');`
            }}
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
