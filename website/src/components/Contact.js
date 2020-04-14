import React, { Component } from "react";
import axios from "axios";
import "../styles/Contact.scss";
const key = require("../config");
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      email: "",
      name: "",
      subject: "",
      loading: false,
      status: "",
      errors: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  validate() {
    let isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email);
    return (
      isEmail && this.state.message && this.state.name && this.state.subject
    );
  }
  resetForm() {
    this.setState({
      message: "",
      email: "",
      name: "",
      subject: "",
    });
  }
  handleServerResponse = (ok, msg) => {
    if (ok) {
      this.setState({
        errors: "",
        loading: false,
        status: "SUCCESS",
      });
      this.resetForm();
    } else {
      this.setState({
        errors: msg,
        loading: false,
        status: "ERROR",
      });
      this.resetForm();
    }
  };
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    axios({
      method: "POST",
      url: key.KEY,
      data: {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
      },
    })
      .then((res) => {
        this.handleServerResponse(true, "");
      })
      .catch((res) => {
        this.handleServerResponse(false, res.response.data.error);
      });
  }
  render() {
    const isValid = this.validate();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email);
    return (
      <div className="fill container">
        <br />
        <h1 className="font-barlowextralight">Contact Me</h1>{" "}
        {/* <hr className="separator separator--line" /> */}
        <div className="row">
          <div className="col-md-3">
            <div className="letter-image">
              <div className="animated-mail">
                <div className="back-fold"></div>
                <div className="letter">
                  <div className="letter-border"></div>
                  <div className="letter-title"></div>
                  <div className="letter-context"></div>
                  <div className="letter-stamp">
                    <div className="letter-stamp-inner"></div>
                  </div>
                </div>
                <div className="top-fold"></div>
                <div className="body"></div>
                <div className="left-fold"></div>
              </div>
              <div className="letter-shadow"></div>
            </div>
          </div>
          <div className="col-md-3 font-barlowextralight">
            <hr className="separator-side separator--dotter" />
            <span className="pl-5">
              Email:
              <br />
              <span className="pl-5">athene.yip@gmail.com</span>
            </span>
            <hr className="separator-side separator--dotter" />
          </div>
          <div className="col-md-5 font-montserratlight">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group position-relative pt-2">
                <input
                  className="input-forms"
                  type="text"
                  htmlFor="name"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
                <label className="label-forms pt-2" htmlFor="name">
                  Your Name:
                </label>
              </div>
              <div className="form-group position-relative pt-2">
                <input
                  className="input-forms"
                  type="text"
                  htmlFor="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <label className="label-forms pt-2" htmlFor="email">
                  Your Email:
                </label>
                {this.state.email && !isEmail && (
                  <div className="alert alert-danger" role="alert">
                    <span
                      className="glyphicon glyphicon-exclamation-sign"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Error:</span>
                    <img
                      src="https://img.icons8.com/ios-glyphs/48/000000/high-importance.png"
                      width="23"
                      alt="Error"
                    />
                    Enter a valid email address
                  </div>
                )}
              </div>
              <div className="form-group position-relative pt-2">
                <input
                  className="input-forms"
                  type="text"
                  htmlFor="subject"
                  id="subject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                  required
                />
                <label className="label-forms pt-2" htmlFor="subject">
                  The Subject:
                </label>
              </div>
              <div className="form-group position-relative pt-2">
                <textarea
                  className="input-forms"
                  type="text-area"
                  htmlFor="message"
                  id="message"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  required
                />
                <label className="label-forms pt-2" htmlFor="message">
                  The Message:
                </label>
              </div>
              <button
                className="btn btn-block my-4 btn-send draw-border text-dark"
                type="submit"
                value="submit"
                disabled={this.state.loading || !isValid}
              >
                Send Mail&nbsp;
                <img
                  src="https://img.icons8.com/dusk/64/000000/send-mass-email.png"
                  width="23"
                  alt="Email"
                />
              </button>
            </form>
            {this.state.errors && this.state.status === "ERROR" && (
              <div className="alert alert-danger">
                <img
                  src="https://img.icons8.com/ios-glyphs/48/000000/high-importance.png"
                  width="23"
                  alt="Error"
                />
                {this.state.errors}
              </div>
            )}
            {!this.state.errors && this.state.status === "SUCCESS" && (
              <div className="alert alert-success">
                <img
                  src="https://img.icons8.com/color/48/000000/ok--v1.png"
                  width="23"
                  alt="Success"
                />
                Thanks!
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
