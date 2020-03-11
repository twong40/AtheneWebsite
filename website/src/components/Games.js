import React, { Component } from "react";
import "../styles/Games.css";

import images from "../assets/games/preview.js";
import Previews from "./Previews";

import CreateCarousel from "./createCarousel";
import squishSlides from "../assets/games/Squish/slides.js";
import KOSlides from "../assets/games/KillerOutfit/slides.js";
import hemoSlides from "../assets/games/Hemogoblin/slides.js";
import df2slides from "../assets/games/DinnerForTwo/slides.js";
import ngslides from "../assets/games/NormalGirl/slides.js";
import ucscsslides from "../assets/games/UCSCGuardians/slides.js";
class Games extends Component {
  constructor() {
    super();
    this.state = { isMobile: false, squishRef: React.createRef() };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  handleScroll = e => {
    console.log(e.target.key);
    e.preventDefault();
    window.scrollTo({
      top: this.state.squishRef.current.offsetTop,
      behavior: "smooth"
    });
  };
  resize() {
    let currentisMobile = window.innerWidth <= 760;
    if (currentisMobile !== this.state.isMobile) {
      this.setState({ isMobile: currentisMobile });
    }
  }
  createPreview() {
    return images.map(({ id, src, title, description }) => (
      <Previews
        key={id}
        src={src}
        title={title}
        description={description}
        handleScroll={this.handleScroll}
        isMobile={this.state.isMobile}
      />
    ));
  }
  render() {
    let preview = this.createPreview();
    return (
      <div className="container">
        <br />
        {this.state.isMobile && (
          <h4>Click on an image to go to the project!</h4>
        )}
        <div className="row">{preview}</div>
        <div ref={this.state.squishRef}>
          <CreateCarousel
            name="Squish"
            num="8"
            slides={squishSlides}
            title="Squish"
          />
        </div>
        <CreateCarousel
          name="KO"
          num="8"
          slides={KOSlides}
          title="Killer Outfit"
        />
        <CreateCarousel
          name="Hemo"
          num="7"
          slides={hemoSlides}
          title="Hemogolbin"
        />
        <CreateCarousel
          name="Df2"
          num="6"
          slides={df2slides}
          title="Dinner For Two"
        />
        <CreateCarousel
          name="NG"
          num="7"
          slides={ngslides}
          title="Normal Girl"
        />
        <CreateCarousel
          name="UCSC"
          num="7"
          slides={ucscsslides}
          title="Guardians of UCSC"
        />
        <hr />
        <div className="container-fluid p-3">
          <div className="slides other">
            <div className="row justify-content-around">
              <div className="col-4">
                <div className="display-3 p-3 overtext">Other Work</div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Games;
