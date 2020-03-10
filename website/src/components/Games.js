import React, { Component } from "react";
import "../styles/Games.css";
import images from "../assets/games/preview.js";
import Previews from "./Previews";
class Games extends Component {
  constructor() {
    super();
    this.state = { preview: images, isMobile: false };
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
  createPreview() {
    let preview = this.state.preview.map(({ id, src, title, description }) => (
      <Previews
        key={id}
        src={src}
        title={title}
        description={description}
        isMobile={this.state.isMobile}
      />
    ));
    return preview;
  }
  render() {
    let preview = this.createPreview();
    return (
      <div className="container">
        <br />
        {this.state.isMobile && (
          <h4>Click on an image to go to the project!</h4>
        )}
        <div className="container-fluid p-3">
          <div className="row">{preview}</div>
        </div>
        <hr />
        {/* <div className="container-fluid p-3">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="item active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="5"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="6"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="7"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item item active overflow-hidden">
                <img
                  className="d-block w-100"
                  src={require("../assets/games/Squish/SquishPoster.png")}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require("../assets/games/Squish/Title Screen.png")}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require("../assets/games/Squish/Squish Lobby.png")}
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require("../assets/games/Squish/Ready Stage.png")}
                  alt="Fourth slide"
                />
              </div>
              <div className="carousel-item item">
                <img
                  className="d-block w-100"
                  src={require("../assets/games/Squish/Starting Formation.png")}
                  alt="Fifth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require("../assets/games/Squish/Squish Bomb Block.png")}
                  alt="Sixth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require("../assets/games/Squish/DJTable.png")}
                  alt="Seventh slide"
                />
              </div>
              <div className="carousel-item item">
                <img
                  className="d-block w-100"
                  src={require("../assets/games/Squish/Block Dunk Goal.png")}
                  alt="Eight slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Games;
