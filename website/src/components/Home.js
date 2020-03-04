import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <p className="text-center display-1">Hi There!</p>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
          feugiat in fermentum posuere urna. Nec feugiat in fermentum posuere
          urna nec. Pharetra magna ac placerat vestibulum lectus. Vitae
          ultricies leo integer malesuada nunc vel. Eros donec ac odio tempor
          orci dapibus. Fringilla urna porttitor rhoncus dolor purus non enim
          praesent. Eu augue ut lectus arcu bibendum at. Nec nam aliquam sem et
          tortor consequat id.
        </p>
        <br />
        <p className="display-3">At a Quick Glance:</p>
        <div className="container m-3 p-3">
          <div className="row">
            <div className="col-sm-4">
              <span className="display-4 pt-3">Techincal Skills</span>
            </div>
            <div className="col-sm-8">One of three columns</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
