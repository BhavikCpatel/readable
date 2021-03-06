import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { APP_TITLE, HEADER_COLOR } from '../constants';
import AppRoutes from './AppRoutes';
import loadCategories from '../actions/async/categoriesAsyncActions';
import CategoryList from './category/CategoryList';
import Footer from './ui/Footer';
import NotificationToast from './ui/NotificationToast';
import Header from './ui/Header';
import Drawer from './ui/Drawer';
import '../styles/App.css';

class App extends React.Component {
  static propTypes = {
    loadCategories: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        }),
      ),
      isLoading: PropTypes.bool.isRequired,
      error: PropTypes.string,
    }),
    notification: PropTypes.shape({
      message: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
    }),
  };

  static defaultProps = {
    notification: null,
    categories: null,
  };
  componentDidMount() {
    this.props.loadCategories();
  }

  /* FUTURE:// In case if Notification Close event needs to be handled
    Use the following handler in NotificationToase to handle close action
    ***onClose={() => this.notificationCloseHandler()}
    
  notificationCloseHandler() {
    // this.props.hideNotification();
    // TODO: handle notification dispatch here (based on requirement)
    // console.log('notification closed');
  }
  */
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <BrowserRouter>
          <React.Fragment>
            <Header appTitle={APP_TITLE} color={HEADER_COLOR}>
              <CategoryList categories={this.props.categories} />
            </Header>
            <Drawer
              appTitle={APP_TITLE}
              color={HEADER_COLOR}
              items={this.props.categories}
            />
            {this.props.notification && (
              <NotificationToast
                message={this.props.notification.message}
                type={this.props.notification.type}
                timeout={1500}
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
