/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortifolioContext from './PortifolioContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const contextValue = {
    data,
    setData,
  };

  return (
    <PortifolioContext.Provider value={contextValue}>
      {children}
    </PortifolioContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
