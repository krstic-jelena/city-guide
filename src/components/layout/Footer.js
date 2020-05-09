import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 col-sm-6">
              <h4> Contact</h4>
              <ul className="list-unstyled">
                <li>Mozete nas kontaktirati na sljedece nacine:</li>
                <li>065 065 065</li>
                <li>
                  <a href="">city-guide@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
              <h4> Mozete nas pronaci i na drustvenim mrezama</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="">www.facebook.com/city-guide</a>
                </li>
                <li>
                  <a href="">www.instagram.com/city-guide</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - all rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  ul li {
    color: var(--mainLightGrey);
  }
`;
