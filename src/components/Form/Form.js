import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';
import ReactJson from 'react-json-view';

const Form = ({
  onSubmit,
  onChange,
  URL,
  resBody,
  userJson,
  method,
  userName,
  password,
  bearerToken
}) => (
  <form onSubmit={onSubmit}>
    <input
      type='text'
      onChange={onChange}
      className={styles.wide}
      name='URL'
      placeholder='URL'
      value={URL}
    />
    <section className={styles.radio}>
      <label>
        <input
          type='radio'
          onChange={onChange}
          name='method'
          checked={method === 'GET'}
          value='GET'
        />
        <span>GET</span>
      </label>
      <label>
        <input
          type='radio'
          onChange={onChange}
          name='method'
          checked={method === 'POST'}
          value='POST'
        />
        <span>POST</span>
      </label>
      <label>
        <input
          type='radio'
          onChange={onChange}
          name='method'
          checked={method === 'PUT'}
          value='PUT'
        />
        <span>PUT</span>
      </label>
      <label>
        <input
          type='radio'
          onChange={onChange}
          name='method'
          checked={method === 'PATCH'}
          value='PATCH'
        />
        <span>PATCH</span>
      </label>
      <label>
        <input
          type='radio'
          onChange={onChange}
          name='method'
          checked={method === 'DELETE'}
          value='DELETE'
        />
        <span>DELETE</span>
      </label>
      <button type='submit'>Go!</button>
    </section>
    <section className={styles.deck_2}>
      <textarea
        name='userJson'
        type='text'
        placeholder='Raw JSON body'
        value={userJson}
        onChange={onChange}
      ></textarea>
      <section className={styles.auth}>
        <h3>Basic Authorization</h3>
        <input
          type='text'
          placeholder='Username'
          value={userName}
          name='userName'
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Password'
          value={password}
          name='password'
          onChange={onChange}
        />
        <h2>Bearer Token</h2>
        <input
          type='text'
          placeholder='Bearer Token'
          value={bearerToken}
          name='bearerToken'
          onChange={onChange}
        />
        <section>
          <ReactJson src={resBody} />
        </section>
      </section>
    </section>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired,
  resBody: PropTypes.array.isRequired,
  userJson: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  bearerToken: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default Form;
