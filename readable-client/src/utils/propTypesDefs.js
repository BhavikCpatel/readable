import PropTypes from 'prop-types';

export const postPropTypes = PropTypes.shape({
  id: PropTypes.string,
  timeStamp: PropTypes.number,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  deleted: PropTypes.bool.isRequired,
});

export const commentPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
  timeStamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  deleted: PropTypes.bool.isRequired,
  parentDeleted: PropTypes.bool.isRequired,
});
