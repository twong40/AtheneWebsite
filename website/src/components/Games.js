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
          <div className="row">
            {preview}
            {/* <div className="col-4">
              <div className="hovereffect rounded">
                <img
                  className="img-fluid"
                  src={this.state.preview[0].src}
                  alt=""
                />
                <div className="overlay">
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Hover effect 3</h2>
                  <a className="info" href="#">
                    link here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="hovereffect rounded">
                <img className="img-fluid" src="" alt="" />
                <div className="overlay">
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Hover effect 3</h2>
                  <a className="info" href="#">
                    link here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">col3</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
