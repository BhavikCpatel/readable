import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CategoryListContainer from './containers/CategoryListContainer';
import { Footer } from './ui';
import '../styles/App.css';
import AppRoutes from './ui/AppRoutes';

const App = () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <BrowserRouter>
      <React.Fragment>
        <CategoryListContainer />
        <AppRoutes />
      </React.Fragment>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
