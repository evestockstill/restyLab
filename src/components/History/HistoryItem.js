import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css';

const HistoryItem = ({ method, URL }) => {
  return (
    <>
      <section className={styles.history}>
        <h3 className={styles.method}>{method}</h3>
        <p>{URL}</p>
      </section>
    </>
  );
};
HistoryItem.propTypes = {
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default HistoryItem;
