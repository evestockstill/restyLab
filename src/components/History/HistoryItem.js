import React from 'react';
import PropTypes from 'prop-types';
import History from './History';
import styles from './HistoryItem.css';

const History = ({ method, URL, onClick, reqBody }) => {
  return (
    <section onClick={() => onClick(method, URL, onClick, reqBody)}>
      <h3 className={styles.method}>{method}</h3>
      <p>{URL}</p>
    </section>
  );
};
History.propTypes = {
  reqBody: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default HistoryItem;
