import React from 'react'
import { Link } from 'react-router'

export default () => {
  return (
    <nav className="navbar navbar-bottom navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-left navbar-nav">
          <li>
            <address>
              <strong>Rinocloud, Ltd.</strong><br/>
              Unit 6, Riverside Grove<br/>
              Riverstick, Cork<br/>
              Ireland
            </address>
          </li>
        </ul>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-right navbar-nav">
            <li><Link to="/download/">Download</Link></li>
            <li><a href="http://plugins.rinocloud.com/">Plugins</a></li>
            <li><a href="http://docs.rinocloud.com/">Docs</a></li>
            <li><Link to="/pricing/">Pricing</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Log in</a></li>
            <li><a href="#">Get started</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
