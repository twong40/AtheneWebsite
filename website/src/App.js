import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/Navbar.css";

import Contact from "./components/Contact";
import Games from "./components/Games";
import GraphicDesign from "./components/GraphicDesign";
import Home from "./components/Home";
import Resume from "./components/Resume";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-4 p-3">
              <h2>Athene Yip</h2>
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
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <div className="navbar-nav custom-navbar-mr">
                <Link className="navbar-brand nav-link active" to="/Athene">
                  Home
                </Link>
                <div className="nav-item active dropdown">
                  <span
                    className="navbar-brand nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Portfolio
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <div className="dropdown-item">
                      <Link
                        className="navbar-brand nav-link active"
                        to="/Athene/games"
                      >
                        Games
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link
                        className="navbar-brand nav-link active"
                        to="/Athene/graphicDesign"
                      >
                        Graphic Design
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  className="navbar-brand nav-link active"
                  to="/Athene/resume"
                >
                  Resume
                </Link>
                <Link
                  className="navbar-brand nav-link active"
                  to="/Athene/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
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
        </div>
      </Router>
    );
  }
}

export default App;
