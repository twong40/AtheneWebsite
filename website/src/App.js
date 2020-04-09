import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/Navbar.scss";
import "./App.css";
import Contact from "./components/Contact";
import Games from "./components/Games";
import GraphicDesign from "./components/GraphicDesign";
import Home from "./components/Home";
import Resume from "./components/Resume";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-4 p-3 ">
                <div className="w-50 banner-back">
                  <img
                    src={require("./assets/sakura.png")}
                    className="img-fluid"
                    alt="Resume"
                  ></img>
                </div>
                <span className="font-barlowcondensed banner-shadow display-4">
                  ATHENE YIP
                </span>
              </div>
              <div className="col-4 pl-5 pt-5 pr-5 pb-3">
                <a
                  href="https://twitter.com/atheneyip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="mx-auto p-1 rounded float-right"
                    src={require("./assets/twitter.png")}
                    width="60"
                    alt="Twitter"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/atheneyip/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="mx-auto p-1 rounded float-right"
                    src={require("./assets/linkedin.png")}
                    width="60"
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-opacity">
              {/* <a className="navbar-brand">Test</a> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="navbar-nav custom-navbar-mr font-barlowcondensed font-weight-bold">
                  <Link className="mt-3 active nav-text nav-hvr" to="/Athene">
                    HOME
                  </Link>
                  <div className="mt-3 nav-item active dropdown nav-hvr">
                    <span
                      className=" dropdown-toggle nav-fill nav-text"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      PORTFOLIO
                    </span>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="dropdown-item">
                        <Link
                          className="nav-link active nav-fill nav-text hvr-underline-from-center"
                          to="/Athene/games"
                        >
                          GAMES
                        </Link>
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="dropdown-item">
                        <Link
                          className="nav-link active nav-fill nav-text hvr-underline-from-center"
                          to="/Athene/graphicDesign"
                        >
                          GRAPHIC DESIGN
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="mt-3 active nav-text nav-hvr"
                    to="/Athene/resume"
                  >
                    RESUME
                  </Link>
                  <Link
                    className="mt-3 active nav-text nav-hvr"
                    to="/Athene/contact"
                  >
                    CONTACT
                  </Link>
                </div>
              </div>
            </nav>
            <hr className="navbar-hr" />
            <Switch>
              <Route path="/Athene/games">
                <Games />
              </Route>
              <Route path="/Athene/graphicDesign">
                <GraphicDesign />
              </Route>
              <Route path="/Athene/resume">
                <Resume />
              </Route>
              <Route path="/Athene/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <span className="font-barlowextralight">
              <img
                src="https://img.icons8.com/wired/64/000000/copyright.png"
                width="23"
                alt="copyright"
              />
              &nbsp;2020 by Athene Yip
            </span>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
