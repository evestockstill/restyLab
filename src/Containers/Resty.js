import React, { Component } from 'react';
import Form from '../components/Form';
import styles from '../components/Form.css';
import { getResponse } from '../services/apiService';

export default class Resty extends Component {
  state = {
    URL: '',
    method: '',
    resBody: {},
    reqBody: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    const { URL, method } = this.state;

    getResponse(URL, method).then(res => this.setState({ resBody: res }));
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { URL, resBody, reqBody } = this.state;
    return (
      <>
        <div className={styles.form}>
          <Form
            URL={URL}
            resBody={resBody}
            reqBody={reqBody}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </>
    );
  }
}
