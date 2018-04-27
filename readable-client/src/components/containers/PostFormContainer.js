import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from '../post/PostForm';
import {
  editPost,
  addPost,
  getPostById,
} from '../../actions/async/postsAsyncActions';

class PostFormContainer extends React.Component {
  componentDidMount() {
    // this.props.getPost(this.props.filterByCategory);
    /* console.log(
      'Post form ComponentDidMount:',
      this.props.postId,
      this.props.post,
    ); */
    if (!this.props.post && this.props.postId) {
      //console.log('Calling Get Post for Edit', this.props.postId);
      this.props.getPostById(this.props.postId);
    }
  }

  render() {
    //console.log('PostformContainer', this.props);
    return <PostForm {...this.props} />;
  }
}

const mapStateToProps = ({ posts, categories }, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = posts.data.filter(post => post.id === postId);

 /* console.group('Postform');
  console.log(ownProps);
  console.log(posts);
  console.log(post);

  console.log(categories);
  console.log(postId);
  console.groupEnd('Postform');
*/
  return {
    post: post[0] || null,
    categories: categories.data,
    error: posts.error,
    postId,
  };
};

const mapDispatchToProps = {
  addPost,
  editPost,
  getPostById,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostFormContainer),
);
