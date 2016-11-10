import React from 'react'
import { Link } from 'react-router'
import Navbar from './_navbar'
import Footer from './_footer'

export default class About extends React.Component {
  render () {
    return (
      <div>
        <Navbar />

        <div className="text-center main">
          <div className="container-fluid">
            <div className="col-sm-6 col-sm-offset-3">
              <h1 className="block-title m-b-lg">Rinocloud for desktop</h1>
              <h4 className="lead m-b-lg">
                Process your data faster by applying algorithms
                to all your data at once.
              </h4>
              <a
                className="btn btn-success btn-lg"
                href="https://updates.rinocloud.com/download/win"
              >
                Download for Windows
              </a>
            </div>
          </div>
        </div>


        <div className="block text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <img src="/assets/demo-line-plot.gif" width="100%"/>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="container-fluid">
            <h3 className="text-center">Get started</h3>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h3>1. Install</h3>
                <p className="lead">
                  Download and install Rinobot so that Rinobot can start automatically processing
                  and syncing your data.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h3>2. Choose a folder</h3>
                <p className="lead">
                  Choose a folder on your computer that Rinobot will monitor for data and sync with Rinocloud.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h3>3. Add a plugin</h3>
                <p className="lead">
                  Install some plugins and choose a set of tasks for Rinobot to do on your data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    )
  }
}
