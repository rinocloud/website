import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import { rhythm } from '../utils/typography'

import '../css/application-startup.css'
import '../css/toolkit-startup.css'
import '../css/landing.css'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: 'lightgray',
          }}
        >
          <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet" />
        </Headroom>
        <Container
          style={{
            maxWidth: '100%',
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
