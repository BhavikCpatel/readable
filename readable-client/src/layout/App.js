import React from 'react';
import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer';
import AppRoutes from './AppRoutes';
import { APP_TITLE } from '../constants';

import '../styles/App.css';

const App = () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header appTitle={APP_TITLE} color="blue-500" />
    <Drawer appTitle={APP_TITLE} />
    <AppRoutes />
    <Footer appTitle={APP_TITLE} />
  </div>
);

export default App;
