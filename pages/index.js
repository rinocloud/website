import React from 'react'
import { Link } from 'react-router'
import Navbar from './_DownloadNavbar'
import Footer from './_Footer'
import DownloadButton from './_DownloadButton'
import { prefixLink } from 'gatsby-helpers'

export default class Download extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="main">
          <div className="container">
            <h1 className="block-title text-center m-b-lg">Rinocloud for desktop</h1>

            <div className="col-sm-6 col-centered m-b-lg">
              <h4><i className="icon icon-dot-single"/>Apply algorithms to all your data at once</h4>
              <h4><i className="icon icon-dot-single"/>Run our wide range of <a href="http://plugins.rinocloud.com/">Plugins</a> on your data</h4>
              <h4><i className="icon icon-dot-single"/>Supports running Python/MATLAB and R</h4>
              <h4><i className="icon icon-dot-single"/>Ensure consistent data processing across your team</h4>
            </div>

            <div className="text-center row">
              <DownloadButton />
            </div>

          </div>
        </div>

        <div className="block text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <img src={prefixLink("/assets/demo-line-plot.gif")} width="100%"/>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    )
  }
}
