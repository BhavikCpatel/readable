import React from 'react';
import { sortOrderMap } from '../../utils';

const PostsOrderMenu = ({ currentSortOrder, orderPosts }) => (
  <React.Fragment>
    <button
      id="menu-speed"
      className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-color--pink-600  mdl-button--colored"
    >
      Sort Posts <i className="material-icons">sort</i>
    </button>
    <ul
      className="mdl-menu mdl-js-menu mdl-js-ripple-effect"
      htmlFor="menu-speed"
    >
      {Array.from(sortOrderMap, sortItem => {
        const [sortField, sortOrder] = sortItem[0].split('-');
        const sortDisplayValue = sortItem[1];
        return (
          <li
            className={`mdl-menu__item ${currentSortOrder === sortItem[0] &&
              'mdl-color--blue-300'}`}
            onClick={() => orderPosts(sortField, sortOrder)}
          >
            {sortDisplayValue}
          </li>
        );
      })}
    </ul>
  </React.Fragment>
);

export default PostsOrderMenu;
