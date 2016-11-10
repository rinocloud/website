import React from 'react'
import { Link } from 'react-router'

export default () => {
  return (
    <nav className="navbar navbar-top navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <i className="icon-brand"></i>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-right navbar-nav">
            <li><Link to="/download/">Download</Link></li>
            <li><a href="http://plugins.rinocloud.com/">Plugins</a></li>
            <li><a href="http://docs.rinocloud.com/">Docs</a></li>
            <li><Link to="/pricing/">Pricing</Link></li>
            <li><a href="#">Log in</a></li>
            <li><button className="btn-get-started btn btn-primary" href="#">Sign up free</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
