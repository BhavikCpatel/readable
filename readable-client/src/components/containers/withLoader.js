import React from 'react';
import Loader from '../ui/Loader';

const withLoader = (WrappedComponent, loadingMessage) => props =>
  props.isLoading ? (
    <Loader message={loadingMessage} />
  ) : (
    <WrappedComponent {...props} />
  );

export default withLoader;
