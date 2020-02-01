import React, { Component } from 'react';
import Form from '../components/Form/Form';
import { getResponse } from '../services/apiService';

export default class Resty extends Component {
  state = {
    URL: '',
    method: '',
    resBody: [],
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
        
        <Form 
          URL={URL}
          resBody={resBody}
          reqBody={reqBody}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
       
      </>
    );
  }
}
