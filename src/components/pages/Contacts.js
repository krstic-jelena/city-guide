import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1Acr6wSLunypQX_YnDx48mDRwORbHHnS2"
                style={{
                  width: "100%",
                  height: "315px",
                  broder: "0",
                  frameborder: "0",
                }}
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="phone"
                  />
                </div>
                <textarea
                  cols="30"
                  rows="3"
                  placeholder="message"
                  className="form-control"
                />
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className="fa fa-paper-plane-o" area-hidden="true" />
                  <i className="fab fa-telegram-plane" />
                  &nbsp; Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
