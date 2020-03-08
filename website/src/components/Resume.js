import React, { Component } from "react";
import resume from "../assets/resume/ResumeDisplay.png";
import "../App.css";
class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    const smallResize = this.state.width < 450 && this.state.height < 850;
    return (
      <div className="container">
        <hr />
        {smallResize ? (
          <img src={resume} className="img-fluid p-3" alt="Resume"></img>
        ) : (
          <div className="container w-75 p-3">
            <img src={resume} className="img-fluid" alt="Resume"></img>
          </div>
        )}
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
          {smallResize && (
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
