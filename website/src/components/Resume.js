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
              className="c-button c-button--gooey"
              download
            >
              Download Resume
              <div className="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
              </div>
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
              className="c-button c-button--grey"
              download
            >
              Black & White Version
              <div className="c-button__blobs-grey">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </a>
          </span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={{ height: 0 }}
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in="SourceGraphic" in2="goo"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}

export default Resume;
