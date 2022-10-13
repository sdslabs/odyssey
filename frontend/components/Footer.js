import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-1">
            <div className="footer-logo">
              <img src="/images/logo.svg"></img>
            </div>
            <div className="footer-1_text">ODYSSEY</div>
        </div>
        <div className="footer-text">
        A JOURNEY TO OPEN SOURCE SOME TAGLINE IDK something related to what is going on and some lines about open source philosophy :)
        </div>
        <div className="footer-social">
            <div className="contact">
              <div className="footer-social-text">Contact Us</div>
              <div className="social-icons">
                <img className="icon_img" src="/images/github.svg"></img>
                <img className="icon_img" src="/images/instagram.svg"></img>
                <img className="icon_img" src="/images/email.svg"></img>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
