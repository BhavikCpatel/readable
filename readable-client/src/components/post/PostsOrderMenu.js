import React from 'react';
import { sortOrderMap } from '../../utils';

const PostsOrderMenu = ({ currentSortOrder, orderPosts }) => (
  <React.Fragment>
    <div className="dropdown">
      <div className="btn-group">
        <a
          href="javascript:void(0);"
          tabIndex="0"
          className="btn mdl-button mdl-button--raised mdl-color--pink-600  mdl-button--colored dropdown-toggle"
        >
          Sort Posts <i className="material-icons">sort</i>
        </a>

        <ul className="menu">
          {Array.from(sortOrderMap, sortItem => {
            const [sortField, sortOrder] = sortItem[0].split('-');
            const sortDisplayValue = sortItem[1];

            return (
              <li
                key={sortItem[0]}
                className={`menu-item ${
                  currentSortOrder === sortItem[0] ? 'mdl-color--blue-300' : ''
                }`}
                onClick={() => orderPosts(sortField, sortOrder)}
              >
                {sortDisplayValue}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </React.Fragment>
);

export default PostsOrderMenu;
