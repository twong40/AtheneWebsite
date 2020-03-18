import React, { Component } from "react";
import { Fab } from "react-tiny-fab";

import "../styles/Games.css";
import "react-tiny-fab/dist/styles.css";

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
    this.state = {
      isMobile: false,
      hasScrolled: false,
      squishRef: React.createRef(),
      koRef: React.createRef(),
      hemoRef: React.createRef(),
      df2Ref: React.createRef(),
      ngRef: React.createRef(),
      ucscRef: React.createRef(),
      otherRef: React.createRef()
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toTop = this.toTop.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  toTop = e => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };
  handleScroll = (id, e) => {
    e.preventDefault();
    switch (id) {
      case "Squish":
        window.scrollTo(0, this.state.squishRef.current.offsetTop);
        break;
      case "Killer Outfit":
        window.scrollTo(0, this.state.koRef.current.offsetTop);
        break;
      case "Hemogoblin":
        window.scrollTo(0, this.state.hemoRef.current.offsetTop);
        break;
      case "Dinner for Two":
        window.scrollTo(0, this.state.df2Ref.current.offsetTop);
        break;
      case "Normal Girl":
        window.scrollTo(0, this.state.ngRef.current.offsetTop);
        break;
      case "Guardians of UCSC":
        window.scrollTo(0, this.state.ucscRef.current.offsetTop);
        break;
      case "Other 3D Work":
        window.scrollTo(0, this.state.otherRef.current.offsetTop);
        break;
      default:
        return;
    }
  };
  resize() {
    let currentisMobile = window.innerWidth <= 760;
    if (currentisMobile !== this.state.isMobile) {
      this.setState({ isMobile: currentisMobile });
    }
  }
  createPreview() {
    return images.map(({ id, src, title, description, name }) => (
      <Previews
        key={id}
        src={src}
        title={title}
        description={description}
        name={name}
        handleScroll={this.handleScroll}
        isMobile={this.state.isMobile}
      />
    ));
  }
  render() {
    let preview = this.createPreview();
    return (
      <div className="container">
        <Fab
          icon="^"
          mainButtonStyles={{ backgroundColor: "#e74ccc" }}
          onClick={this.toTop}
          text="Back to Top"
        ></Fab>
        <br />
        <div id="shortcut" className="row">
          {preview}i
        </div>
        <div ref={this.state.squishRef}>
          <CreateCarousel
            name="Squish"
            num="8"
            slides={squishSlides}
            title="Squish"
            btnText="View and Play Squish"
            link="https://www.play-squish.com/game"
          />
        </div>
        <div ref={this.state.koRef}>
          <CreateCarousel
            name="KO"
            num="8"
            slides={KOSlides}
            title="Killer Outfit"
            btnText="View KillerOutfit"
            link="https://diamonddustgames.wixsite.com/killeroutfitgame"
          />
        </div>
        <div ref={this.state.hemoRef}>
          <CreateCarousel
            name="Hemo"
            num="7"
            slides={hemoSlides}
            title="Hemogolbin"
            btnText="Play Hemogoblin"
            link="https://jhusting.itch.io/hemogoblin"
          />
        </div>
        <div ref={this.state.df2Ref}>
          <CreateCarousel
            name="Df2"
            num="6"
            slides={df2slides}
            title="Dinner For Two"
            btnText="Watch Dinner For Two"
            link="http://www.youtube.com/watch?v=U7AoypiPOuc"
          />
        </div>
        <div ref={this.state.ngRef}>
          <CreateCarousel
            name="NG"
            num="7"
            slides={ngslides}
            title="Normal Girl"
            btnText=""
            link=""
          />
        </div>
        <div ref={this.state.ucscRef}>
          <CreateCarousel
            name="UCSC"
            num="7"
            slides={ucscsslides}
            title="Guardians of UCSC"
            btnText="View Guardians of UCSC"
            link="https://goucsc.weebly.com/"
          />
        </div>
        <hr />
        <div ref={this.state.otherRef} className="container-fluid p-3">
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
