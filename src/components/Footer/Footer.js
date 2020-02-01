import React, { Component } from 'react';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>
        <h3>&copy; 2020 Eve Stockstill</h3>
      </footer>
    );
  }
}
