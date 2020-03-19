import React, { Component } from "react";

class CreateCarousel extends Component {
  constructor(props) {
    super(props);
    this.createSlides = this.createSlides.bind(this);
    this.createSlideIndicator = this.createSlideIndicator.bind(this);
    this.openLink = this.openLink.bind(this);
  }
  openLink() {
    window.open(this.props.link, "_blank");
  }
  createSlideIndicator() {
    let ind = [];
    for (let i = 0; i < this.props.num; i++) {
      if (i === 0) {
        ind.push(
          <li
            key={i}
            data-target={"#" + this.props.name}
            data-slide-to="0"
            className=" active"
          ></li>
        );
      } else {
        ind.push(
          <li
            key={i}
            data-target={"#" + this.props.name}
            data-slide-to={i}
          ></li>
        );
      }
    }
    return ind;
  }
  createSlides() {
    return this.props.slides.map(({ id, leftText, rightText }) => (
      <div key={id} className={"carousel-item " + (id === 0 ? "active" : "")}>
        <div
          className={
            "overflow-hidden slides w-100 " + this.props.name + id + ""
          }
        >
          {id === 0 && (
            <div className="row justify-content-around">
              <div className="col-4">
                <div className="display-4 p-3 overtext font-barlowmedium">
                  {this.props.title}
                </div>
                <div className="p-3 overtext font-barlowextralight">
                  {" "}
                  {leftText}
                </div>
              </div>
              <div className="col-4 font-barlowextralight">
                <br />
                <br />
                <br />
                <div className="p-3 overtext font-weight-bolder">
                  What I did:
                </div>
                <div className="p-3 overtext">{rightText}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    ));
  }
  render() {
    let indicators = this.createSlideIndicator();
    let slide = this.createSlides();
    return (
      <div className="container-fluid">
        <hr className="hr-divider mb-0" />
        <span className="hr-title">
          <hr className="hr-text m-0" data-content={this.props.title} />
        </span>
        <div className="container">
          <div className="d-block w-100"></div>
        </div>
        <div className="container-fluid p-3">
          <div
            id={this.props.name}
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">{indicators}</ol>
            <div className="carousel-inner">{slide}</div>
            <a
              className="carousel-control-prev"
              href={"#" + this.props.name}
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
              href={"#" + this.props.name}
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
        </div>
        {this.props.name !== "NG" && (
          <div className="text-center">
            <button className="btn btn-primary shadow" onClick={this.openLink}>
              {this.props.btnText}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default CreateCarousel;
