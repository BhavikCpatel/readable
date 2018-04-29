import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '../ui/Drawer';
import NavBar from '../ui/NavBar';
import { APP_TITLE, HEADER_COLOR } from '../../constants';

class CategoryList extends React.Component {
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
          <NavBar items={categories.data} />
          <Drawer
            appTitle={APP_TITLE}
            color={HEADER_COLOR}
            items={categories.data}
          />
        </React.Fragment>
      )
    );
  }
}

export default CategoryList;
