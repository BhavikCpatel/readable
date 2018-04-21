import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CategoryListContainer from './containers/CategoryListContainer';
import { Footer } from './ui';
import '../styles/App.css';

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <CategoryListContainer />
    </BrowserRouter>
    <Footer />
  </React.Fragment>
);

export default App;
