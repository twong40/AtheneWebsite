import React, { Component } from "react";
import "../styles/Home.css";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <p className="text-center display-1 font-greatvibes">Hi there!</p>
        <div className="container box-container align-self-center p-4">
          <div className="row">
            <div className="col-md-3 box-tag-1">
              <br />
              <br />
              <br />
              <br />
              <span className="pr-3 mr-3 text-left text-wrap font-barlowcondensed home-title">
                TECHNICAL <br /> SKILLS
              </span>
            </div>
            <div className="col-md-3 box-data-1">
              <ul className="pr-3 pt-3 pl-5 font-barlowextralight home-list">
                <br />
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Affinity Photo</li>
                <li>Affinity Designer</li>
                <li>Affinity Publisher</li>
              </ul>
            </div>
            <div className="col-md-3 box-data-1">
              <ul className="pr-3 pt-3 pl-5 font-barlowextralight home-list">
                <br />
                <li>Paint.NET</li>
                <li>Blender</li>
                <li>Maya</li>
                <li>ZBrush</li>
                <li>Substance Painter</li>
              </ul>
            </div>
            <div className="col-md-3 box-data-1">
              <ul className="pr-3 pt-3 pl-5 font-barlowextralight home-list">
                <br />
                <li>Tiled</li>
                <li>Font Forge</li>
                <li>Unity</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container box-container align-self-center p-4">
          <div className="row">
            <div className="col-md-3 box-tag-1">
              <br />
              <br />
              <br />
              <br />
              <span className="pr-3 mr-3 text-left text-wrap font-barlowcondensed home-title">
                SOFT <br />
                SKILLS
              </span>
            </div>
            <div className="col-md-3 box-data-2">
              <ul className="pr-3 pt-3 pl-5 font-barlowextralight home-list">
                <li>Strong Communication Skills</li>
                <li>Good Listener</li>
                <li>Persuasive</li>
                <li>Leadership</li>
                <li>Management</li>
              </ul>
            </div>
            <div className="col-md-3 box-data-2">
              <ul className="pr-3 pt-3 pl-5 font-barlowextralight home-list">
                <li>Team Player</li>
                <li>Collaborative</li>
                <li>Independent</li>
                <li>Flexible</li>
                <li>Friendly and Approachable</li>
                <li>Great Work Ethic</li>
              </ul>
            </div>
            <div className="col-md-3 box-data-2">
              <ul className="pr-3 pt-3 pl-5 font-barlowextralight home-list">
                <li>Organized</li>
                <li>Punctual</li>
                <li>Quick Learner</li>
                <li>Works Well Under Pressure</li>
                <li>Adaptable</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container box-container align-self-center p-4">
          <div className="row">
            <div className="col-md-3 box-tag-1">
              <br />
              <br />
              <br />
              <br />
              <span className="pr-3 mr-3 text-left text-wrap font-barlowcondensed home-title">
                CURRENT <br />
                PROJECTS
                <br />
              </span>
            </div>
            <div className="col box-data-1">
              <ul>
                <br />
                <br />
                <br />
                <li className="text-wrap pr-4 pt-3 pb-3 font-barlowextralight home-list">
                  Squish: A competitive party game where you must dodge and
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
