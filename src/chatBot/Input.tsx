import {
  useState,
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
} from 'react';
import styles from './styles/Input.module.scss';

interface InputProps {
  sendMessage: (message: string) => void;
}

function Input({ sendMessage }: InputProps) {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSendMessage(e as any); // TypeScript workaround for event types
    }
  };

  return (
    <div className={styles.messageBox}>
      <form className={styles.form} onSubmit={handleSendMessage}>
        <input
          required
          placeholder='Message...'
          type='text'
          className={styles.input}
          id='messageInput'
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
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
