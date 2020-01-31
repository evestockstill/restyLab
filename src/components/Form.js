import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, handleChange, URL }) => {
  return (
    <>
      <section className='deck'>
        <form className={styles.Form} onSubmit={onSubmit}>
          <input
            type='text'
            onChange={handleChange}
            className={styles.wide}
            name='URL'
            placeholder='URL'
            value={URL}
          />
          <div id='methods'>
            <label>
              <input type='radio' onChange={handleChange} name='method' value='get' />
              <span>GET</span>
            </label>
            <label>
              <input
                type='radio'
                onChange={handleChange}
                name='method'
                value='post'
              />
              <span>POST</span>
            </label>
            <label>
              <input type='radio' onChange={handleChange} name='method' value='put' />
              <span>PUT</span>
            </label>
            <label>
              <input
                type='radio'
                onChange={handleChange}
                name='method'
                value='patch'
              />
              <span>PATCH</span>
            </label>
            <label>
              <input
                type='radio'
                onChange={handleChange}
                name='method'
                value='delete'
              />
              <span>DELETE</span>
            </label>
            <label>
              <button type='submit'>Go!</button>
            </label>
          </div>
        </form>
      </section>
    </> 
  );
  
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired
};

export default Form;
