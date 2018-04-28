import React from 'react';
import LinkButton from '../ui/LinkButton';

const AddPostButton = () => (
  <LinkButton
    icon="add"
    value="Add Post"
    color="pink-600"
    path="/post/create"
  />
);

export default AddPostButton;
