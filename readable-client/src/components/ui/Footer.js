import React from 'react';

const Footer = props => (
  <footer className="app-footer mdl-mini-footer">
    <div className="mdl-mini-footer__left-section mdl-typography--text-center">
      <div className="app-title-footer">{props.appTitle}</div>
    </div>
    <div className="mdl-mini-footer__right-section">
      <ul className="mdl-mini-footer__link-list">
        <li>
          <a href="https://getmdl.io/" alt="Material Design Lite framework">
            Material Design Lite
          </a>
        </li>
        <li>
          <a
            href="https://www.udacity.com/course/react-nanodegree--nd019"
            alt="React Nanodegree Course - Udacity"
          >
            React Nanodegree
          </a>
        </li>
        <li>
          <a
            href="https://www.udacity.com/course/react-nanodegree--nd019"
            alt="Readable project source code - GitHub"
          >
            Source Code
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;