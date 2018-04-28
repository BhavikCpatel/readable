import React from 'react';
import LinkButton from './LinkButton';

const PathNotFound = () => (
  <div className="mdl-typography--text-center error-page">
    <div className="mdl-typography--display-3 mdl-color-text--red">Oops!</div>
    <i className="material-icons mdl-typography--headline mdl-color-text--red-600">
      sentiment_very_dissatisfied
    </i>
    <div className="mdl-typography--display-2">
      <span className="">You have just landed in unknown territory!</span>
      <div className="mdl-layout-spacer" />
      <span className="mdl-typography--body-2">
        Please use the following{' '}
        <span className="mdl-color-text--blue-400">home button</span> or any of
        the links from navigation bar to go in safe zone!
      </span>
      <div>
        <LinkButton path="/" colored="blue-400" icon="home" value="" />
      </div>
    </div>
  </div>
);

export default PathNotFound;
