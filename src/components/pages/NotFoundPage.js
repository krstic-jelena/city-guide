import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class NotFoundPage extends Component {
  render() {
    return (
      <ComponentNotFound className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Ops!</h1>
              <h2>Erroe 404 Not found</h2>
              <div className="error-details">
                Sorry, an error occurred. the requested page wasn't found!
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-home" />
                  &nbsp;Back To Main Page
                </Link>
                <Link className="btn btn-outline-secondary btn-lg">
                  <i className="fas fa-develope" />
                  &nbsp;Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ComponentNotFound>
    );
  }
}

export default NotFoundPage;

const ComponentNotFound = styled.div`
  .error-template {
    padding: 40px 15px;
    text-align: center;
  }

  .error-actions {
    margin-top: 15px;
    margin-left: 15px;
  }

  .btn {
    margin-right: 10px;
  }
`;
