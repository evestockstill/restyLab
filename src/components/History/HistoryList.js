import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ historyList, onClick }) => {
  const renderHistoryItems = historyList.map((historyItem, i) => {
    <li key={i}>
      <HistoryItem
        method={historyItem.method}
        reqBody={historyItem.reqBody}
        URL={historyItem.URL}
        onClick={onClick}
      />
    </li>;
  });
  return <ul>{renderHistoryItems}</ul>;
};
HistoryList.propTypes = {
  onClick: PropTypes.func.isRequired,
  historyList: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.string.isRequired,
      URL: PropTypes.string.isRequired,
      reqBody: PropTypes.string.isRequired
    })
  )
};
export default HistoryList;
