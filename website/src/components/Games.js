import React, { Component } from "react";
import "../styles/Games.css";
import images from "../assets/games/preview.js";
import Previews from "./Previews";
class Games extends Component {
  constructor() {
    super();
    this.state = { preview: images };
  }
  createPreview() {
    let preview = this.state.preview.map(({ id, src, title, description }) => (
      <Previews key={id} src={src} title={title} description={description} />
    ));
    return preview;
  }
  render() {
    let preview = this.createPreview();
    return (
      <div className="container">
        <br />
        <div className="container p-3">
          {/* <div className="row">{preview}</div> */}
        </div>
        <div className="container">
          <div className="hovereffect rounded">
            <img
              className="img-fluid"
              src={require("../assets/games/Squish/SquishPoster.png")}
              alt=""
            />
            <div className="overlay">
              <br />
              <br />
              <br />
              <br />
              <h2>TEST</h2>
              <a className="info" href="#">
                Click image to find out more
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hovereffect rounded">
            <img
              className=" img-resize img-fluid"
              src={require("../assets/games/KillerOutfit/KillerOutfitEnvironment.png")}
              alt=""
            />
            <div className="overlay">
              <br />
              <br />
              <br />
              <br />
              <h2>TEST</h2>
              <a className="info" href="#">
                Click image to find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
