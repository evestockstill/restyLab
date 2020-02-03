import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ historyList }) => {
  const renderHistoryItems = historyList.map((historyItem, i) => {
    <li key={i}>
      <HistoryItem method={historyItem.method} URL={historyItem.URL} />
    </li>;
  });
  return <ul>{renderHistoryItems}</ul>;
};
HistoryList.propTypes = {
  historyList: PropTypes.array.isRequired
};
export default HistoryList;
