import React, { Component } from 'react';
import Form from '../components/Form/Form';
import Button from '../components/common/Button'
import RadioButtons from '../components/common/RadioButtons';
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
    const { URL, resBody, reqBody, method } = this.state;
    const radioButtons = [
      { label: 'Get', value: 'GET' },
      { label: 'POST', value: 'POST' },
      { label: 'PUT', value: 'PUT' },
      { label: 'PATCH', value: 'PATCH' },
      { label: 'DELETE', value: 'DELETE' }
    ];
    return (
      <>
        
        <Form>
          <RadioButtons radioButtons={radioButtons} name={method} onChange={this.handleChange} />
          URL={URL}
          <Button text="Go" onClick={getResponse} />
          resBody={resBody}
          reqBody={reqBody}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        </Form>
       
      </>
    );
  }
}
