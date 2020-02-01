import React, { Component } from 'react';
import Form from '../components/Form/Form';
import HistoryList from '../components/History/HistoryList';
import { getResponse } from '../services/apiService';

export default class Resty extends Component {
  state = {
    URL: '',
    method: '',
    resBody: [],
    reqBody: '',
    historyList: [],
    password: '',
    userName: '',
    bearerToken: ''
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
    const { URL, resBody, reqBody, password, userName, method, bearerToken } = this.state;
    return (
      <>
        
        <Form 
          URL={URL}
          resBody={resBody}
          reqBody={reqBody}
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
