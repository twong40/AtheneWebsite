import React from "react";
const previews = props => (
  <div className="col-4 p-3">
    <div className="hovereffect rounded">
      <img
        className="img-fluid"
        src={require("../assets/games/" + props.src)}
        alt={props.description}
      />
      <div className="overlay">
        <br />
        <br />
        <br />
        <br />
        <h2>{props.title}</h2>
        <a className="info" href="#">
          link here
        </a>
      </div>
    </div>
  </div>
);

export default previews;
