import React from 'react';
import PropTypes from 'prop-types';
import PropagateLoader from 'react-spinners/PropagateLoader';
import style from './Loader.module.scss';

const Loader = isLoading => {
  return (
    <div className={style.loaderDiv}>
      <PropagateLoader loading={isLoading} color={'red'} />
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
