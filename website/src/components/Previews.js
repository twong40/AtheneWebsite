import React, { Component } from "react";
class previews extends Component {
  constructor(props) {
    super(props);
    this.state = { showOverlay: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      showOverlay: !this.state.showOverlay
    });
  }
  render() {
    return (
      <div className={this.props.isMobile ? "container p-3" : "col-4 p-3"}>
        <div className="hovereffect rounded font-montserratlight">
          <img
            className="img-resize img-fluid"
            src={require("../assets/games/" + this.props.src)}
            alt={this.props.description}
          />
          <div className="overlay">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>{this.props.title}</h2>
            <a
              className="info"
              href=""
              onClick={e => this.props.handleScroll(this.props.title, e)}
              data-target={this.props.name}
              data-slide-to={0}
            >
              Click here to find out more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default previews;
