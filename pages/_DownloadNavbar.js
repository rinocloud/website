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
            <li><a href="http://plugins.rinocloud.com/">Plugins</a></li>
            <li><a href="https://docs.rinocloud.com/rinocloud-desktop/installation.html">Docs</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
