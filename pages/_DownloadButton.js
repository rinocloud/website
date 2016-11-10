import React from 'react'
import { Link } from 'react-router'

export default class DownloadButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = { OSName: null }
  }

  componentDidMount() {
    var OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="OSX";
    if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
    if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";

    this.setState({ OSName: OSName })
  }

  render() {
    const { OSName } = this.state

    if (OSName === "OSX") {
      return (
        <div>
          <a
            href="https://updates.rinocloud.com/download/osx"
            className="btn btn-success btn-lg m-b"
          >
            Download for Mac{'  '}
            <span className="icon icon-install"></span>
          </a>
          <br />
          <a
            href="https://updates.rinocloud.com/download/win"
          >
            Download for Windows
          </a>
        </div>
      )
    }

    return (
      <div>
        <a
          href="https://updates.rinocloud.com/download/win"
          className="btn btn-success btn-lg m-b"
        >
          Download for Windows{'  '}
          <span className="icon icon-install"></span>
        </a>
        <br />
        <a
          href="https://updates.rinocloud.com/download/osx"
        >
          Download for Mac
        </a>
      </div>
    )
  }
}
