import React from 'react';
import PostContent from './PostContent';
import PostCardCategory from './PostCardCategory';
import PostCardTitle from './PostCardTitle';
import PostCardActions from './PostCardActions';

const Post = props => (
  <React.Fragment>
    <PostCardCategory category="redux" />
    <PostCardTitle title="React and Redux are awesome!" />
    <PostContent value="This is my post" />
    <PostCardActions isDetailCard={props.isDetailCard} />
  </React.Fragment>
);

export default Post;
