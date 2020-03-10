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
          <h2>Athene Yip</h2>
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
                <Link className="navbar-brand nav-link active" to="/">
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
                        to="/games"
                      >
                        Games
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link
                        className="navbar-brand nav-link active"
                        to="/graphicDesign"
                      >
                        Graphic Design
                      </Link>
                    </div>
                  </div>
                </div>
                <Link className="navbar-brand nav-link active" to="/resume">
                  Resume
                </Link>
                <Link className="navbar-brand nav-link active" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/graphicDesign">
              <GraphicDesign />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
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
