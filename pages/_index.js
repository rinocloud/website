import React from 'react'
import { Link } from 'react-router'
import Navbar from './_Navbar'
import Footer from './_Footer'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Navbar />

        <div className="block text-center main">
          <div className="container-fluid">
            <div className="block-foreground">
              <div className="col-sm-7 col-centered">
                <h2 className="block-title m-b-md">
                  Do science, faster!
                </h2>

                <h3 className="block-subtitle m-b-lg">
                  Rinocloud automatically processes your teams data and sends it to your secure cloud.
                  Giving you more time for awesome experiments!
                </h3>


                <button type="submit" className="btn btn-primary btn-lg m-b-sm">Sign Up Free</button>
              </div>
            </div>
            <div className="block-background">
            </div>
          </div>
        </div>

        <div className="block block-bordered text-center">
          <div className="container-fluid">
            <h3 className="text-center">How does it work?</h3>
            <div className="row">
              <div className="col-sm-4 p-a-lg">
                <h3>1. Install</h3>
                <p className="lead">
                  Install on your lab computers and choose tasks to automate.
                </p>
              </div>

              <div className="col-sm-4 p-a-lg">
                <h3>2. Choose automations</h3>
                <p className="lead">
                  As data comes in Rinobot will process it and synchronise it to all your computers.
                </p>
              </div>

              <div className="col-sm-4 p-a-lg">
                <h3>3. Enjoy your new free time</h3>
                <p className="lead">
                  Data is immediately available for your whole team.
                </p>
              </div>
            </div>

            <div className="row">
              <iframe src="https://player.vimeo.com/video/184650840" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
          </div>
        </div>


        <div className="block block-bordered">
          <div className="container-fluid">
            <h3 className="text-center">Features</h3>
            <div className="row">
              <div className="col-sm-4 col-sm-offset-2">
                <ul className="featured-list ">
                  <li className="m-b-md">
                    <div className="featured-list-icon">
                      <span className="icon icon-power-plug"></span>
                    </div>
                    <h3>Automations</h3>
                    <p>
                      Choose from a huge list of tasks to be automated. Automatically convert files, plot data, normalising, fitting. You name it.
                    </p>
                  </li>
                  <li>
                    <div className="featured-list-icon">
                      <span className="icon icon-copy"></span>
                    </div>
                    <h3>Versioning</h3>
                    <p>
                      All files are tracked forever with every revision of data saved.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="featured-list">
                  <li className="m-b-md">
                    <div className="featured-list-icon">
                      <span className="icon icon-chat"></span>
                    </div>
                    <h3>Scientific collaboration</h3>
                    <p>
                      Notebooks and comments with “Latex” and references of all the data.
                    </p>
                  </li>
                  <li>
                    <div className="featured-list-icon">
                      <span className="icon icon-database"></span>
                    </div>
                    <h3>Metadata</h3>
                    <p>
                      All your experimental parameters are tracked and versioned.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="block text-center m-b-lg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h1 className="block-title m-b-lg">Get started now for free</h1>
                <form className="form-inline">
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter your email" />
                  </div>
                  <button type="submit" className="btn btn-default">Get started</button>
                </form>
                <small className="text-muted">
                  By clicking "Get started" I agree to Rinoclouds
                  <a href="#">Terms of service</a>
                </small>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    )
  }
}
