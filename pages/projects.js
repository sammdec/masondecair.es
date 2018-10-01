import React from 'react'
import styled from 'styled-components'
import { colours } from '../styles/vars'

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  @media screen and (max-width: 650px) {
    display: block;
  }
`

const Project = styled.div`
  a {
    color: ${colours.black};
    text-decoration: none;

    &:hover {
      h3 {
        text-decoration: underline;
      }
    }
  }

  h3 {
    margin-bottom: 4px;
  }

  p {
    margin: 0;
  }
`

export default () => (
  <ProjectGrid>
    <Project className="project punk-api">
      <a href="https://github.com/samjbmason/punkapi-db">
        <h3>Punk API</h3>
        <p>
          An open source service that takes Brewdog's DIY Dog recipe PDF and
          turns it into a searchable, queryable API.
        </p>
      </a>
    </Project>

    <Project className="project super-servers">
      <a href="https://github.com/samjbmason/super-servers">
        <h3>Super Servers</h3>
        <p>Server naming schemes using the Marvel API.</p>
      </a>
    </Project>

    <Project className="project pine-for">
      <a href="https://github.com/samjbmason/pinefor">
        <h3>Pinefor</h3>
        <p>A gift list sharing app built with Ruby on Rails.</p>
      </a>
    </Project>

    <Project className="project psdfonts">
      <a href="https://github.com/samjbmason/psdfonts">
        <h3>.psdfonts</h3>
        <p>
          Get a list of all the fonts used in a psd, built using psd.rb by
          LayerVault.
        </p>
      </a>
    </Project>

    <Project className="project sapling">
      <a href="https://github.com/samjbmason/sapling">
        <h3>Sapling</h3>
        <p>Wordpress starter template originally based on Roots.</p>
      </a>
    </Project>
  </ProjectGrid>
)
