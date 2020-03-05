import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro:
        'My name is Athene Yip (pronounced "Ut-thee-nee") and I\'m an ' +
        "environment and prop artist. I do both 2D and 3D art. I recently " +
        "graduated from the University of California, Santa Cruz with a BA " +
        "in game design."
    };
  }
  render() {
    return (
      <div className="container">
        <p className="text-center display-1">Hi There!</p>
        <p className="lead pr-5 pl-5">{this.state.intro}</p>
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
                <li>Adobe Photoshop</li>
                <li>Adobe Illistrator</li>
                <li>Affinitiy Designer</li>
                <li>Paint.NET</li>
                <li>Blender</li>
              </ul>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              <ul className="p-3 pl-5">
                <li>Maya</li>
                <li>ZBrush</li>
                <li>Substance Painter</li>
                <li>Tiled</li>
                <li>Font Forge</li>
              </ul>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              <ul className="pr-3 pl-5">
                Learning:
                <li>Unity</li>
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
                <h1>
                  Soft <br />
                  Skills
                </h1>
              </span>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              <ul className="p-3 pl-5">
                <li>Strong Communication Skills</li>
                <li>Good Listener</li>
                <li>Persuasive</li>
                <li>Leadership</li>
                <li>Management</li>
              </ul>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              <ul className="p-3 pl-5">
                <li>Team Player</li>
                <li>Collaborative</li>
                <li>Independent</li>
                <li>Flexible</li>
                <li>Friendly and Approachable</li>
                <li>Great Work Ethic</li>
              </ul>
            </div>
            <div className="col-6 col-md-3 box-data-1">
              <ul className="p-3 pl-5">
                <li>Organized</li>
                <li>Punctual</li>
                <li>Quick Learner</li>
                <li>Works well under pressure</li>
                <li>Adaptable</li>
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
                  Squish: A compeptitive party game where you must dodge and
                  rearrange blocks to be the last survivor. Think Tetris, but
                  you are stuck in it!
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
