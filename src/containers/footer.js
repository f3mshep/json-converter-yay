import React from "react";

const Footer = props => (
  <footer>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <span className="copyright">
            Copyright &copy; Alexandra Wright 2018
          </span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://twitter.com/f3mshep">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/f3mshep">
                <i className="fa fa-github" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/alexandra-c-wright/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4" />
      </div>
    </div>
  </footer>
);

export default Footer;
