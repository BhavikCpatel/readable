import React from 'react';
import PostsList from './PostsList';
import PostDetail from './PostDetail';
import PostForm from './PostForm';

const AppRoutes = props => (
  <main className="mdl-layout__content">
    <div className="page-content">
      <PostsList />
      <PostDetail />
      <PostForm />
    </div>
  </main>
);

export default AppRoutes;
