import { useState } from 'react';
import styles from './styles/Assistant.module.scss';
import Chat from './Chat';

function Assistant() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div className={styles.appContainer}>
      {!isChatOpen && (
        <button onClick={toggleChat} className={styles.openModalBtn}>
          Écrivez-nous
        </button>
      )}
      {isChatOpen && <Chat closeChat={toggleChat} />}
    </div>
  );
}

export default Assistant;
