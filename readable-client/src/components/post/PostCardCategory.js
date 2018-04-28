import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../ui/SectionHeader';

const PostCardCategory = props => (
  <SectionHeader color="grey-600" title={props.category} />
);

PostCardCategory.propTypes = {
  category: PropTypes.string.isRequired,
};
export default PostCardCategory;
