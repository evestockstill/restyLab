import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit }) => {
  <>
    <section className='deck'>
      <form>
        <input
          type='text'
          className='wide'
          name='url'
          placeholder='URL'
          value />
        <div id='methods'>
          <label>
            <input type='radio' name='method' value='get' />
            <span>GET</span>
          </label>
          <label>
            <input type='radio' name='method' value='post' />
            <span>POST</span>
          </label>
          <label>
            <input type='radio' name='method' value='put' />
            <span>PUT</span>
          </label>
          <label>
            <input type='radio' name='method' value='patch' />
            <span>PATCH</span>
          </label>
          <label>
            <input type='radio' name='method' value='delete' />
            <span>DELETE</span>
          </label>
          <label>
            <button type="submit">Go!</button>
          </label>
        </div>
      </form>
    </section>
  </>;  
};
