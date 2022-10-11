import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-1">
            <div className="footer-logo">
              <img src="/images/logo.svg>"></img>
              <p>Odyssey</p>
            </div>
            <div>some caption</div>
        </div>
        <div>
            HOME
        </div>
        <div className="footer-3">
            <div className="social">
              <div>Social Media</div>
              <div className="social-icons">
                <img src="/images/instagram.svg"></img>
                <img src="/images/github.svg"></img>
              </div>
            </div>
            <div className="contact">
              <div>Contact Us</div>
              <div className="social-icons">
                <img src="/images/email.svg"></img>
                <img src="/images/instagram.svg"></img>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
