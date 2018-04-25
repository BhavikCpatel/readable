import React from 'react';

const Footer = props => (
  <footer className="app-footer mdl-mini-footer">
    <div className="mdl-mini-footer__left-section mdl-typography--text-center">
      <ul className="mdl-mini-footer__link-list">
        <li>
          <a
            href="https://github.com/BhavikCpatel"
            target="_blank"
            rel="noopener noreferrer"
            alt="Bhavik Patel - GitHub Page"
          >
            Developed By: Bhavik Patel
          </a>
        </li>
      </ul>
    </div>
    <div className="mdl-mini-footer__right-section">
      <ul className="mdl-mini-footer__link-list">
        <li>
          <a
            href="https://getmdl.io/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Material Design Lite framework"
          >
            Material Design Lite
          </a>
        </li>
        <li>
          <a
            href="https://www.udacity.com/course/react-nanodegree--nd019"
            target="_blank"
            rel="noopener noreferrer"
            alt="React Nanodegree Course - Udacity"
          >
            React Nanodegree
          </a>
        </li>
        <li>
          <a
            href="https://github.com/BhavikCpatel/readable"
            target="_blank"
            rel="noopener noreferrer"
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
