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
        {this.state.isMobile ? (
          <img src={resume} className="img-fluid p-3" alt="Resume"></img>
        ) : (
          <div className="container w-75 p-3">
            <img src={resume} className="img-fluid" alt="Resume"></img>
          </div>
        )}
        <hr className="style-two" />
        <div className="text-center pt-2">
          <span className="p-3 m-3">
            <a
              href="https://raw.githubusercontent.com/twong40/AtheneWebsite/master/website/src/assets/resume/AtheneYip_Resume.pdf"
              className="blob-btn"
              target="_blank"
              download
            >
              Download Resume&nbsp;
              <img
                src="https://img.icons8.com/plasticine/100/000000/download.png"
                width="25"
                alt="Colorful Download"
              />
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </a>
          </span>
          {this.state.isMobile && (
            <div className="container">
              <br />
            </div>
          )}
          <span className="p-3 m-3">
            <a
              href="https://raw.githubusercontent.com/twong40/AtheneWebsite/master/website/src/assets/resume/AtheneYip_Resume_bw.pdf"
              className="grey-blobs"
              target="_blank"
              download
            >
              Black & White Version&nbsp;
              <img
                src="https://img.icons8.com/android/24/000000/download.png"
                width="17"
                alt="Black & White Download"
              />
              <span className="grey-blobs__inner">
                <span className="grey-blobs__blobs">
                  <span className="grey-blobs__blob"></span>
                  <span className="grey-blobs__blob"></span>
                  <span className="grey-blobs__blob"></span>
                  <span className="grey-blobs__blob"></span>
                </span>
              </span>
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
                result="blur"
                stdDeviation="10"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>{" "}
      </div>
    );
  }
}

export default Resume;
