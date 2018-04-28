import React from 'react';
import PropTypes from 'prop-types';
import { Header, Drawer } from '../ui';
import { APP_TITLE, HEADER_COLOR } from '../../constants';

class CategoryListContainer extends React.Component {
  static propTypes = {
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
  };
  static defaultProps = {
    categories: null,
  };
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

export default CategoryListContainer;
