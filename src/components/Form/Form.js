import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';
import ReactJson from 'react-json-view';

const Form = ({ handleSubmit, handleChange, URL, resBody, reqBody, value }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className={styles.deck}>
          <input
            type='text'
            onChange={handleChange}
            className={styles.wide}
            name='URL'
            placeholder='URL'
            value={URL}
          />
          <div id='methods'>
            <label id='GET'>
              <input
                id={value}
                type='radio'
                onChange={handleChange}
                name='method'
                checked={name}
                value='GET'
              />
            </label>
            <label id='POST'>
              <input
                id={value}
                type='radio'
                onChange={handleChange}
                checked={name}
                name='method'
                value='POST'
              />
            </label>
            <label id='PUT'>
              <input
                id={value}
                type='radio'
                onChange={handleChange}
                checked={name}
                name='method'
                value='PUT'
              />
            </label>
            <label id='PATCH'>
              <input
                id={value}
                type='radio'
                onChange={handleChange}
                checked={name}
                name='method'
                value='PATCH'
              />
            </label>
            <label id='DELETE'>
              <input
                id={value}
                type='radio'
                onChange={handleChange}
                checked={name}
                name='method'
                value='DELETE'
              />
            </label>
            <label>
              <button type='submit'>Go!</button>
            </label>
          </div>
        </section>
        <section className={styles.deck_2}>
          <textarea
            placeholder='Raw JSON body'
            name='reqBody'
            value={reqBody}
            onChange={handleChange}
          ></textarea>
        </section>
        <section>
          <ReactJson src={resBody} />
        </section>
      </form>
    </>
  );
};
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired,
  resBody: PropTypes.array.isRequired,
  reqBody: PropTypes.string.isRequired,
 
};

export default Form;
