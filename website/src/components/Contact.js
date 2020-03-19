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
      errors: ""
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
      subject: ""
    });
  }
  handleServerResponse = (ok, msg) => {
    if (ok) {
      this.setState({
        errors: "",
        loading: false,
        status: "SUCCESS"
      });
      this.resetForm();
    } else {
      this.setState({
        errors: msg,
        loading: false,
        status: "ERROR"
      });
      this.resetForm();
    }
  };
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      loading: true
    });
    axios({
      method: "POST",
      url: key.KEY,
      data: {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      }
    })
      .then(res => {
        this.handleServerResponse(true, "");
      })
      .catch(res => {
        this.handleServerResponse(false, res.response.data.error);
      });
  }
  render() {
    const isValid = this.validate();
    return (
      <div className="container">
        <br />
        <h1 className="font-barlowextralight">Contact Me</h1>{" "}
        <hr className="separator separator--line" />
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
            <hr className="separator separator--dots" />
            <span className="pl-5">
              Email:
              <br />
              <span className="pl-5">athene.yip@gmail.com</span>
            </span>
            <hr className="separator separator--dots" />
          </div>
          <div className="col-md-5">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row mt-1 font-montserratlight">
                <div className="col">
                  <input
                    className="form-control"
                    type="name"
                    htmlFor="name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="email"
                    htmlFor="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group font-montserratlight">
                <input
                  className="form-control mt-3"
                  type="subject"
                  htmlFor="subject"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group font-montserratlight">
                <textarea
                  className="form-control"
                  type="text-area"
                  htmlFor="message"
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
              <button
                className="btn btn-block my-4 btn-send draw-border text-dark"
                type="submit"
                value="submit"
                disabled={this.state.loading || !isValid}
              >
                Send Mail
              </button>
            </form>
            {this.state.errors && this.state.status === "ERROR" && (
              <div className="alert alert-danger">{this.state.errors}</div>
            )}
            {!this.state.errors && this.state.status === "SUCCESS" && (
              <div className="alert alert-success">Thanks!</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
