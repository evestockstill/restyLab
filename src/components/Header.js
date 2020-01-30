import React, { Component } from 'react';
import styles from './Header.css';
// eslint-disable-next-line no-unused-vars
import normalize from 'normalize.css';
export default class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <h1>RESTy</h1>
      </header>
    );
  }
}
