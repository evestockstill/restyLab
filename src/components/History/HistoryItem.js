import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css';

const HistoryItem = ({ method, URL }) => {
  return (
    <>
      <h3 className={styles.method}>{method}</h3>
      <p>{URL}</p>
    </>
  );
};
HistoryItem.propTypes = {
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default HistoryItem;
