import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsListContainer from '../containers/PostsListContainer';
import PostDetail from '../../layout/PostDetail';
import PostForm from '../../layout/PostForm';

const AppRoutes = () => (
  <main className="mdl-layout__content">
    <div className="page-content">
      <Switch>
        <Route exact path="/" component={PostsListContainer} />
        <Route exact path="/:category" component={PostsListContainer} />
        <Route exact path="/post/create" component={PostForm} />
        <Route exact path="/post/edit/:postId" component={PostForm} />

        <Route exact path="/post/:postId" component={PostDetail} />
        <Route
          render={() => (
            <div>
              Oops!, You landed in unknown territory!, please click any of the
              links above.
            </div>
          )}
        />
      </Switch>
    </div>
  </main>
);

export default AppRoutes;