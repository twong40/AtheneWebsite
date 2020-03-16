import React, { Component } from "react";
import "../styles/GraphicDesign.css";

class GraphicDesign extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
    this.changeActive = this.changeActive.bind(this);
    this.setActive = this.setActive.bind(this);
  }
  changeActive = (val, e) => {
    e.preventDefault();
    let newVal = this.state.activeTab + val;
    if (newVal < 0) newVal = 1;
    if (newVal > 1) newVal = 0;
    this.setState({ activeTab: newVal });
  };
  setActive = (val, e) => {
    e.preventDefault();
    this.setState({ activeTab: val });
  };
  render() {
    return (
      <div className="container">
        <br />
        <div
          id="carousel-graphics"
          className="carousel slide"
          data-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item slides active">
              <div className="graphic-designs gd1"></div>
            </div>
            <div className="carousel-item slides slides2">
              <div className="graphic-designs gd2"></div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel-graphics"
            role="button"
            data-slide="prev"
            onClick={e => this.changeActive(-1, e)}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-graphics"
            role="button"
            data-slide="next"
            onClick={e => this.changeActive(1, e)}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <hr />
        <div className="container">
          <span className="p-2">
            <a
              data-target="#carousel-graphics"
              data-slide-to="0"
              href=""
              onClick={e => this.setActive(0, e)}
            >
              <img
                className={
                  "small_thumbnail " +
                  (this.state.activeTab === 0 && "selected")
                }
                src={require("../assets/graphicDesign/AY_Exercise_6-1_Animation.gif")}
                alt="First Slide"
              />
            </a>
          </span>
          <span className="p-2">
            <a
              data-target="#carousel-graphics"
              data-slide-to="1"
              href=""
              onClick={e => this.setActive(1, e)}
            >
              <img
                className={
                  "small_thumbnail " +
                  (this.state.activeTab === 1 && "selected")
                }
                src={require("../assets/graphicDesign/LanternPrint_MoonClouds.png")}
                alt="First Slide"
              />
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default GraphicDesign;
