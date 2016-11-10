import React from 'react'
import { Link } from 'react-router'
import Navbar from './_Navbar'
import Footer from './_Footer'

export default class Pricing extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="block">
          <div className="container text-center">
            <div className="row m-b-lg">
              <div className="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                <h6 className="text-muted text-uppercase">Pricing</h6>
                <h4 className="m-t-0">
                  Rinocloud for Teams is a single project for your small- to medium-sized team or company.
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 p-x">
                <div className="p-x">
                  <h6 className="text-muted text-uppercase m-b">Free</h6>
                  <h1>
                    € <strong>0</strong>
                  </h1>
                  <div className="text-muted m-b">
                    <small>Nada, </small>
                  </div>
                  <p>Plenty of processing power for any personal projects, big or small.</p>
                </div>

                <ul className="list-unstyled list-bordered text-left m-y-md">
                  <li className="p-y"><strong>10k</strong> monthly requests</li>
                  <li className="p-y"><strong>9am-5pm</strong> technical supprt</li>
                  <li className="p-y"><strong>Public</strong> API access</li>
                </ul>

                <a href="#" className="btn btn-lg btn-primary btn-block">
                  Get started for free
                </a>
              </div>

              <div className="col-sm-4 p-x">
                <div className="p-x">
                  <h6 className="text-muted text-uppercase m-b">Standard</h6>
                  <h1>
                    € <strong>9.97</strong>
                  </h1>
                  <div className="text-muted m-b">
                    <small>per active user, per month, billed annually</small>
                  </div>
                  <p>The perfect sized plan for small businesses to get started.</p>
                </div>

                <ul className="list-unstyled list-bordered text-left m-y-md">
                  <li className="p-y"><strong>100k</strong> monthly requests</li>
                  <li className="p-y"><strong>24/7</strong> technical supprt</li>
                  <li className="p-y"><strong>Public</strong> API access</li>
                </ul>

                <button className="btn btn-lg btn-primary btn-block">
                  Start <span className="visible-lg-inline">a business account</span>
                </button>
              </div>

              <div className="col-sm-4 p-x">
                <div className="p-x">
                  <h6 className="text-muted text-uppercase m-b">Plus</h6>
                  <h1>
                    € <strong>24.97</strong>
                  </h1>
                  <div className="text-muted m-b">
                    <small>per active user, per month, billed annually</small>
                  </div>
                  <p>An unlimited plan that will scale infinitely to any size project.</p>
                </div>

                <ul className="list-unstyled list-bordered text-left m-y-md">
                  <li className="p-y"><strong>Unlimited</strong> monthly requests</li>
                  <li className="p-y"><strong>24/7</strong> technical supprt</li>
                  <li className="p-y"><strong>Public & Private</strong> API access</li>
                </ul>

                <button className="btn btn-lg btn-primary btn-block">
                  Start <span className="visible-lg-inline">a corporate account</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
