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
        <div className="container box-container align-self-center p-4">
          <div className="row">
            <div className="col-6 col-md-3 box-tag-1">
              <br />
              <br />
              <br />
              <br />
              <span className="pr-3 mr-3 text-left text-wrap">
                <h1>Techincal Skills</h1>
              </span>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              <ul className="p-3 pl-5">
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              <ul className="p-3 pl-5">
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              Learning:
              <ul className="pr-3 pl-5 pd-3">
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container box-container align-self-center p-4">
          <div className="row">
            <div className="col-6 col-md-3 box-tag-1">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <span className="pr-3 mr-3 text-left text-wrap">
                <h1>Soft Skills</h1>
              </span>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              <ul className="p-3 pl-5">
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              <ul className="p-3 pl-5">
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              <ul className="p-3 pl-5">
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container box-container align-self-center p-4">
          <div className="row">
            <div className="col-6 col-md-3 box-tag-1">
              <br />
              <br />
              <br />
              <br />
              <span className="pr-3 mr-3 text-left text-wrap">
                <h1>Current Projects</h1>
              </span>
            </div>
            <div className="col box-data-1">
              <ul>
                <br />
                <br />
                <li className="text-wrap pr-4 pt-3 pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nec feugiat in fermentum posuere urna. Nec feugiat in
                  fermentum posuere urna nec.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
