import React, { Component } from 'react';
import Form from '../components/Form/Form';
import HistoryList from '../components/History/HistoryList';
import { getResponse } from '../services/apiService';

export default class Resty extends Component {
  state = {
    URL: '',
    method: '',
    resBody: [],
    request: [],
    userJson: '',
    password: '',
    userName: '',
    bearerToken: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    const { URL, method } = this.state;
    getResponse(URL, method).then(res => this.setState({ resBody: res }));
    return this.setState (prevState => ({
      ...prevState,
      request: [...prevState.request, {
        method,
        URL
      }

      ]
    }));
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const {
      URL,
      resBody,
      userJson,
      password,
      userName,
      method,
      request,
      bearerToken
    } = this.state;
    return (
      <>
        <div>
          <HistoryList historyList={request} />
        </div>
        <Form
          URL={URL}
          resBody={resBody}
          userJson={userJson}
          password={password}
          userName={userName}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          method={method}
          bearerToken={bearerToken}
        />
      </>
    );
  }
}
