import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import loadCategories from '../actions/async/categoriesAsyncActions';
import CategoryListContainer from './containers/CategoryListContainer';
import { Footer } from './ui';
import '../styles/App.css';
import AppRoutes from './ui/AppRoutes';

class App extends React.Component {
  componentDidMount() {
    this.props.loadCategories();
  }
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <BrowserRouter>
          <React.Fragment>
            <CategoryListContainer categories={this.props.categories} />
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
});

const mapDispatchToProps = {
  loadCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
