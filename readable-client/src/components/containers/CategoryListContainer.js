import React from 'react';

import { connect } from 'react-redux';
import { Header, Drawer } from '../ui';
import { APP_TITLE, HEADER_COLOR } from '../../constants';
import loadCategories from '../../actions/async/categoriesAsyncActions';

class CategoryListContainer extends React.Component {
  componentDidMount() {
    this.props.loadCategories();
  }
  render() {
    const { categories } = this.props;
    return (
      categories && (
        <React.Fragment>
          <Header
            appTitle={APP_TITLE}
            color={HEADER_COLOR}
            items={categories}
          />
          <Drawer
            appTitle={APP_TITLE}
            color={HEADER_COLOR}
            items={categories}
          />
        </React.Fragment>
      )
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.data,
  isLoading: categories.isLoading,
});

export default connect(mapStateToProps, { loadCategories })(
  CategoryListContainer,
);
