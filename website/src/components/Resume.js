import React, { Component } from "react";
import resume from "../assets/resume/ResumeDisplay.png";
import "../styles/Resume.scss";
class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: false };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  resize() {
    let currentisMobile = window.innerWidth <= 760;
    if (currentisMobile !== this.state.isMobile) {
      this.setState({ isMobile: currentisMobile });
    }
  }
  render() {
    return (
      <div className="container">
        <hr className="style-two" />
        {this.state.isMobile ? (
          <img src={resume} className="img-fluid p-3" alt="Resume"></img>
        ) : (
          <div className="container w-75 p-3">
            <img src={resume} className="img-fluid" alt="Resume"></img>
          </div>
        )}
        <hr className="style-two" />
        <div className="text-center">
          <span className="p-3 m-3">
            <a
              href="../assets/resume/AtheneYip_Resume.pdf"
              className="btn btn-primary shadow"
              download
            >
              Download Resume
            </a>
          </span>
          {this.state.isMobile && (
            <div className="container">
              <br />
            </div>
          )}
          <span className="p-3 m-3">
            <a
              href="../assets/resume/AtheneYip_Resume_bw.pdf"
              className="btn btn-secondary shadow"
              download
            >
              Black & White Version
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Resume;
