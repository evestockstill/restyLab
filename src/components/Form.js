import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';
import ReactJson from 'react-json-view';

const Form = ({ handleSubmit, handleChange, URL, resBody, reqBody }) => {
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
            <label>
              <input
                type='radio'
                onChange={handleChange}
                name='method'
                value='GET'
              />
              <span>GET</span>
            </label>
            <label>
              <input
                type='radio'
                onChange={handleChange}
                name='method'
                value='POST'
              />
              <span>POST</span>
            </label>
            <label>
              <input
                type='radio'
                onChange={handleChange}
                name='method'
                value='PUT'
              />
              <span>PUT</span>
            </label>
            <label>
              <input
                type='radio'
                onChange={handleChange}
                name='method'
                value='PATCH'
              />
              <span>PATCH</span>
            </label>
            <label>
              <input
                type='radio'
                onChange={handleChange}
                name='method'
                value='DELETE'
              />
              <span>DELETE</span>
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
  resBody: PropTypes.object.isRequired,
  reqBody: PropTypes.string.isRequired
};

export default Form;
