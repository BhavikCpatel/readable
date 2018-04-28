import React from 'react';
import PropTypes from 'prop-types';
import { sortOrderMap } from '../../utils';

const PostsOrderMenu = ({ currentSortOrder, orderPosts }) => (
  <React.Fragment>
    <div className="dropdown">
      <div className="btn-group">
        <button
          onClick={e => e.preventDefault()}
          tabIndex="0"
          className="btn mdl-button  mdl-js-button mdl-button--raised mdl-color--pink-600  mdl-button--colored dropdown-toggle"
        >
          Sort Posts <i className="material-icons">sort</i>
        </button>

        <ul className="menu">
          {Array.from(sortOrderMap, sortItem => {
            const [sortField, sortOrder] = sortItem[0].split('-');
            const sortDisplayValue = sortItem[1];

            return (
              <button
                style={{ width: '100%' }}
                key={sortItem[0]}
                className={`btn menu-item ${
                  currentSortOrder === sortItem[0] ? 'mdl-color--blue-300' : ''
                }`}
                onClick={() => orderPosts(sortField, sortOrder)}
              >
                {sortDisplayValue}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  </React.Fragment>
);

PostsOrderMenu.propTypes = {
  currentSortOrder: PropTypes.string.isRequired,
  orderPosts: PropTypes.func.isRequired,
};
export default PostsOrderMenu;
