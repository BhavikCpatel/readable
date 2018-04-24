import React from 'react';
import { Header, Drawer } from '../ui';
import { APP_TITLE, HEADER_COLOR } from '../../constants';

class CategoryListContainer extends React.Component {
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
