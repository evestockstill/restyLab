import React, { Component } from 'react';
import Form from '../components/Form';
import styles from '../components/Form.css';

export default class Resty extends Component {
  state = {
    URL: '',
    method: '',
    reqBody: ''
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
   
  };
  render() {
    return (
      <>
        <div className={styles.form}>
          
          <Form
            URL={this.state.URL}
            handleChange={this.handleChange}
            onSubmit={this.handleSubmit} //change handlesubmit
            
           
          />
    
        </div>
      </>
    );
  }
}
