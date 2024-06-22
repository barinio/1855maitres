import React, { useState, useEffect } from 'react';
import '../../src/chatBot/styles/Input.module.scss';
import styles from './styles/Input.module.scss';

// import axios from 'axios';

function Input({ sendMessage }) {
  const [message, setMessage] = useState('');

  const handleSendMessage = e => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  return (
    <div className={styles.messageBox}>
      <form className={styles.form} onSubmit={handleSendMessage}>
        <input
          required
          placeholder='Message...'
          type='text'
          style={styles.input}
          id='messageInput'
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              handleSendMessage(e);
            }
          }}
        />
        <button
          id='sendButton'
          onClick={handleSendMessage}
          type='submit'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 664 663'
          >
            <path
              fill='none'
              d='M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888'
            ></path>
            <path
              stroke-linejoin='round'
              stroke-linecap='round'
              stroke-width='33.67'
              stroke='#6c6c6c'
              d='M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888'
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Input;
