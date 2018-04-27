import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import loadCategories from '../actions/async/categoriesAsyncActions';
import CategoryListContainer from './containers/CategoryListContainer';
import { Footer } from './ui';
import '../styles/App.css';
import AppRoutes from './ui/AppRoutes';
import NotificationToast from './ui/NotificationToast';

class App extends React.Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  /* FUTURE:// In case if Notification Close event needs to be handled
  */

  notificationCloseHandler() {
    // this.props.hideNotification();
    // TODO: handle notification dispatch here (based on requirement)
    // console.log('notification closed');
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <BrowserRouter>
          <React.Fragment>
            <CategoryListContainer categories={this.props.categories} />
            {this.props.notification && (
              <NotificationToast
                message={this.props.notification.message}
                type={this.props.notification.type}
                timeout={1500}
                onClose={() => this.notificationCloseHandler()}
              />
            )}

            <AppRoutes />
          </React.Fragment>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  notification: state.ui.notification,
});

const mapDispatchToProps = { loadCategories };
export default connect(mapStateToProps, mapDispatchToProps)(App);
